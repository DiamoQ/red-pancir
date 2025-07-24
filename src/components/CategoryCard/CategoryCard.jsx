import './CategoryCard.scss'
import { Image } from 'minista'

const CategoryCard = (props) => {
  const {
    title,
    image,
    href,
  } = props

  return (
      <a
          className='category-card'
          href={href}
          target='_blank'
      >
        <Image
            className='category-card__image'

            src={image}
            alt={title}
        />
        <h3 className="category-card__title">
          {title}
        </h3>
      </a>
  )
}

export default CategoryCard