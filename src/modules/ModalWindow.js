import LockScrollManager from '@/utils/LockScrollManager';

class ModalNotify {
    selectors = {
        root: '[data-js-modal-notify]',
        dialog: '[data-js-modal-notify-dialog]',
        openButton: '[data-js-modal-notify-button]',
        closeButton: '[data-js-modal-notify-close]',
        productNameInput: '#modalProductNameInput',
    };

    stateClasses = {
        isVisible: 'is-visible',
        isLock: 'is-lock',
    };

    constructor() {
        this.rootElements = document.querySelectorAll(this.selectors.root);
        this.openButtons = document.querySelectorAll(this.selectors.openButton);
        this.initModals();
        this.bindGlobalEvents();
    }

    initModals() {
        // Кнопки "закрыть" + клик по подложке
        this.rootElements.forEach((modal) => {
            const closeBtn = modal.querySelector(this.selectors.closeButton);
            closeBtn?.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModal(modal);
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    e.preventDefault();
                    this.closeModal(modal);
                }
            });
        });

        // Кнопки "открыть"
        this.openButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                // ВАЖНО: не даём событию «дойти» до <a> или формы
                e.preventDefault();
                e.stopPropagation();

                const attrName = this.selectors.openButton.slice(1, -1); // data-js-modal-notify-button
                const modalId = btn.getAttribute(attrName);
                const modal = document.querySelector(
                    `[data-js-modal-notify="${modalId}"]`
                );
                if (!modal) return;

                this.openModal(modal);

                // Подставляем название товара, если предусмотрено скрытое поле
                const productName = btn.getAttribute('data-product-name');
                const productInput = modal.querySelector(this.selectors.productNameInput);
                if (productInput) {
                    productInput.value = productName || '';
                }
            });
        });
    }

    openModal(modal) {
        modal.classList.add(this.stateClasses.isVisible);
        LockScrollManager.lock();
    }

    closeModal(modal) {
        modal.classList.remove(this.stateClasses.isVisible);
        LockScrollManager.unlock();
    }

    bindGlobalEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.rootElements.forEach((modal) => this.closeModal(modal));
            }
        });
    }
}

export default ModalNotify;
