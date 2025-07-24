import './OrderStepsCard.scss'
import Icon from "@/components/Icon";

const OrderStepsCard = (props) => {
  const {
    number,
    title,
    imgSrc,
  } = props

  return (
      <div
          className='order-step-card'
      >
        <header className='order-step-card__header'>
          <div className='order-step-card__image-wrapper'>
            <Icon
                className='order-step-card__image'
                name={imgSrc}
                areaLabel={title}
            />
          </div>
          <span className='order-step-card__description'>{title}</span>
        </header>
        <span className="order-step-card__number">{number}</span>
      </div>
  )
}

export default OrderStepsCard