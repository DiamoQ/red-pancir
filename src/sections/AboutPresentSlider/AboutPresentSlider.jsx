import './AboutPresentSlider.scss'
import aboutPresentSliderItems from "./aboutPresentSliderItems";
import Slider from "@/components/Slider";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";

const AboutPresentSlider = (props) => {
    const presentSliderNavigationId = 'about-present-slider-navigation'

    const presentSliderParams = {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: false,
            },
            481: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: true,
            },
            768: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: true,
            },
            1024: {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: true,
            }
        }
    }

    return (
        <section
            className='about-present-slider'
            aria-labelledby='about-slider-title'
        >
            <div className='about-present-slider__inner container'>
                <header className='about-present-slider__header'>
                    <h2 className="section-title">Ярко-красные –<br/> <span className='text-red'>отменно вкусные!</span></h2>
                    <div className="about-present-slider__description">
                        <p>Мы специализируемся на приготовлении, продаже и доставке раков и морепродуктов в Уфе.</p>
                        <p>Важно отметить, что мы не готовим заказы заранее, что гарантирует получение вами блюда свежим и теплым. Мы точно уверены  в качестве наших блюд! В наших раковарнях  вы можете видеть весь процесс приготовления вашего заказа не отходя от кассы: готовим  на открытой кухне на ваших глазах!</p>
                    </div>
                    <SliderNavigation
                        id={presentSliderNavigationId}
                        hasPagination={false}
                        isHiddenMobile
                    />
                </header>
                <Slider
                    navigationTargetElementId={presentSliderNavigationId}
                    hasScrollbarOnMobile={false}
                    sliderParams={presentSliderParams}
                    ulPhotoSwipeAttrs={{
                        children: "a",
                        zoom: true,
                        wheelToZoom: true
                    }}
                >
                    {aboutPresentSliderItems.map(({image, title}, index) => {
                        const basePath = import.meta.env.MODE === 'production'
                            ? `${import.meta.env.VITE_PUBLIC_PATH}/images/${image}`
                            : `/images/${image}`

                        return (
                            <a
                                href={basePath}
                                title={title}
                                key={index}
                            >
                                <img
                                    src={basePath}
                                    alt={`Фотография ${title}`}
                                    loading="lazy"
                                />
                            </a>
                        )
                    })}
                </Slider>
            </div>
        </section>
    )
}

export default AboutPresentSlider