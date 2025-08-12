import './ModalCallbackWindow.scss';
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

const ModalCallbackWindow = (props) => {
  const {
    className,
  } = props

  return (
      <div data-js-modal-notify='callback-window' className="modal">
        <div className="modal__dialog" data-js-modal-notify-dialog='callback-window'>
          <header className="modal__header">
            <h3 className="modal__title">
              Заказать звонок
            </h3>
            <p className="modal__description">Оставьте заявку и наши менеджеры свяжутся с вами в ближайшее время</p>
            <Button
                className='modal__close-button'
                iconName='close-button'
                isLabelHidden={true}
                label='Закрыть модальное окно'
                mode='transparent'
                hasFillIcon
                extraAttrs={{
                  'data-js-modal-notify-close': 'callback-window'
                }}
            />
          </header>
          <form className="modal__form form" action=''>
            <Field
                className="form__cell"
                label='Имя'
                placeholder='Имя'
                isRequired
            />
            <Field
                className="form__cell"
                label='Телефон'
                id='modalCallbackPhone'
                placeholder='+7 ( )'
                inputMode='tel'
                mask='+7 (000) 000-00-00'
                isRequired
            />
            <div className="form__cell form__cell--wide form__cell--actions">
              <Checkbox
                  className="form__agreement"
                  id="callbackCheckboxId"
                  isRequired
              />
              <Button
                  className="form__submit-button"
                  label='Отправить'
                  type='submit'
              />
            </div>
          </form>
        </div>
      </div>
  )
}

export default ModalCallbackWindow