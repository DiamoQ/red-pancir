import LockScrollManager from '@/utils/LockScrollManager'

class OverlayMenu {
    selectors = {
        root: '[data-js-overlay-menu]',
        dialog: '[data-js-overlay-menu-dialog]',
        burgerButton: '[data-js-overlay-menu-burger-button]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.dialogElement = this.rootElement.querySelector(this.selectors.dialog);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.bindEvents();
    }

    onBurgerButtonClick = () => {
        const isOpening = !this.dialogElement.open;

        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
        this.dialogElement.open = !this.dialogElement.open;
        // document.documentElement.classList.toggle(this.stateClasses.isLock);

        if (isOpening) {
            LockScrollManager.lock();
        } else {
            LockScrollManager.unlock();
        }
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default OverlayMenu;