import './ModalFilterAccorderoGroup.scss'
import classNames from 'classnames'
import Icon from "@/components/Icon";
import Checkbox from "@/components/Checkbox";

const ModalFilterAccorderoGroup = (props) => {
    const {
        category,
        className,
    } = props

    return (
        <div
            className='filter-modal-window__group accordeon'
            data-group-label={category.name}
        >
            <details
                className="filter-modal-window__details accordeon__details"
                name={category.name}
                open={false}
            >
                <summary className="filter-modal-window__summary accordeon__summary">
                    <div className="filter-modal-window__label">{category.name}</div>
                    <Icon
                        className="filter-modal-window__summary-arrow accordeon__summary-arrow button"
                        name="arrow-down"
                        hasFill={false}
                    />
                </summary>
            </details>
            <div
                className="filter-modal-window__content accordeon__content"
            >
                <div className="filter-modal-window__content-inner accordeon__content-inner">
                    {category.items.map((item, index) => {
                        return (
                            <Checkbox
                                className="filter-modal-window__checkbox"
                                name={item.name}
                                value={item.label}
                                label={item.label}
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ModalFilterAccorderoGroup