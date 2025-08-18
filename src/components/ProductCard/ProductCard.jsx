import './ProductCard.scss'
import {Image} from "minista";
import Button from "@/components/Button";
import classNames from "classnames";

const ProductCard = (props) => {
    const {
        className,
        title,
        description,
        image,
        inStock,
        price,
        oldPrice,
        cookingOptions = [],
        labels = [],
        href,
        // 'catalog' | 'recommended'
        variant='catalog'
    } = props

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    const shouldShowLabel = (label) => {
        if (variant === 'catalog') return label === 'hit' || label === 'promo';
        if (variant === 'recommended') return label === 'new';
        return false;
    };

    return (
        <article
            className={classNames('product-card', {
                'product-card--recommended': variant === 'recommended',
            })}
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
                            shouldShowLabel(label) && (
                                <span
                                    key={index}
                                    className={classNames('product-card__label', {
                                        'product-card__label--hit': label === 'hit' && variant === 'catalog',
                                        'product-card__label--promo': label === 'promo' && variant === 'catalog',
                                        'product-card__label--new': label === 'new' && variant === 'recommended',
                                    })}
                                >
                                    {label === 'hit' &&  variant === 'catalog' && 'Хит продаж'}
                                    {label === 'promo' &&  variant === 'catalog' && 'Акция'}
                                    {label === 'new' &&  variant === 'recommended' && 'Новинка'}
                                </span>
                            )
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
                                target='_blank'
                                label='В корзину'
                            />
                        </>
                    ) : (
                        <Button
                            label='Сообщить о поступлении'
                            mode='white'
                            extraAttrs={{
                                'data-js-modal-notify-button': 'notify-availability',
                                'data-product-name': title
                            }}
                        />
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProductCard