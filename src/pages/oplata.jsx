import Section from "@/layouts/Section";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";

export const metadata = {
    title: 'Оплата',
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
                                Оплата
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Section
                title='Оплата'
                titleId='oplata-title'
                mainSectionInPage
                description={(
                    <>
                        <p>
                            Вы можете оплатить заказ наличными или банковской картой при получении.<br/>
                            Никакой предоплаты — оплата производится только после осмотра товара на месте.<br/>
                            Мы заботимся о вашем удобстве и уверенности в покупке.
                        </p>

                        <p>
                            Мы принимаем все основные виды карт.<br/>
                            Наличные также без проблем.
                        </p>
                        <ul>
                            <li>Visa</li>
                            <li>MasterCard</li>
                            <li>Мир</li>
                        </ul>
                        <p>
                            <span className='text-red text-semibold'> Обратите внимание:</span><br/>
                            Самовывоз — единственный доступный способ получения заказа.<br/>
                            Адрес и график работы пункта выдачи уточняйте заранее, чтобы избежать недоразумений.
                        </p>
                        <p>Мы стараемся сделать процесс максимально простым и прозрачным. Если у вас есть вопросы — мы всегда готовы помочь!</p>
                    </>
                )}
                className='oplata'
            >
            </Section>
            <ModalCallbackWindow />
        </>
    )
}
