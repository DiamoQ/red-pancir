class CustomFileInput {
    constructor() {
        this.inputs = document.querySelectorAll('[data-js-file-input]')
        this.init()
    }

    init() {
        this.inputs.forEach((input) => {
            const fileNameElement = input
                .closest('.field__file-label')
                .querySelector('[data-js-file-name]')

            input.addEventListener('change', () => {
                const file = input.files[0]
                fileNameElement.textContent = file ? file.name : 'Выберите файл'
            })
        })
    }
}

export default CustomFileInput
