import './ReviewForm.scss'
import classNames from 'classnames'
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

const ReviewForm = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'product-reviews__form-block')}
        >
            <h3 className='product-reviews__form-title'>Оставьте отзыв</h3>
            <p className="product-reviews__form-description">Нам важно ваше мнение! <br/> Ваши отзывы помогают нам становиться лучше.</p>
          <form className="form" action=''>
            <div className="form__double-inputs">
              <Field
                  className="form__cell"
                  label='Имя'
                  placeholder='Имя'
                  isRequired
              />
              <Field
                  className="form__cell"
                  label='Телефон'
                  id='ReviewPhone'
                  placeholder='+7 ( )'
                  inputMode='tel'
                  mask='+7 (000) 000-00-00'
              />
            </div>
            <Field
                className="form__cell"
                label='Сообщение'
                placeholder='Сообщение'
                type='textarea'
                isRequired
            />
            <div className="form__cell form__cell--wide form__cell--actions">
              <Checkbox
                  className="form__agreement"
                  id="reviewId"
                  isRequired
              />
              <Button
                  className="form__submit-button"
                  label='Откликнуться'
                  type='submit'
              />
            </div>
          </form>
        </div>
    )
}

export default ReviewForm