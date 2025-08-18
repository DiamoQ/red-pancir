import './ProductForm.scss'
import classNames from 'classnames'
import TabsNavigation from "@/components/Tabs/components/TabsNavigation";
import Tabs from "@/components/Tabs";
import CookingVariableCard from "@/components/CookingVariableCard";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const ProductForm = (props) => {
    const {
        className,
        articul,
        cookingVariants,
        marinadeVariants,
    } = props

    const tabsTitle = 'Способы приготовления блюда'
    const tabsNavigationId = 'cooking-variables-form-navigation'

    return (
        <form
            className={classNames(className, 'product-form')}
            data-product-id={articul}
        >
            <fieldset className="product-form__block quantity-block">
                <legend className='visually-hidden'>Укажите количество</legend>
                <h3>Укажите количество</h3>
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
            </fieldset>
            {cookingVariants && cookingVariants.length > 0 && (
                <fieldset className="product-form__block">
                    <legend className='visually-hidden'>Выберите способ приготовления</legend>
                    <h3>Выберите способ приготовления</h3>
                    <TabsNavigation
                        id={tabsNavigationId}
                        title={tabsTitle}
                        items={cookingVariants}
                    />
                    <Tabs
                        title={tabsTitle}
                        navigationTargetElementId={tabsNavigationId}
                        items={cookingVariants.map((cookingVariants) => ({
                            title: cookingVariants.title,
                            isActive: cookingVariants.isActive,
                            children: (
                                cookingVariants.variants.map((cookingVariantsItem, index) => (
                                    <div className="radio-input__wrapper" key={index}>
                                        <label className='radio-input' >
                                            <input type="radio" name="cooking"  value={cookingVariantsItem.id} defaultChecked={cookingVariantsItem.id === 'not'}/>
                                            <span className="radio-input__dot" aria-hidden="true"></span>
                                            {cookingVariantsItem.title}
                                        </label>
                                        {cookingVariantsItem.memo && (
                                            <div
                                                className='radio-input__tooltip'
                                                data-js-tooltip=''
                                                role="button"
                                                tabIndex="0"
                                                aria-label="Подробнее об опции"
                                                data-state="closed"
                                            >
                                                <Icon
                                                    name='tooltip'
                                                    hasFill={true}
                                                />
                                                <div className='radio-input__tooltip-content'>
                                                    {cookingVariantsItem.memo}
                                                </div>
                                            </div>
                                        )}
                                        {cookingVariantsItem.price && (
                                            <span className="radio-input__price">
                                                    {cookingVariantsItem.price}₽
                                                </span>
                                        )}
                                    </div>
                                ))
                            )
                        }))}
                    />
                </fieldset>
            )}
            {marinadeVariants && marinadeVariants.length > 0 && (
                <fieldset className="product-form__block">
                    <legend className='visually-hidden'>Выберите маринад</legend>
                    <h3>Выберите маринад</h3>
                    {marinadeVariants.map((marinadeVariantsItem, index) => (
                        <div className="radio-input__wrapper" key={index}>
                            <label className='radio-input'>
                                <input type="radio" name="marinade" value={marinadeVariantsItem.id} defaultChecked={marinadeVariantsItem.id === 'notmarinade'}/>
                                <span className="radio-input__dot" aria-hidden="true"></span>
                                {marinadeVariantsItem.title}
                            </label>
                            {marinadeVariantsItem.memo && (
                                <div className='radio-input__tooltip'
                                     data-js-tooltip=''
                                     role="button"
                                     tabIndex="0"
                                     aria-label="Подробнее об опции"
                                     data-state="closed"
                                >
                                    <Icon
                                        name='tooltip'
                                        hasFill={true}
                                    />
                                    <div className='radio-input__tooltip-content'>
                                        {marinadeVariantsItem.memo}
                                    </div>
                                </div>
                            )}
                            {marinadeVariantsItem.price && (
                                <span className="radio-input__price">
                                    {marinadeVariantsItem.price}₽
                                </span>
                            )}
                        </div>
                    ))}
                </fieldset>
            )}
            <Button
                className="form__submit-button"
                label='В корзину'
                type='submit'
            />
        </form>
    )
}

export default ProductForm