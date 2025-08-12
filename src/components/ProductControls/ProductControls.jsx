import './ProductControls.scss'
import classNames from 'classnames'
import ToggleCheckbox from "@/components/ToggleCheckbox";
import getIdFromTitle from "@/utils/getIdFromTitle";

const ProductControls = (props) => {
    const {
        className,
    } = props

    return (
        <div className={classNames(className, 'product-controls')}>
            <div className="product-controls__left">
                <button className="product-controls__filter" data-js-filter-open=''>
                    Фильтр
                </button>
                <div className="product-controls__tags">
                </div>
            </div>
            <div className="product-controls__right">
                <ToggleCheckbox
                    label="В наличии"
                    value="Y"
                    name="arrFilter_AVAILABLE"
                />
                <ToggleCheckbox
                    label="Хит продаж"
                    value="Y"
                    name="arrFilter_HIT"
                />
                <div className="product-controls__sort">
                    <button type="button" className="product-sort__button" data-js-sort-toggle=''>
                        <span className="product-sort__text">
                            Сортировать:
                            <span className="product-sort__value">
                                от минимальной цены
                            </span>
                        </span>
                    </button>
                    <div className="product-sort__dropdown" data-js-sort-dropdown=''>
                        <label className='radio-input'>
                            <input type="radio" name="sort" value="minPrice" defaultChecked/>
                            <span className="radio-input__dot" aria-hidden="true"></span>
                            От минимальной цены
                        </label>
                        <label className='radio-input'>
                            <input type="radio" name="sort" value="maxPrice"/>
                            <span className="radio-input__dot" aria-hidden="true"></span>
                            От максимальной цены
                        </label>
                        <label className='radio-input'>
                            <input type="radio" name="sort" value="promo"/>
                            <span className="radio-input__dot" aria-hidden="true"></span>
                            Сначала по акции
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductControls