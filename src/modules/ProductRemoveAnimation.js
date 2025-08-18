import QuantitySelector from "@/modules/QuantitySelector";

class ProductRemoveAnimation {
    selectors = {
        deleteBtn: '[data-js-remove-product]',
        productItem: '.basket__form-product',
    }

    constructor() {
        this.deleteButtons = document.querySelectorAll(this.selectors.deleteBtn);
        this.init();
    }

    init() {
        this.deleteButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const item = button.closest(this.selectors.productItem);
                if (!item) return;

                item.classList.add('is-removing');

                // Удаляем после завершения анимации
                setTimeout(() => {
                    item.remove();
                }, 300); // должен совпадать с transition в CSS
            });
        });
    }
}

export default ProductRemoveAnimation;