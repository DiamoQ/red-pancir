class PriceRange {
    selectors = {
        root: '[data-js-price-range]',
        rangeMin: '[data-js-range-min]',
        rangeMax: '[data-js-range-max]',
        inputMin: '[data-js-input-min]',
        inputMax: '[data-js-input-max]',
        track: '[data-js-track]',
    }

    config = {
        minGap: 100, // минимальный зазор между ползунками
    }

    constructor(root) {
        this.rootElement = root || document.querySelector(this.selectors.root);
        if (!this.rootElement) return;

        this.rangeMinElement = this.rootElement.querySelector(this.selectors.rangeMin);
        this.rangeMaxElement = this.rootElement.querySelector(this.selectors.rangeMax);
        this.inputMinElement = this.rootElement.querySelector(this.selectors.inputMin);
        this.inputMaxElement = this.rootElement.querySelector(this.selectors.inputMax);
        this.trackElement = this.rootElement.querySelector(this.selectors.track);

        this.rangeMaxValue = +this.rangeMaxElement.max;

        this.bindEvents();

        requestAnimationFrame(this.updateTrack);

        const bar = this.rootElement.querySelector('.price-filter__range');
        if (bar && 'ResizeObserver' in window) {
            this.ro = new ResizeObserver(() => this.updateTrack());
            this.ro.observe(bar);
        } else {
            window.addEventListener('resize', () => requestAnimationFrame(this.updateTrack), {passive:true});
        }

    }

    updateTrack = () => {
        const min = +this.rangeMinElement.value;
        const max = +this.rangeMaxElement.value;

        const bar = this.rootElement.querySelector('.price-filter__range');
        const widthPx = bar?.getBoundingClientRect().width || 0;
        if (widthPx <= 0) {
            // чтобы не мигало – прячем активный трек до валидного размера
            this.trackElement.style.width = '0px';
            this.trackElement.style.left = '0px';
            return;
        }

        const thumb = 11; // ширина кружка в px (как в CSS)
        const pad = thumb / 2;
        const usable = Math.max(0, widthPx - thumb);

        const leftPx  = pad + (min / this.rangeMaxValue) * usable;
        const rightPx = pad + (max / this.rangeMaxValue) * usable;

        this.trackElement.style.left  = `${leftPx}px`;
        this.trackElement.style.width = `${Math.max(0, rightPx - leftPx)}px`;

        this.inputMinElement.value = min;
        this.inputMaxElement.value = max;
    }

    reset = () => {
        const minDefault = +this.rangeMinElement.getAttribute('value');
        const maxDefault = +this.rangeMaxElement.getAttribute('value');

        this.rangeMinElement.value = minDefault;
        this.rangeMaxElement.value = maxDefault;
        this.updateTrack();
    }

    onRangeMinInput = () => {
        if (+this.rangeMaxElement.value - +this.rangeMinElement.value <= this.config.minGap) {
            this.rangeMinElement.value = +this.rangeMaxElement.value - this.config.minGap;
        }
        this.updateTrack();
    }

    onRangeMaxInput = () => {
        if (+this.rangeMaxElement.value - +this.rangeMinElement.value <= this.config.minGap) {
            this.rangeMaxElement.value = +this.rangeMinElement.value + this.config.minGap;
        }
        this.updateTrack();
    }

    onInputMinChange = () => {
        let val = Math.min(+this.inputMinElement.value, +this.rangeMaxElement.value - this.config.minGap);
        this.rangeMinElement.value = val;
        this.updateTrack();
    }

    onInputMaxChange = () => {
        let val = Math.max(+this.inputMaxElement.value, +this.rangeMinElement.value + this.config.minGap);
        this.rangeMaxElement.value = val;
        this.updateTrack();
    }

    // ⚡ Новая функция: клик по полосе
    onTrackClick = (e) => {
        const rect = this.rootElement.querySelector('.price-filter__range').getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickPercent = clickX / rect.width;
        const clickValue = Math.round(clickPercent * this.rangeMaxValue);

        const minVal = +this.rangeMinElement.value;
        const maxVal = +this.rangeMaxElement.value;

        // определяем, к какому ползунку ближе
        if (Math.abs(clickValue - minVal) < Math.abs(clickValue - maxVal)) {
            // двигаем min
            if (maxVal - clickValue >= this.config.minGap) {
                this.rangeMinElement.value = clickValue;
            }
        } else {
            // двигаем max
            if (clickValue - minVal >= this.config.minGap) {
                this.rangeMaxElement.value = clickValue;
            }
        }

        this.updateTrack();
    }

    bindEvents() {
        this.rangeMinElement.addEventListener('input', this.onRangeMinInput);
        this.rangeMaxElement.addEventListener('input', this.onRangeMaxInput);
        this.inputMinElement.addEventListener('change', this.onInputMinChange);
        this.inputMaxElement.addEventListener('change', this.onInputMaxChange);

        // 🎯 Слушаем клик по самой полосе (не по ползункам!)
        this.rootElement.querySelector('.price-filter__range')
            .addEventListener('click', this.onTrackClick);
    }
}

export default PriceRange;
