import './Gallery.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import galleryItems from './galleryItems'
import Section from "@/layouts/Section";

const Gallery = (props) => {
    const sliderNavigationId = 'gallery-slider-navigation'

    const gallerySliderParams = {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        allowTouchMove: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: false,
            },
            481: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: true,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: true,
                enabled: true,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 20,
                allowTouchMove: false,
                enabled: true,
            }
        }
    }

    return (
        <Section
            title="Мы в фото"
            titleId="gallery-title"
            className='gallery'
            actions={(
                <SliderNavigation
                    id={sliderNavigationId}
                    hasPagination={false}
                    isHiddenMobile
                />
            )}
            isActionsHiddenOnMobile
        >
            <Slider
                navigationTargetElementId={sliderNavigationId}
                sliderParams={gallerySliderParams}
                hasScrollbarOnMobile={false}
                ulPhotoSwipeAttrs={{
                    children: "a",
                    zoom: true,
                    wheelToZoom: true
                }}
            >
                {galleryItems.map(({image, title}, index) => {
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
        </Section>
    )
}

export default Gallery