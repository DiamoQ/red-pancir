import './AuthorizationForm.scss'
import classNames from 'classnames'
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

const AuthorizationForm = (props) => {
    const {
        title,
        // 'default'(authorization) || 'registration'
        topLinkType = 'authorization',
        recoverPasswordLink = false,
        children,
        submitButtonLabel='Отправить',
        className,
    } = props

    const basePath = import.meta.env.MODE === 'production'
        ? `${import.meta.env.VITE_PUBLIC_PATH}`
        : ''

    const topLinkHref = topLinkType === 'authorization' ? `${basePath}/registration` : `${basePath}/login`;
    const topLinkText = topLinkType === 'authorization' ? `Регистрация` : `Вход`;

    return (
        <div className="authorization__block">
            <header className="authorization__header">
                <h2 className="section__title">{title}</h2>
                {topLinkType && (
                    <a
                        href={topLinkHref}
                        className="authorization__header-link"
                    >
                        {topLinkText}
                    </a>
                )}
            </header>
            <form className="authorization__form form" action=''>
                {children}
                <div className="form__cell form__cell--wide form__cell--actions">
                    {topLinkType !== 'authorization' && (
                        <Checkbox
                            className="form__agreement"
                            id="callbackCheckboxId"
                            isRequired
                        />
                    )}
                    <Button
                        className="form__submit-button"
                        label={submitButtonLabel}
                        type='submit'
                    />
                </div>
            </form>
            { recoverPasswordLink && (
                <a href={`${basePath}/recover`} className="authorization__recover-link">Восстановить пароль</a>
            )}
        </div>
    )
}

export default AuthorizationForm