import './SliderNavigation.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const SliderNavigation = (props) => {
    const {
        className,
        id,
        hasPagination = true,
        //
        // '' (default) | 'tile' | 'rounded'
        //
        mode = '',
        buttonMode = '',
        navigationButtonMode = '',
        //
        // '' (default) | 'abs-bottom'
        //
        position = '',
        isHiddenMobile,
    } = props

    return (
        <div
            className={classNames(className, 'slider-navigation', {
                [`slider-navigation--${mode}`]: mode,
                [`slider-navigation--${position}`]: position,
                'hidden-mobile': isHiddenMobile,
            })}
            id={id}
            data-js-slider-navigation=''
        >
            <Button
                className='slider-navigation__arrow-button slider-navigation__arrow-button--previous'
                mode={buttonMode}
                iconName='arrow-left'
                label='Предыдущий слайд'
                isLabelHidden
                extraAttrs={{
                    'data-js-slider-previous-button': '',
                }}
            />
            {hasPagination && (
                <div
                    className='slider-navigation__pagination'
                    data-js-slider-pagination=''
                />
            )}
            <Button
                className='slider-navigation__arrow-button slider-navigation__arrow-button--next'
                mode={buttonMode}
                iconName='arrow-right'
                label='Следующий слайд'
                hasFill={false}
                isLabelHidden
                extraAttrs={{
                    'data-js-slider-next-button': '',
                }}
            />
        </div>
    )
}

export default SliderNavigation