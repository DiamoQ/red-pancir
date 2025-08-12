import './FileField.scss'
import classNames from 'classnames'
import getIdFromTitle from "@/utils/getIdFromTitle";

const FileField = (props) => {
    const {
        className,
        id = getIdFromTitle(props.label),
        label,
        isRequired,
    } = props

    return (
        <div  className={classNames(className, 'field')}>
            <label className="field__label field__label-file" htmlFor={id}>
                {label}
            </label>

            <label className="field__file-label">
                <input
                    className='field__control field__file-input visibility-hidden'
                    id={id}
                    tabIndex='-1'
                    type="file"
                    data-js-file-input=''
                    required={isRequired}
                />
                <span className="field__control field__control-fake-input" tabIndex='0' data-js-file-name=''>
                  {label}
                </span>
            </label>
        </div>
    )
}

export default FileField