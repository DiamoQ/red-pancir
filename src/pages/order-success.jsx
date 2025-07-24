import Button from "@/components/Button";
import Section from "@/layouts/Section";

export const metadata = {
    title: 'Заказ успешно оформлен',
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
                                Успешно
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Section
                title='Заказ успешно оформлен'
                titleId='order-success-title'
                mainSectionInPage
                description={(
                    <>
                        <p>
                            Оплата прошла успешно, наш менеджер свяжется <br/>
                            с вами. Спасибо!
                        </p>
                    </>
                )}
                className='order-success noto-font'
            >
                <Button
                    className='button-page-link-to-main'
                    href='/'
                    label='На главную'
                />
            </Section>
        </>
    )
}
