import Swiper from 'swiper';
import { Thumbs, Navigation } from 'swiper/modules';

export default class SliderWithThumbsCollection {
    constructor() {
        this.init();
    }

    init() {
        const mainSlider = document.querySelector('[data-js-main-slider]');
        const thumbsSlider = document.querySelector('[data-js-thumbs-slider]');

        if (!mainSlider || !thumbsSlider) return;

        const mainSwiperEl = mainSlider.querySelector('[data-main-swiper]');
        const thumbsSwiperEl = thumbsSlider.querySelector('[data-thumbs-swiper]');

        if (!mainSwiperEl || !thumbsSwiperEl) return;

        // ПАРСИМ ПАРАМЕТРЫ
        const mainParams = JSON.parse(mainSlider.dataset.sliderParams || '{}');
        const thumbsParams = JSON.parse(thumbsSlider.dataset.sliderParams || '{}');

        // СОЗДАЁМ СЛАЙДЕР ДЛЯ МИНИАТЮР
        const thumbsSwiper = new Swiper(thumbsSwiperEl, {
            ...thumbsParams,
            modules: [Thumbs],
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            centeredSlides: false,
        });

        // ОБРАБОТКА НАВИГАЦИИ
        const navigation = mainParams.navigation
            ? {
                prevEl: mainSwiperEl.querySelector('[data-js-main-slider-prev]'),
                nextEl: mainSwiperEl.querySelector('[data-js-main-slider-next]'),
            }
            : false;

        // СОЗДАЁМ ГЛАВНЫЙ СЛАЙДЕР
        const mainSwiper = new Swiper(mainSwiperEl, {
            ...mainParams,
            modules: [Thumbs, ...(navigation ? [Navigation] : [])],
            thumbs: {
                swiper: thumbsSwiper,
            },
            ...(navigation && { navigation }),
        });

        // ПРОКРУТКА THUMBS ПРИ СМЕНЕ СЛАЙДА
        mainSwiper.on('slideChange', () => {
            const activeIndex = mainSwiper.activeIndex;
            const totalSlides = thumbsSwiper.slides.length;
            const perView = parseInt(thumbsSwiper.params.slidesPerView, 10) || 1;
            const maxIndex = totalSlides - perView;

            thumbsSwiper.slideTo(Math.min(activeIndex, maxIndex));
        });

        // СОХРАНЯЕМ ЭКЗЕМПЛЯРЫ
        mainSlider.swiper = mainSwiper;
        thumbsSlider.swiper = thumbsSwiper;
    }
}
