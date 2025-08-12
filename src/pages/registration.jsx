import Section from "@/layouts/Section";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import AuthorizationForm from "@/components/AuthorizationForm";
import Field from "@/components/Field";

export const metadata = {
    title: 'Регистрация',
    isHeaderFixed: true,
}

export default () => {
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
                                <a href="/" className="breadcrumbs__link">Главная</a>
                                <span className="breadcrumbs__separator">›</span>
                            </li>
                            <li className="breadcrumbs__item breadcrumbs__item--current">
                                Регистрация
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Section
                title='Регистрация'
                titleIsVisible={false}
                titleId='registration-title'
                mainSectionInPage
                className='authorization registration'
            >
                <AuthorizationForm
                    title="Регистрация"
                    topLinkType="login"
                    submitButtonLabel="Зарегистрироваться"
                >
                    <Field
                        className="form__cell"
                        id="surname"
                        label='Фамилия'
                        placeholder='Фамилия'
                        isRequired
                    />
                    <Field
                        className="form__cell"
                        id="name"
                        label='Имя'
                        placeholder='Имя'
                        isRequired
                    />
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
                        label='E-mail'
                        placeholder='E-mail'
                        id='authorizationEmail'
                        type='email'
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
