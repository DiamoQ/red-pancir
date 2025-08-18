class QuantitySelector {
    selectors = {
        root: '[data-js-quantity]',
        input: '[data-js-quantity-input]',
        incrementBtn: '[data-js-quantity-increment]',
        decrementBtn: '[data-js-quantity-decrement]',
    }

    constructor() {
        this.rootElements = document.querySelectorAll(this.selectors.root);
        this.init();
    }

    init() {
        this.rootElements.forEach((rootElement) => {
            const input = rootElement.querySelector(this.selectors.input);
            const btnPlus = rootElement.querySelector(this.selectors.incrementBtn);
            const btnMinus = rootElement.querySelector(this.selectors.decrementBtn);
            const min = parseInt(input.min, 10) || 1;

            const updateButtonsState = () => {
                const currentValue = parseInt(input.value, 10);
                btnMinus.disabled = currentValue <= min;
            };

            const changeValue = (delta) => {
                let currentValue = parseInt(input.value, 10);
                currentValue += delta;

                if (currentValue < min) {
                    currentValue = min;
                }

                input.value = currentValue;
                input.dispatchEvent(new Event('change'));
                updateButtonsState();
            };

            btnPlus.addEventListener('click', () => changeValue(1));
            btnMinus.addEventListener('click', () => changeValue(-1));

            // Инициализация состояния при загрузке
            updateButtonsState();
        });
    }
}

export default QuantitySelector;