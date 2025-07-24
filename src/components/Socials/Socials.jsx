import './Socials.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const Socials = (props) => {
  const {
    className,
    links = [],
  } = props

  return (
      <div
          className={classNames(className, 'soc1als')}
      >
        <ul className='soc1als__list'>
          {links.map(({label, iconName, link}, index) => (
              <li className='soc1als__item' key={index}>
                <Button
                    className='soc1als__link'
                    label={label}
                    iconName={iconName}
                    href={link}
                    target='_blank'
                    isLabelHidden
                    hasFillIcon
                />
              </li>
          ))}
        </ul>
      </div>
  )
}

export default Socials