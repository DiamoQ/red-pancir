class ModalNotify {
    selectors = {
        root: '[data-js-modal-notify]',
        dialog: '[data-js-modal-notify-dialog]',
        openButton: '[data-js-modal-notify-button]',
        closeButton: '[data-js-modal-notify-close]',
    }

    stateClasses = {
        isVisible: 'is-visible',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.dialogElement = this.rootElement.querySelector(this.selectors.dialog);
        this.openButtonElements = document.querySelectorAll(this.selectors.openButton);
        this.closeButtonElement = this.rootElement.querySelector(this.selectors.closeButton);

        this.bindEvents();
    }

    openModal = () => {
        this.rootElement.classList.add(this.stateClasses.isVisible);
        document.documentElement.classList.add(this.stateClasses.isLock);
    }

    closeModal = () => {
        this.rootElement.classList.remove(this.stateClasses.isVisible);
        document.documentElement.classList.remove(this.stateClasses.isLock);
    }

    bindEvents() {
        this.openButtonElements.forEach(button => {
            button.addEventListener('click', this.openModal);
        });

        this.closeButtonElement?.addEventListener('click', this.closeModal);

        this.rootElement.addEventListener('click', (e) => {
            if (e.target === this.rootElement) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
}

export default ModalNotify;
