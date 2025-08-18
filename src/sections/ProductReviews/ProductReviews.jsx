import './ProductReviews.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";

import reviews from "@/sections/ProductReviews/reviews";
import SliderNavigation from "@/components/Slider/components/SliderNavigation";
import Slider from "@/components/Slider";
import ProductReviewCard from "@/components/ProductReviewCard";
import ReviewForm from "@/components/ReviewForm";

const ProductReviews = (props) => {
    const {
        className,
    } = props

    const sliderNavigationId = 'product-reviews-slider-navigation'

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
            title='Отзывы'
            titleId='product-reviews-title'
            className='product-reviews'
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
            >
                {reviews.map((review, index) => {
                    return (
                        <ProductReviewCard
                            key={index}
                            {...review}
                        />
                    )
                })}
            </Slider>
            <ReviewForm />
        </Section>
    )
}

export default ProductReviews