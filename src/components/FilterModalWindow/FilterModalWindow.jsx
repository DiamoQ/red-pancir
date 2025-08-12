import './FilterModalWindow.scss'
import classNames from 'classnames'
import ToggleCheckbox from "@/components/ToggleCheckbox";
import ModalFilterAccorderoGroup from "@/components/FilterModalWindow/ModalFilterAccorderoGroup";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import categories from "@/components/FilterModalWindow/categories";

const FilterModalWindow = (props) => {
    const {
        className,
    } = props

    return (
        <div className="filter-modal-window" data-js-filter='' aria-hidden="true">
          <div className="filter-modal-window__overlay" data-js-filter-overlay=''></div>
          <div className="filter-modal-window__dialog">
            <button className="filter-modal-window__back" data-js-filter-close=''>
                <Icon
                    name="modal-back-arrow"
                    hasFill={false}
                />
                Назад
            </button>
            <form name="filter-form" className="filter-modal-window__form" data-demo="" action="">
              <div className="filter-modal-window__group filter-modal-window__group--price" data-group-label="Цена">
                <div className="filter-modal-window__label">Цена</div>
                <div className="price-filter" data-js-price-range=''>
                  <div className="price-filter__range">
                    <input type="range" min="0" max="10000" defaultValue ="1200" name="arrFilter_PRICE_MIN" data-js-range-min=''/>
                    <input type="range" min="0" max="10000" defaultValue ="4560" name="arrFilter_PRICE_MAX" data-js-range-max=''/>
                    <div className="price-filter__track" data-js-track=''></div>
                  </div>
                  <div className="price-filter__inputs">
                    <input type="number" defaultValue ="1200" name="arrFilter_PRICE_MIN" data-js-input-min=''/>
                    <input type="number" defaultValue ="4560" name="arrFilter_PRICE_MAX" data-js-input-max=''/>
                  </div>
                </div>
              </div>

              <div className="filter-modal-window__group" data-group-label="Наличие">
                <ToggleCheckbox
                    label="В наличии"
                    value="Y"
                    name="arrFilter_AVAILABLE"
                />
              </div>

              <div className="filter-modal-window__group" data-group-label="Популярность">
                <ToggleCheckbox
                    label="Хит продаж"
                    value="Y"
                    name="arrFilter_HIT"
                />
              </div>

              {categories.map((item, index) => {
                return (
                    <ModalFilterAccorderoGroup category={item} key={index} />
                )
              })}

              <div className="filter-modal-window__footer">
                  <Button
                      className='button button-submit'
                      label='Применить фильтр'
                      extraAttrs={{
                          'type':'submit'
                      }}
                  />
                  <Button
                      className='button button-reset'
                      type='submit'
                      mode='text'
                      iconName='reset-form'
                      label='Сбросить фильтр'
                      extraAttrs={{
                          'type':'reset'
                      }}
                  />
              </div>
            </form>
          </div>
        </div>


    )
}

export default FilterModalWindow