import './ToggleCheckbox.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const ToggleCheckbox = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    value,
    name,
    // '' - default || 'reverse'
    type = 'default'
  } = props

  return (
      <label htmlFor={id} className={classNames(className, 'toggle', {
        'toggle--reverse': type === 'reverse',
      })}>
        <input type="checkbox" id={id} name={name} value={value} aria-label={label}/>
          {label}
        <span className="toggle__box"></span>
      </label>
  )
}

export default ToggleCheckbox