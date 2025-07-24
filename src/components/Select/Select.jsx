import './Select.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const Select = (props) => {
    const {
        id = getIdFromTitle(props.label),
        label,
        isLabelHidden = true,
        // Array <[
        //  value: string,
        //  isSelected?: boolean,
        // }>
        options = [],
        buttonClassName,
    } = props

    const IDs = {
        originalControl: id,
        label: `${id}-label`,
        dropdown: `${id}-dropdown`,
    }

    const selectedOption = options.find(( {isSelected }) => isSelected) ?? options[0];

    return (
        <div
            className='select'
            data-js-select=''
        >
            <label
                className={classNames('select__label', {
                    'visually-hidden': isLabelHidden,
                })}
                id={IDs.label}
                htmlFor={IDs.originalControl}
            >
                {label}
            </label>
            <select
                className={classNames('select__original-control', buttonClassName)}
                id={IDs.originalControl}
                tabIndex={-1}
                defaultValue={selectedOption.value}
                data-js-select-original-control=''
            >
                {options.map(({value} , index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
            <div className="select__body">
                <div
                    className={classNames("select__button", buttonClassName)}
                    tabIndex={0}
                    role="combobox"
                    aria-expanded={false}
                    aria-haspopup="listbox"
                    aria-controls={IDs.dropdown}
                    aria-labelledby={IDs.label}
                    data-js-select-button=''
                >
                    {selectedOption.value}

                </div>
                <div
                    className="select__dropdown"
                    id={IDs.dropdown}
                    role="listbox"
                    aria-labelledby={IDs.label}
                    data-js-select-dropdown=''
                >
                    {options.map((option, index) => {
                        const {
                            value,
                            isSelected
                        } = option;

                        return (
                            <div
                                className={classNames('select__option', {
                                    'is-selected': isSelected,
                                    'is-current': isSelected,
                                })}
                                id={`${id}-option-${index}`}
                                role='option'
                                data-js-select-option=''
                                key={index}
                            >
                                {value}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Select