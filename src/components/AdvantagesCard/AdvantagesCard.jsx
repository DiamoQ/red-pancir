import './AdvantagesCard.scss'
import Icon from "@/components/Icon";

const AdvantagesCard = (props) => {
  const {
    title,
    description,
    icon,
  } = props
  
  return (
      <div
          className='advantages__card'
      >
        <header className='advantages__card-header'>
          <Icon
              className='advantages__card-image'
              name={icon}
              areaLabel={title}
              hasFill
          />
          <h3 className='advantages__card-title'>{title}</h3>
        </header>
        {description && (
            <p className="advantages__card-description">{description}</p>
        )}
      </div>
  )
}

export default AdvantagesCard