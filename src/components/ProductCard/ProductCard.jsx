import './ProductCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";

const ProductCard = (props) => {
    const {
        title,
        description,
        image,
        inStock,
        price,
        oldPrice,
        cookingOptions = [],
        labels = [],
        href,
    } = props

    return (
        <article
            className='product-card'
        >
            <a className='product-card__image-block'
               href={href}
               target='_blank'
            >
                {!inStock && (
                    <span className="product-card__availability">
                        Нет в наличии
                    </span>
                )}
                <Image
                    src={image}
                    alt={title}
                />
                {labels.length > 0 && (
                    <div className='product-card__labels'>
                        {labels.map((label, index) => (
                            <span
                                key={index}
                                className={`product-card__label 
                                ${label === 'hit' ? 'product-card__label--hit' : ''} 
                                ${label === 'promo' ? 'product-card__label--promo' : ''} `}
                            >
                                {label === 'hit' && 'Хит продаж'}
                                {label === 'promo' && 'Акция'}
                            </span>
                        ))}
                    </div>
                )}
            </a>
            <div className='product-card__content'>
                <a className='product-card__title-link'
                   href={href}
                   target='_blank'
                >
                    <h2 className="product-card__title">
                        {title}
                    </h2>
                </a>
                {description && (
                    <p className="product-card__description">
                        {description}
                    </p>
                )}
                {cookingOptions.length > 0 && (
                    <div className="product-card__options">
                        {cookingOptions.map((option, index) => (
                            <span
                                key={index}
                                className={`product-card__option 
                                            ${option === 'boiling' ? 'product-card__option--boiling' : ''} 
                                            ${option === 'frying' ? 'product-card__option--frying' : ''} 
                                            ${option === 'alive' ? 'product-card__option--alive' : ''}` }
                            >
                                {option === 'boiling' && 'Отварим'}
                                {option === 'frying' && 'Пожарим'}
                                {option === 'alive' && 'Отправим живыми'}
                            </span>
                        ))}
                    </div>
                )}
                <div className="product-card__actions">
                    {inStock ? (
                        <>
                            <div className="product-card__prices">
                                <span className="product-card__price">
                                    {price}₽
                                </span>
                                {oldPrice && (
                                    <span className="product-card__old-price">
                                        {oldPrice}₽
                                    </span>
                                )}
                            </div>
                            <Button
                                href={href}
                                label='В корзину'
                            />
                        </>
                    ) : (
                        <Button
                            href={href}
                            label='Сообщить о поступлении'
                            mode='white'
                        />
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProductCard