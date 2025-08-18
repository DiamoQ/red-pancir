import './ProductReviewCard.scss'
import classNames from 'classnames'

const ProductReviewCard = (props) => {
    const {
        className,
        name,
        review,
        date,
    } = props

    return (
        <div
            className={classNames(className, 'product-reviews__card')}
        >
            <header className="product-reviews__card-header">
                <span className="product-reviews__card-name">{name}</span>
                <span className="product-reviews__card-date">{date}</span>
            </header>
            <p className="product-reviews__card-content">
                {review}
            </p>
        </div>
    )
}

export default ProductReviewCard