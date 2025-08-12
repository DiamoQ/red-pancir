import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import PersonalDate from "@/sections/PersonalDate";
import OrderHistory from "@/sections/OrderHistory";

export const metadata = {
    title: 'История заказов',
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
                                История заказов
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <PersonalDate title="История заказов">
                <OrderHistory />
            </PersonalDate>
            <ModalCallbackWindow/>
        </>
    )
}
