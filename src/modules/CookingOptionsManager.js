class CookingMarinadeManager {
    constructor(rootSelector = '.product-form') {
        this.root = document.querySelector(rootSelector);
        if (!this.root) return;

        this.radioInputs = Array.from(this.root.querySelectorAll('input[type="radio"]'));
        this.defaultOptions = this.radioInputs.filter(input => input.hasAttribute('data-default-option'));

        this.init();
        this.bindEvents();
    }

    /**
     * Ставит опции "Нет" по умолчанию
     */
    init() {
        this.defaultOptions.forEach(input => {
            input.checked = true;
        });
    }

    /**
     * Подписка на события изменения радио
     */
    bindEvents() {
        this.radioInputs.forEach(input => {
            input.addEventListener('change', (e) => this.onRadioChange(e.target));
        });
    }

    /**
     * Срабатывает при выборе радио-кнопки
     */
    onRadioChange(changedInput) {
        // Если выбрали "Нет" — ничего не делаем
        if (this.isDefaultOption(changedInput)) return;

        const changedName = changedInput.name;

        // Сбрасываем все остальные группы в "Нет"
        this.defaultOptions.forEach(defaultInput => {
            if (defaultInput.name !== changedName) {
                defaultInput.checked = true;
            }
        });
    }

    /**
     * Проверка — является ли опция "Нет"
     */
    isDefaultOption(input) {
        return input.hasAttribute('data-default-option');
    }
}

export default CookingMarinadeManager