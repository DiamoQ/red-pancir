class PasswordToggle {
    constructor() {
        this.toggleButtons = document.querySelectorAll('[data-js-toggle-password]')
        this.init()
    }

    init() {
        this.toggleButtons.forEach(button => {
            const input = button.closest('.field__body')?.querySelector('[data-js-password-input]')
            if (!input) return

            button.addEventListener('click', () => {
                const isVisible = input.type === 'text'
                input.type = isVisible ? 'password' : 'text'
                button.setAttribute('aria-label', isVisible ? 'Показать пароль' : 'Скрыть пароль')
            })
        })
    }
}

export default PasswordToggle
