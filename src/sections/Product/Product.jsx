
import './Product.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";
import ProductForm from "@/components/ProductForm";
import galleryItems from "@/sections/Gallery/galleryItems";
import Button from "@/components/Button";
import Field from "@/components/Field";
import Checkbox from "@/components/Checkbox";

const Product = (props) => {
  const {
    className,
    productInfo,
  } = props
  
  return (
      <section
          className='product container'
          aria-labelledby='product-title'
      >
        <div className='product__left'>
          <div className='product__main-info'>
            <span className='product__articul'>Артикул: {productInfo.articul}</span>
            <h1 className='page-title' id='Krevetka'>
              {productInfo.name}
            </h1>
            <div className="product__price-block">
              <span className='product__price'>{productInfo.price}₽</span>
              {productInfo.oldPrice && (
                <span className='product__old-price'>{productInfo.oldPrice}₽</span>
              )}
              {productInfo.inStock ? (
                  <div className='product__available'>В наличии</div>
              ) : (
                  <div className='product__not-available'>Нет в наличии</div>
              )}
            </div>
            {productInfo.introtext && (
                <div className='product__description'>
                  <p>{productInfo.introtext}</p>
                </div>
            )}
          </div>
          {productInfo.inStock ? <ProductForm {...productInfo}/> : (
              <div className="product__not-available-form-wrapper">
                <div className="product__not-available-form">
                  <header className="product__not-available-form__header">
                    <h3 className="product__not-available-form__title">
                      Сообщить о поступлении
                    </h3>
                    <p className="product__not-available-form__description">К сожалению, товара нет в наличии, но мы сообщим о поступлении!</p>
                  </header>
                  <form className="product__not-available-form__form form" id='notAvailableForm' action=''  method='POST'>
                    <Field
                        className="form__cell"
                        id="notAvailableFormPersonName"
                        label='Имя'
                        placeholder='Имя'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        label='Телефон'
                        id='notAvailableFormPersonPhone'
                        placeholder='+7 ( )'
                        inputMode='tel'
                        mask='+7 (000) 000-00-00'
                        isRequired
                    />
                    <input
                        type="hidden"
                        name={productInfo.name}
                        id="notAvailableFormProductNameInput"
                    />
                    <div className="form__cell form__cell--wide form__cell--actions">
                      <Checkbox
                          className="form__agreement"
                          id='checkboxNotAvailableNameInput'
                          isRequired
                      />
                    </div>
                  </form>
                </div>
                <Button
                  className="form__submit-button"
                  label='Отправить'
                  type='submit'
                  extraAttrs={{
                    form: 'notAvailableForm',
                  }}
                />
            </div>
          )}
        </div>
        <div className='product__right'>
          <div className='product__photos'>
            <div
                className="slider product__slider-thumbs"
                data-js-thumbs-slider=""
                data-slider-params='{
                  "spaceBetween": 10,
                  "watchSlidesProgress": true,
                  "centeredSlides": false,
                  "slideToClickedSlide": true,
                  "breakpoints": {
                    "0": {"slidesPerView": 5},
                    "359.9": {"slidesPerView": 6},
                    "455": {"slidesPerView": 8}
                  }
                }'
            >
              <div className="swiper" data-thumbs-swiper="">
                <ul className="swiper-wrapper">
                  {galleryItems.map(({ image, title }, index) => {
                    const basePath = import.meta.env.MODE === 'production'
                        ? `${import.meta.env.VITE_PUBLIC_PATH}/images/${image}`
                        : `/images/${image}`;

                    return (
                        <li className="swiper-slide" key={index}>
                            <img src={basePath} alt={`Миниатюра ${title}`} loading="lazy" />
                        </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
                className="slider product__slider-main"
                data-js-main-slider=""
                data-slider-params='{
                  "slidesPerView": 1,
                  "spaceBetween": 10,
                  "navigation": true
                }'
                data-thumbs-target=".product__slider-thumbs"
            >
              <div className='product__slider-main__labels'>
                {productInfo.labels.length > 0 && productInfo.labels.map((label, index) => (
                    label !== 'promo' && (
                        <span
                            key={index}
                            className={classNames('product__slider-label', {
                              'product__slider-label--hold': label === 'hold',
                              'product__slider-label--new': label === 'new',
                            })}
                        >
                          {label === 'hold' && 'Сухая заморозка (без льда)'}
                          {label === 'new'&& 'Новинка'}
                        </span>
                    )
                ))}
              </div>
              <div className='product__slider-second__labels'>
                {productInfo.labels.length > 0 && productInfo.labels.map((label, index) => (
                    label === 'promo' && (
                        <span
                            key={index}
                            className={classNames('product__slider-label', {
                              'product__slider-label--promo': label === 'promo',
                            })}
                        >
                            {label === 'promo' && 'Акция'}
                        </span>
                    )
                ))}
              </div>
              <div className="swiper" data-main-swiper="">
                  <Button
                      className='product__slider-button  product__slider-button--prev'
                      iconName='arrow-left'
                      label='Предыдущий слайд'
                      isLabelHidden
                      hasFillIcon={false}
                      extraAttrs={{
                        'data-js-main-slider-prev': '',
                      }}
                  />
                <ul className="slider__list swiper-wrapper"
                    data-js-photoswipe={JSON.stringify('children: "a", zoom: true, wheelToZoom: true')}
                >
                  {galleryItems.map(({ image, title }, index) => {
                    const basePath = import.meta.env.MODE === 'production'
                        ? `${import.meta.env.VITE_PUBLIC_PATH}/images/${image}`
                        : `/images/${image}`;

                    return (
                        <li className="swiper-slide" key={index}>
                          <a href={basePath} title={title}>
                            <img src={basePath} alt={`Фотография ${title}`} loading="lazy" />
                          </a>
                        </li>
                    );
                  })}
                </ul>
                <Button
                    className='product__slider-button product__slider-button--next'
                    iconName='arrow-right'
                    label='Следующий слайд'
                    hasFill={false}
                    isLabelHidden
                    extraAttrs={{
                      'data-js-main-slider-next': '',
                    }}
                />
              </div>
            </div>
          </div>

          {productInfo.portionInformation.length > 0 && (
            <div className='product__about-portion'>
              {productInfo.portionInformation.map((portion, index) => {
                return (
                  <div className='product__about-portion__info' key={index}>
                    <span className="product__about-portion__value">{portion.portionInformationValue}</span>
                    <span className="product__about-portion__title">{portion.portionInformationName}</span>
                  </div>
                )
              })}
            </div>
          )}
          {productInfo.description && (
            <div
                className='product__accordeon accordeon'
            >
              <details
                  className="product__details accordeon__details"
                  name='description'
                  open={false}
              >
                <summary className="product__summary accordeon__summary">
                  <div className="filter-modal-window__label">Описание</div>
                  <Icon
                      className="product__summary-arrow accordeon__summary-arrow button"
                      name="arrow-down"
                      hasFill={false}
                  />
                </summary>
              </details>
              <div
                  className="product__content accordeon__content"
              >
                <div className="product__content-inner accordeon__content-inner">
                  <div className="product__content-text">
                    <p>{productInfo.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {productInfo.memo && (
            <div
                className='product__accordeon accordeon'
            >
              <details
                  className="product__details accordeon__details"
                  name='memo'
                  open={false}
              >
                <summary className="product__summary accordeon__summary">
                  <div className="filter-modal-window__label">Памятка по оформлению заказа</div>
                  <Icon
                      className="product__summary-arrow accordeon__summary-arrow button"
                      name="arrow-down"
                      hasFill={false}
                  />
                </summary>
              </details>
              <div
                  className="product__content accordeon__content"
              >
                <div className="product__content-inner accordeon__content-inner">
                  <div className="product__content-text">
                    <p>{productInfo.memo}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {productInfo.delivery && (
            <div
                className='product__accordeon accordeon'
            >
              <details
                  className="product__details accordeon__details"
                  name='delivery'
                  open={false}
              >
                <summary className="product__summary accordeon__summary">
                  <div className="filter-modal-window__label">Доставка</div>
                  <Icon
                      className="product__summary-arrow accordeon__summary-arrow button"
                      name="arrow-down"
                      hasFill={false}
                  />
                </summary>
              </details>
              <div
                  className="product__content accordeon__content"
              >
                <div className="product__content-inner accordeon__content-inner">
                  <div className="product__content-text">
                    <p>{productInfo.delivery}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
  )
}

export default Product