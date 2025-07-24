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
          <form className="modal__form" action=''>
            <Field
                className="modal__form-cell"
                label='Имя'
                placeholder='Имя'
                isRequired
            />
            <Field
                className="modal__form-cell"
                label='Телефон'
                placeholder='+7 ( )'
                inputMode='tel'
                mask='+7 (000) 000-00-00'
                isRequired
            />
            <div className="modal__form-cell modal__form-cell--wide modal__form-cell--actions">
              <Checkbox
                  className="modal__form-agreement"
                  id="callbackCheckboxId"
                  isRequired
              />
              <Button
                  className="modal__submit-button"
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