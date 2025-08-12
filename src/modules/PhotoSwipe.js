import getAttrNameFromSelector from '@/utils/getAttrNameFromSelector'
import PhotoSwipeLightbox from 'photoswipe/lightbox'

const rootSelector = '[data-js-photoswipe]'

/**
 * Определяет реальные размеры изображений и проставляет
 * data-pswp-width / data-pswp-height, если их нет.
 */
function setPhotoSwipeImageSizes(rootEl, childrenSelector = 'a') {
    const links = Array.from(rootEl.querySelectorAll(childrenSelector))
        // Берём только те, где размеры ещё не заданы
        .filter((link) => {
            const w = link.getAttribute('data-pswp-width')
            const h = link.getAttribute('data-pswp-height')
            return !(w && h)
        })

    const tasks = links.map(
        (link) =>
            new Promise((resolve) => {
                const href = link.getAttribute('href')
                if (!href) return resolve()

                const img = new Image()
                img.src = href
                img.onload = () => {
                    link.setAttribute('data-pswp-width', img.naturalWidth)
                    link.setAttribute('data-pswp-height', img.naturalHeight)
                    resolve()
                }
                img.onerror = resolve
            })
    )

    return Promise.all(tasks)
}

class PhotoSwipeInstance {
    selectors = {
        root: rootSelector,
        // По умолчанию берём <a>, но можно переопределить через data-атрибут
        children: 'a',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.options = this.parseOptions()
        this.init()
    }

    parseOptions() {
        const attrName = getAttrNameFromSelector(this.selectors.root)
        const raw = this.rootElement.getAttribute(attrName)
        if (!raw) return {}
        try {
            return JSON.parse(raw)
        } catch (e) {
            console.warn('[PhotoSwipe] Invalid JSON in', this.rootElement, e)
            return {}
        }
    }

    async init() {
        const childrenSelector =
            this.options.children || this.selectors.children

        // 1) Автоподстановка ширины/высоты
        await setPhotoSwipeImageSizes(this.rootElement, childrenSelector)

        // 2) Инициализация PhotoSwipe
        this.lightbox = new PhotoSwipeLightbox({
            gallery: this.rootElement,
            children: childrenSelector,
            pswpModule: () => import('photoswipe'),
            ...this.options,
        })

        this.lightbox.init()
    }

    destroy() {
        this.lightbox?.destroy()
        this.lightbox = null
    }
}

class PhotoSwipeCollection {
    constructor() {
        this.instances = []
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((el) => {
            this.instances.push(new PhotoSwipeInstance(el))
        })
    }

    destroy() {
        this.instances.forEach((ins) => ins.destroy())
        this.instances = []
    }
}

export default PhotoSwipeCollection
