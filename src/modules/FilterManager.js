import LockScrollManager from '@/utils/LockScrollManager'
import PriceRange from '@/modules/PriceRange'

class FilterManager {
    selectors = {
        filterRoot:     '[data-js-filter]',
        filterOpenBtn:  '[data-js-filter-open]',
        filterCloseBtn: '[data-js-filter-close]',
        filterOverlay:  '[data-js-filter-overlay]',
        sortToggleBtn:  '[data-js-sort-toggle]',
        sortDropdown:   '[data-js-sort-dropdown]',
        filterInputs:   'input[name^="arrFilter"]',
        tagsContainer:  '.product-controls__tags',
        priceRangeRoot: '[data-js-price-range]',
        inlineRoot:     '.product-controls',
    }

    stateClasses = { isOpen: 'is-open' }

    constructor() {
        this.filterRoot    = document.querySelector(this.selectors.filterRoot)
        this.openBtn       = document.querySelector(this.selectors.filterOpenBtn)
        this.closeBtn      = this.filterRoot?.querySelector(this.selectors.filterCloseBtn)
        this.overlay       = this.filterRoot?.querySelector(this.selectors.filterOverlay)
        this.sortToggle    = document.querySelector(this.selectors.sortToggleBtn)
        this.sortDropdown  = document.querySelector(this.selectors.sortDropdown)
        this.tagsContainer = document.querySelector(this.selectors.tagsContainer)
        this.form          = this.filterRoot?.querySelector('form')
        this.inlineRoot    = document.querySelector(this.selectors.inlineRoot)

        this.demoMode = !!this.form?.hasAttribute('data-demo')

        const priceRoot = this.filterRoot?.querySelector(this.selectors.priceRangeRoot)
        if (priceRoot) this.priceRange = new PriceRange(priceRoot)

        this.pending = new Map()        // черновик (модалка)
        this.appliedState = new Map()   // применённое состояние (истина)

        this.onKeyDown = this.onKeyDown.bind(this)
        this.bindEvents()
    }

    bindEvents() {
        if (this.openBtn)  this.openBtn.addEventListener('click', this.openFilter)
        if (this.closeBtn) this.closeBtn.addEventListener('click', this.closeFilter)
        if (this.overlay)  this.overlay.addEventListener('click', this.closeFilter)

        // сортировка — применяется сразу
        if (this.sortToggle && this.sortDropdown) {
            this.sortToggle.addEventListener('click', this.toggleSortDropdown)
            document.addEventListener('click', this.handleGlobalClick)
            this.sortDropdown.addEventListener('change', () => {
                this.updateSortLabel()
                this.submitFilterForm()
            })
        }

        // submit модалки
        this.form?.addEventListener('submit', (e) => {
            if (this.demoMode || import.meta.env.MODE !== 'production') e.preventDefault()
            this.applyModalChanges()
            this.closeFilter()
            if (!this.demoMode && import.meta.env.MODE === 'production') {
                this.form.submit()
            }
        })

        // reset модалки → теперь сбрасываем ВЕЗДЕ (модалка + inline)
        this.form?.addEventListener('reset', (e) => {
            e.preventDefault() // сами управляем сбросом
            this.resetEverywhere()
            if (!this.demoMode && import.meta.env.MODE === 'production') {
                this.form.submit()
            }
        })

        // все инпуты проекта
        document.querySelectorAll(this.selectors.filterInputs).forEach(input => {
            const inModal  = this.filterRoot?.contains(input)
            const inInline = this.inlineRoot?.contains(input)

            if (inInline) {
                input.addEventListener('change', (e) => {
                    this.syncToTwins(e.target)
                    this.handleTagsForInput(e.target) // чипы применяются сразу
                    this.captureAppliedFromDom()
                    this.submitFilterForm()
                })
            } else if (inModal) {
                input.addEventListener('change', (e) => this.storePending(e.target)) // в черновик
            } else {
                input.addEventListener('change', (e) => {
                    this.syncToTwins(e.target)
                    this.handleTagsForInput(e.target)
                    this.captureAppliedFromDom()
                    this.submitFilterForm()
                })
            }
        })

        // удаление лейблов — применяем сразу
        this.tagsContainer?.addEventListener('click', (e) => {
            if (e.target.classList.contains('product-tag__remove')) {
                const tag = e.target.closest('.product-tag')
                if (!tag) return
                this.removeTag(tag.dataset.value, tag.dataset.name)
                this.captureAppliedFromDom()
                this.submitFilterForm()
            }
        })
    }

    // ===== модалка
    openFilter = () => {
        this.filterRoot?.classList.add(this.stateClasses.isOpen)
        this.filterRoot?.setAttribute('aria-hidden','false')
        LockScrollManager.lock()

        this.restoreModalFromApplied()
        this.pending.clear();

        requestAnimationFrame(() => this.priceRange?.updateTrack())
        const dlg = this.filterRoot?.querySelector('.filter-modal-window__dialog')
        if (dlg) {
            const onEnd = () => {
                this.priceRange?.updateTrack()
                dlg.removeEventListener('transitionend', onEnd)
            }
            dlg.addEventListener('transitionend', onEnd)
        }
        document.addEventListener('keydown', this.onKeyDown)
    }

    closeFilter = () => {
        this.filterRoot?.classList.remove(this.stateClasses.isOpen)
        this.filterRoot?.setAttribute('aria-hidden','true')
        document.removeEventListener('keydown', this.onKeyDown)
        LockScrollManager.unlock()
        this.pending.clear();
    }

    onKeyDown(e) { if (e.key === 'Escape' || e.key === 'Esc') this.closeFilter() }

    // ===== сортировка
    toggleSortDropdown = (e) => {
        e.stopPropagation()
        this.sortToggle?.parentElement?.classList.toggle(this.stateClasses.isOpen)
    }
    handleGlobalClick = (e) => {
        if (this.sortDropdown &&
            !this.sortDropdown.contains(e.target) &&
            !this.sortToggle.contains(e.target)) {
            this.sortToggle?.parentElement?.classList.remove(this.stateClasses.isOpen)
        }
    }
    updateSortLabel = () => {
        const checkedRadio = this.sortDropdown?.querySelector('input[type="radio"]:checked')
        if (!checkedRadio) return
        const labelText = checkedRadio.parentElement.textContent.trim()
        const valueSpan = this.sortToggle?.querySelector('.product-sort__value')
        if (valueSpan) valueSpan.textContent = labelText
    }

    submitFilterForm = () => {
        if (!this.form) return
        if (this.demoMode || import.meta.env.MODE !== 'production') return
        this.form.submit()
    }

    // ===== синхронизация дублей
    syncToTwins(changed) {
        const { name, type, value, checked } = changed
        if (type === 'checkbox' && name.endsWith('[]')) {
            document.querySelectorAll(`input[name="${name}"][value="${value}"]`).forEach(el => {
                if (el !== changed) el.checked = checked
            })
            return
        }
        document.querySelectorAll(`input[name="${name}"]`).forEach(el => {
            if (el === changed) return
            if (type === 'checkbox' || type === 'radio') el.checked = checked
            else el.value = value
        })
    }

    // ===== лейблы (только для [] чекбоксов)
    handleTagsForInput(input) {
        const { name, type } = input
        if (!(type === 'checkbox' && name.endsWith('[]'))) return
        const { value: v, group } = this.getInputValueAndGroup(input)
        if (input.checked) this.addTag(group, v, name)
        else this.removeTag(v, name)
    }

    addTag(group, value, name) {
        if (!this.tagsContainer) return;
        if (this.tagsContainer.querySelector(`[data-name="${name}"][data-value="${value}"]`)) return;

        const tag = document.createElement('span');
        tag.className = 'product-tag'; // без is-visible
        tag.dataset.value = value;
        tag.dataset.name  = name;
        tag.innerHTML = `
    ${group}: ${value}
    <button type="button" class="product-tag__remove" aria-label="Удалить фильтр">
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"/>
        </svg>
    </button>
  `;

        // начальные inline-стили, чтобы точно было «откуда анимировать»
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(4px)';

        this.tagsContainer.appendChild(tag);

        // форсим рефлоу (любой чтением layout-свойства)
        // чтобы браузер «зафиксировал» стартовое состояние
        // eslint-disable-next-line no-unused-expressions
        tag.offsetWidth;

        // убираем инлайны и включаем конечный класс — стартует transition
        tag.style.opacity = '';
        tag.style.transform = '';

        // иногда одного reflow мало (особенно в Safari) — добавим класс на следующий кадр
        requestAnimationFrame(() => {
            tag.classList.add('is-visible');
        });
    }


    removeTag(value, name) {
        const tags = this.tagsContainer?.querySelectorAll(`.product-tag[data-name="${name}"][data-value="${value}"]`);
        if (!tags || !tags.length) return;

        tags.forEach(tag => {
            tag.classList.add('is-removing');
            tag.addEventListener('transitionend', () => tag.remove(), { once: true });
        });

        // синхронизируем чекбоксы
        document.querySelectorAll(`input[name="${name}"][value="${value}"]`)
            .forEach(el => { el.checked = false; });
    }

    resetEverywhere() {
        // 1) теги — анимированно
        if (this.tagsContainer) {
            const tags = this.tagsContainer.querySelectorAll('.product-tag');
            if (tags.length) {
                tags.forEach(tag => {
                    tag.classList.add('is-removing');
                    tag.addEventListener('transitionend', () => tag.remove(), { once: true });
                });
            }
        }

        // 2) инпуты
        document.querySelectorAll(this.selectors.filterInputs).forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false;
            } else {
                if (input.defaultValue !== undefined) input.value = input.defaultValue;
                else input.value = '';
            }
        });

        // 3) цена
        this.priceRange?.reset();
        this.priceRange?.updateTrack();

        // 4) состояния
        this.pending.clear();
        this.appliedState.clear();

        // 5) сабмит в проде; в демо/dev — не сабмитим
        this.submitFilterForm();
    }

    // ===== МОДАЛКА: черновик
    storePending(input) {
        const { name, type } = input
        const { value } = this.getInputValueAndGroup(input)
        if (type === 'checkbox' && name.endsWith('[]')) {
            const set = new Set(this.getCheckedValuesInModal(name));
            if (input.checked) set.add(value); else set.delete(value);
            this.pending.set(name, Array.from(set));
            return;
        }
        if (type === 'checkbox' || type === 'radio') {
            this.pending.set(name, input.checked)
            return
        }
        this.pending.set(name, input.value)
    }

    snapshotModalToPending() {
        const map = new Map()
        const modalInputs = this.filterRoot?.querySelectorAll(this.selectors.filterInputs) || []
        modalInputs.forEach(input => {
            const { name, type } = input
            if (type === 'checkbox' && name.endsWith('[]')) {
                if (!map.has(name)) map.set(name, [])
                const { value } = this.getInputValueAndGroup(input)
                if (input.checked) map.get(name).push(value)
            } else if (type === 'checkbox' || type === 'radio') {
                map.set(name, !!input.checked)
            } else {
                map.set(name, input.value)
            }
        })
        this.pending = map
    }

    getGroupLabelMap() {
        const map = new Map()
        this.filterRoot?.querySelectorAll('.filter-modal-window__group').forEach(group => {
            const label = group.dataset.groupLabel || 'Фильтр'
            group.querySelectorAll('input[name]').forEach(inp => map.set(inp.name, label))
        })
        return map
    }

    applyModalChanges() {
        if (this.pending.size === 0) this.snapshotModalToPending()

        const groupMap = this.getGroupLabelMap()

        for (const [name, val] of this.pending.entries()) {
            if (Array.isArray(val)) {
                document.querySelectorAll(`input[name="${name}"]`).forEach(el => { el.checked = false })
                if (this.tagsContainer) {
                    this.tagsContainer
                        .querySelectorAll(`.product-tag[data-name="${name}"]`)
                        .forEach(tag => tag.remove())
                }
                const groupLabel = groupMap.get(name) || 'Фильтр'
                val.forEach(v => {
                    document.querySelectorAll(`input[name="${name}"][value="${v}"]`).forEach(el => { el.checked = true })
                    this.addTag(groupLabel, v, name)
                })
            } else if (typeof val === 'boolean') {
                document.querySelectorAll(`input[name="${name}"]`).forEach(el => { el.checked = val })
            } else {
                document.querySelectorAll(`input[name="${name}"]`).forEach(el => { el.value = val })
            }
        }

        this.priceRange?.updateTrack()
        this.captureAppliedFromDom() // зафиксируем применённое
        this.pending.clear()
    }

    restoreModalFromApplied() {
        if (this.appliedState.size === 0) return
        for (const [name, val] of this.appliedState.entries()) {
            if (Array.isArray(val)) {
                this.filterRoot?.querySelectorAll(`input[name="${name}"]`).forEach(el => { el.checked = false })
                val.forEach(v => {
                    this.filterRoot?.querySelectorAll(`input[name="${name}"][value="${v}"]`)
                        .forEach(el => { el.checked = true })
                })
            } else if (typeof val === 'boolean') {
                this.filterRoot?.querySelectorAll(`input[name="${name}"]`).forEach(el => { el.checked = val })
            } else {
                this.filterRoot?.querySelectorAll(`input[name="${name}"]`).forEach(el => { el.value = val })
            }
        }
        requestAnimationFrame(() => this.priceRange?.updateTrack())
    }

    // ===== новый: сброс ВЕЗДЕ
    resetEverywhere() {
        // 1) теги — анимированно
        if (this.tagsContainer) {
            const tags = this.tagsContainer.querySelectorAll('.product-tag');
            if (tags.length) {
                tags.forEach(tag => {
                    tag.classList.add('is-removing');
                    tag.addEventListener('transitionend', () => tag.remove(), { once: true });
                });
            }
        }

        // 2) инпуты
        document.querySelectorAll(this.selectors.filterInputs).forEach(input => {
            if (input.type === 'checkbox' || input.type === 'radio') {
                input.checked = false;
            } else {
                if (input.defaultValue !== undefined) input.value = input.defaultValue;
                else input.value = '';
            }
        });

        // 3) цена
        this.priceRange?.reset();
        this.priceRange?.updateTrack();

        // 4) состояния
        this.pending.clear();
        this.appliedState.clear();

        // 5) сабмит в проде; в демо/dev — не сабмитим
        this.submitFilterForm();
    }

    // ===== фиксация applied из DOM (нужно для inline)
    captureAppliedFromDom() {
        const map = new Map()
        const names = new Set()
        document.querySelectorAll(this.selectors.filterInputs).forEach(inp => names.add(inp.name))
        names.forEach(name => {
            if (name.endsWith('[]')) {
                const vals = Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
                    .map(el => this.getInputValueAndGroup(el).value)
                map.set(name, vals)
            }
        })
        document.querySelectorAll(this.selectors.filterInputs).forEach(inp => {
            const { name, type } = inp
            if (name.endsWith('[]')) return
            if (type === 'checkbox' || type === 'radio') map.set(name, !!inp.checked)
            else map.set(name, inp.value)
        })
        this.appliedState = map
    }

    getCheckedValuesInModal(name) {
        return Array.from(this.filterRoot.querySelectorAll(`input[name="${name}"]:checked`))
            .map(el => this.getInputValueAndGroup(el).value)
    }

    getInputValueAndGroup(input) {
        let value = input.value
        if (!value || value === 'on') {
            value =
                input.getAttribute('data-value') ||
                input.id ||
                (input.nextElementSibling && input.nextElementSibling.textContent
                    ? input.nextElementSibling.textContent.trim()
                    : '')
        }
        const groupEl = input.closest('.filter-modal-window__group')
        const group = groupEl?.dataset.groupLabel || 'Фильтр'
        const labelEl = input.nextElementSibling
        const label = labelEl?.textContent?.trim() || value
        return { value, label, group }
    }
}

export default FilterManager
