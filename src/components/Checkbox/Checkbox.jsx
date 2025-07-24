import './Checkbox.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const Checkbox = (props) => {
    const {
        className,
        id = getIdFromTitle(props.label),
        label,
        isRequired,
    } = props

    const labelString = label ?? (
        <>
            Я даю согласие на <a href="/personal-date" target="_blank">обработку персональных данных</a>, а также подтверждаю, что ознакомлен с <a href="/politics" target="_blank">Политикой конфиденциальности</a>
        </>
    )

    return (
        <label
            className={classNames(className, 'checkbox')}
            htmlFor={id}
        >
            <input
                className='checkbox__input'
                type='checkbox'
                id={id}
                required={isRequired}
            />
            <p className="checkbox__label">
                {labelString}
            </p>
        </label>
    )
}

export default Checkbox