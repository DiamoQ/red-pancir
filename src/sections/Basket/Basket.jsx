import './Basket.scss'
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import {Image} from "minista";
const  productImage = "/src/assets/images/product/product.jpg"

const Basket = (props) => {

  return (
      <section
          className='basket container'
          aria-labelledby='basket'
      >
        <h1 className='page-title'>Корзина</h1>
        <div className='basket__form-wrapper'>
          <form className="basket__form form" action=''  method='POST'>
            <ul className='basket__form-products'>
              <li className='basket__form-product'>
                <div className='basket__form-product__main-info'>
                  <div className="basket__form-product-left">
                    <Image src={productImage} alt='Продукт' />
                    <div className='basket__form-product__info'>
                      <span className='basket__form-product__name'>Креветка 90/120 Гренландия</span>
                    </div>
                    <Button
                        className='basket__form-product__delete'
                        iconName='delete'
                        label='Удалить'
                        mode='transparent'
                        isLabelHidden
                        hasFillIcon={true}
                        extraAttrs={{
                          'data-js-remove-product': ''
                        }}
                    />
                  </div>
                  <div className="basket__form-product-right">
                      <div className="quantity-block__control" data-js-quantity=''>
                        <button type="button" className="quantity-btn" data-js-quantity-decrement="">−</button>
                        <input
                            type="number"
                            name="quantity"
                            className="quantity-input"
                            min="1"
                            defaultValue={1}
                            data-js-quantity-input=''
                        />
                        <button type="button" className="quantity-btn quantity-btn--plus" data-js-quantity-increment="increment">+</button>
                      </div>
                      <div className="basket__form-product__price">
                        <span className='basket__form-product__price-total'>3950₽</span>
                        <span className='basket__form-product__price-old'>4950₽</span>
                      </div>
                  </div>
                </div>
                <div className="basket__form-product__options">
                  <div className="basket__form-product__original-price">
                    <span className='basket__form-product__original-price-name'>Креветка 90/120 Гренландия:</span>
                    <span className='basket__form-product__original-price-value'>2990 ₽</span>
                  </div>
                  <ul className="basket__form-product__options-list">
                    <li className='basket__form-product__option'>
                      <span className="basket__form-product__option-name">
                        Способ приготовления:
                      </span>
                      <div className="basket__form-product__option-info">
                        <span className="basket__form-product__option-value">
                          Классическая варка
                        </span>
                        <span className="basket__form-product__option-price">
                          +199 ₽
                        </span>
                      </div>
                    </li>
                    <li className='basket__form-product__option'>
                      <span className="basket__form-product__option-name">
                        Маринад:
                      </span>
                      <div className="basket__form-product__option-info">
                        <span className="basket__form-product__option-value">
                          Жарка по-Средиземноморски
                        </span>
                        <span className="basket__form-product__option-price">
                          +299 ₽
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='basket__form-product'>
                <div className='basket__form-product__main-info'>
                  <div className="basket__form-product-left">
                    <Image src={productImage} alt='Продукт' />
                    <div className='basket__form-product__info'>
                      <span className='basket__form-product__name'>Креветка</span>
                    </div>
                    <Button
                        className='basket__form-product__delete'
                        iconName='delete'
                        label='Удалить'
                        mode='transparent'
                        isLabelHidden
                        hasFillIcon={true}
                        extraAttrs={{
                          'data-js-remove-product': ''
                        }}
                    />
                  </div>
                  <div className="basket__form-product-right">
                    <div className="quantity-block__control" data-js-quantity=''>
                      <button type="button" className="quantity-btn" data-js-quantity-decrement="">−</button>
                      <input
                          type="number"
                          name="quantity"
                          className="quantity-input"
                          min="1"
                          defaultValue={2}
                          data-js-quantity-input=''
                      />
                      <button type="button" className="quantity-btn quantity-btn--plus" data-js-quantity-increment="increment">+</button>
                    </div>
                    <div className="basket__form-product__price">
                      <span className='basket__form-product__price-total'>950₽</span>
                      <span className='basket__form-product__price-old'>12150₽</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className='basket__form-product'>
                <div className='basket__form-product__main-info'>
                  <div className="basket__form-product-left">
                    <Image src={productImage} alt='Продукт' />
                    <div className='basket__form-product__info'>
                      <span className='basket__form-product__name'>Креветка 90/120 Гренландия Гренландия Гренландия</span>
                    </div>
                    <Button
                        className='basket__form-product__delete'
                        iconName='delete'
                        label='Удалить'
                        mode='transparent'
                        isLabelHidden
                        hasFillIcon={true}
                        extraAttrs={{
                          'data-js-remove-product': ''
                        }}
                    />
                  </div>
                  <div className="basket__form-product-right">
                    <div className="quantity-block__control" data-js-quantity=''>
                      <button type="button" className="quantity-btn" data-js-quantity-decrement="">−</button>
                      <input
                          type="number"
                          name="quantity"
                          className="quantity-input"
                          min="1"
                          defaultValue={10}
                          data-js-quantity-input=''
                      />
                      <button type="button" className="quantity-btn quantity-btn--plus" data-js-quantity-increment="increment">+</button>
                    </div>
                    <div className="basket__form-product__price">
                      <span className='basket__form-product__price-total'>3950₽</span>
                    </div>
                  </div>
                </div>
                <div className="basket__form-product__options">
                  <div className="basket__form-product__original-price">
                    <span className='basket__form-product__original-price-name'>Креветка 90/120 Гренландия Гренландия Гренландия:</span>
                    <span className='basket__form-product__original-price-value'>3690 ₽</span>
                  </div>
                  <ul className="basket__form-product__options-list">
                    <li className='basket__form-product__option'>
                      <span className="basket__form-product__option-name">
                        Маринад:
                      </span>
                      <div className="basket__form-product__option-info">
                        <span className="basket__form-product__option-value">
                          Жарка по-Средиземноморски
                        </span>
                        <span className="basket__form-product__option-price">
                          +299 ₽
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className='basket__form-data'>
              <h2 className='section__title'>Оформление заказа</h2>
              <fieldset className="basket__form-block">
                <legend className='visually-hidden'>Контактные данные</legend>
                <h3 className='basket__form-block__title'>Контактные данные</h3>
                <Field
                    className="form__cell"
                    label='Фамилия'
                    placeholder='Фамилия'
                    id='basketFamily'
                    isRequired
                />
                <Field
                    className="form__cell"
                    label='Имя'
                    placeholder='Имя'
                    id='basketName'
                    isRequired
                />
                <Field
                    className="form__cell"
                    label='Телефон'
                    id='basketCallbackPhone'
                    placeholder='+7 ( )'
                    inputMode='tel'
                    mask='+7 (000) 000-00-00'
                    isRequired
                />
              </fieldset>
              <fieldset className="basket__form-block">
                <legend className='visually-hidden'>Способ оплаты</legend>
                <h3 className='basket__form-block__title'>Способ оплаты</h3>
                <label className='radio-input'>
                  <input type="radio" name="payVariant" value='card' defaultChecked={true}/>
                  <span className="radio-input__dot" aria-hidden="true"></span>
                  Оплата картой при получении
                </label>
                <label className='radio-input'>
                  <input type="radio" name="payVariant" value='cash'/>
                  <span className="radio-input__dot" aria-hidden="true"></span>
                  Оплата наличными
                </label>
              </fieldset>
              <fieldset className="basket__form-block">
                <legend className='visually-hidden'>Способ получения</legend>
                <h3 className='basket__form-block__title'>Способ получения</h3>
                <address>
                  <Icon
                      name='address'
                      hasFill={true}
                  />
                  Самовывоз г. Челябинск, ул Чичерина 8/3.
                </address>
                <Checkbox
                    className="form__agreement"
                    id='checkboxBasket'
                    isRequired
                />
                <Button
                    className="form__submit-button"
                    label='Оформить заказ'
                    type='submit'
                />
              </fieldset>
              <div className="basket__annotation">
                <Icon
                    name='annotation'
                    hasFill={true}
                />
                В выходные и праздничные дни увеличивается время заказа
              </div>
            </div>
          </form>
          <div className='basket__total'>
            <div className='basket__total-block'>
              <div className='basket__total-info'>
                <span className='basket__total-title'>
                  3 товара
                </span>
                <span className='basket__total-amount'>
                  5556₽
                </span>
              </div>
              <div className='basket__total-info'>
                <span className='basket__total-title'>
                  Скидка
                </span>
                <span className='basket__total-amount'>
                  100₽
                </span>
              </div>
              <div className='basket__total-info basket__total-info__total'>
                <span className='basket__total-title'>
                  Итого:
                </span>
                <span className='basket__total-amount'>
                  5656₽
                </span>
              </div>
            </div>
            <div className="basket__annotation">
              <Icon
                  name='annotation'
                  hasFill={true}
              />
              Пластиковая тара оплачивается отдельно
            </div>
          </div>
        </div>
      </section>
  )
}

export default Basket