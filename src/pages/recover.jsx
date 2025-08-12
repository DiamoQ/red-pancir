import Section from "@/layouts/Section";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import AuthorizationForm from "@/components/AuthorizationForm";
import Field from "@/components/Field";

export const metadata = {
    title: 'Восстановление пароля',
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
                                Восстановление пароля
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Section
                title='Восстановление пароля'
                titleIsVisible={false}
                titleId='recover-title'
                mainSectionInPage
                className='authorization recover'
            >
                <AuthorizationForm
                    title="Введите E-mail"
                    topLinkType="recover"
                    submitButtonLabel="Восстановить"
                >
                    <Field
                        className="form__cell"
                        label='E-mail'
                        placeholder='E-mail'
                        id='authorizationEmail'
                        type='email'
                        isRequired
                    />
                </AuthorizationForm>
            </Section>
            <ModalCallbackWindow />
        </>
    )
}
