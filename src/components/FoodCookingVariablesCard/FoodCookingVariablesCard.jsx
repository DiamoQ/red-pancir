import './FoodCookingVariablesCard.scss'
import {Image} from "minista";

const FoodCookingVariablesCard = (props) => {
  const {
    title,
    description,
    imgSrc,
    href,
  } = props

  return (
      <a
          className='food-cooking-variables-card'
          href={href}
          target='_blank'
      >
        <div className='food-cooking-variables-card__image-block'>
          <Image
              src={imgSrc}
              alt={title}
          />
        </div>
        <div className='food-cooking-variables-card__content'>
          <h3 className="food-cooking-variables-card__title">
            {title}
          </h3>
          {description && (
              <p className="food-cooking-variables-card__description">
                {description}
              </p>
          )}
          <div className="food-cooking-variables-card__button button">
            <span>Подробнее</span>
          </div>
        </div>
      </a>
  )
}

export default FoodCookingVariablesCard