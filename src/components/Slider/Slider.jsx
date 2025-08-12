import 'swiper/css';
import './Slider.scss'
import SliderNavigation from "./components/SliderNavigation";
import classNames from "classnames";

const defaultSliderParams = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    allowTouchMove: true,
    breakpoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            allowTouchMove: true,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            allowTouchMove: true,
        },
        1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            allowTouchMove: false,
        },
        1441: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            allowTouchMove: false,
        },
    }
}

const Slider = (props) => {
    const {
        children,
        navigationTargetElementId = null,
        sliderParams = defaultSliderParams,
        isBeyondTheViewportOnMobileS,
        hasScrollbarOnMobile = true,
        //
        // '' (default) | 'abs-bottom'
        //
        navigationPosition = '',
        navigationMode,
        navigationButtonMode,
        isNavigationHiddenMobile= true,
        hasPagination,
        ulPhotoSwipeAttrs,
    } = props

    return (
        <div
            className={classNames('slider', {
                'slider--beyond-the-viewport-on-mobile-s' : isBeyondTheViewportOnMobileS,
            })}
            data-js-slider={JSON.stringify({
                sliderParams,
                navigationTargetElementId,
            })}
        >
            <div
                className="slider__swiper swiper"
                data-js-slider-swiper=''
            >
                <ul className="slider__list swiper-wrapper"
                    {...(ulPhotoSwipeAttrs
                        ? { 'data-js-photoswipe': JSON.stringify(ulPhotoSwipeAttrs) }
                        : {})
                    }
                >
                    {children.map((slide, index) => (
                        <li className='slider__item swiper-slide' key={index}>
                            {slide}
                        </li>
                    ))}
                </ul>
            </div>
            { !navigationTargetElementId && (
                <SliderNavigation
                    className='slider__navigation'
                    hasPagination={hasPagination}
                    position={navigationPosition}
                    isHiddenMobile={isNavigationHiddenMobile}
                    mode={navigationMode}
                    buttonMode={navigationButtonMode}
                />
            ) }

            {hasScrollbarOnMobile && (
                <div
                    className="slider__scrollbar visible-mobile"
                    data-js-slider-scrollbar=''
                >
                </div>
            )}
        </div>
    )
}

export default Slider