import './RecommendedProducts.scss'
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import moreproductyitems from "@/sections/Category/moreproducty";
import Section from "@/layouts/Section";
import ProductCard from "@/components/ProductCard";

const RecommendedProducts = () => {
    const sliderNavigationId = 'recommended-slider-navigation'

    const recommendedSliderParams = {
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
            title="Рекомендуемые товары"
            titleId="recommended-title"
            className='recommended-products'
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
                sliderParams={recommendedSliderParams}
                hasScrollbarOnMobile={false}
                ulPhotoSwipeAttrs={{
                    children: "article",
                    zoom: true,
                    wheelToZoom: true
                }}
            >
                {moreproductyitems.map((product, index) => {
                    return (
                        <ProductCard
                            key={index}
                            {...product}
                        />
                    )
                })}
            </Slider>
        </Section>
    )
}

export default RecommendedProducts