import './Field.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const Field = (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    // undefined (default) || email || textarea || file || password
    type,
    placeholder,
    isRequired,
    // 'Default' || 'tel' || 'date'
    inputMode,
    mask,
    minDate,
    maxDate,
    renderBefore,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input';

  const extraAttrs = {}

  if(mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  if(minDate) {
    extraAttrs['min'] = minDate
  }

  if(maxDate) {
    extraAttrs['max'] = maxDate
  }

  return (
      <div
          className={classNames(className, 'field')}
      >
        <label
            htmlFor={id}
            className="field__label"
        >
          {label}
          {isRequired &&
              (
                  <span
                      className='field__requared-star'
                      aria-hidden={true}
                  >
                      *
                    </span>
              )
          }
        </label>
        <div
             className={classNames('field__body', {
             [`field__body--${inputMode}`]: inputMode,
        })}>
          {renderBefore?.('field__control')}
          <Component
              className='field__control'
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              required={isRequired}
              inputMode={inputMode}
              {...(type === 'password' ? { 'data-js-password-input': true } : {})}
              {...extraAttrs}
          />
          {type === 'date' && (
              <span className="field__placeholder">Дата рождения</span>
          )}
          {type === 'password' && (
              <button
                  type="button"
                  className="field__control-visible"
                  data-js-toggle-password
                  aria-label="Показать пароль"
              >
                👁
              </button>
          )}
        </div>
      </div>
  )
}

export default Field