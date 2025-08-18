import Section from "@/layouts/Section";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import AuthorizationForm from "@/components/AuthorizationForm";
import Field from "@/components/Field";

export const metadata = {
    title: 'Авторизация',
    isHeaderFixed: true,
}

export default () => {

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : '/'

    return (
        <>
            <section
                className='breadcrumbs'
                aria-labelledby='breadcrumbs'
            >
                <div className='breadcrumbs__inner container'>
                    <nav className="breadcrumbs__nav" aria-label="Хлебные крошки">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <a href={basePath} className="breadcrumbs__link">Главная</a>
                                <span className="breadcrumbs__separator">›</span>
                            </li>
                            <li className="breadcrumbs__item breadcrumbs__item--current">
                                Авторизация
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Section
                title='Авторизация'
                titleIsVisible={false}
                titleId='login-title'
                mainSectionInPage
                className='authorization'
            >
                <AuthorizationForm
                    title="Вход"
                    topLinkType="authorization"
                    submitButtonLabel="Войти"
                    recoverPasswordLink={true}
                >
                    <Field
                        className="form__cell"
                        label='Телефон'
                        id='authorizationPhone'
                        placeholder='+7 ( )'
                        inputMode='tel'
                        mask='+7 (000) 000-00-00'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        label='Пароль'
                        placeholder='Пароль'
                        id='authorizationPassword'
                        type='password'
                        isRequired
                    />
                </AuthorizationForm>
            </Section>
            <ModalCallbackWindow />
        </>
    )
}
