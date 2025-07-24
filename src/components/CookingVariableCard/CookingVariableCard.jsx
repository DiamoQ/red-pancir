import './CookingVariableCard.scss'
import classNames from 'classnames'
import {Image} from "minista";

const CookingVariableCard = (props) => {
    const {
        title,
        description,
        image,
        href,
        price,
    } = props

    return (
        <a
            className='cooking-variables__card'
            href={href}
            target='_blank'
        >
            <div className='cooking-variables__card-image-block'>
                <Image
                    src={image}
                    alt={title}
                />
            </div>
            <div className='cooking-variables__card-content'>
                <h3 className="cooking-variables__card-title">
                    {title}
                </h3>
                {description && (
                    <p className="cooking-variables__card-description">
                        {description}
                    </p>
                )}
                {price && (
                    <span className="cooking-variables__card-price">
                        {price}
                    </span>
                )}
            </div>
        </a>
    )
}

export default CookingVariableCard