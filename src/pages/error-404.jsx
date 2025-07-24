import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import Error404 from "@/sections/Error404";

export const metadata = {
    title: 'Ошибка 404',
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
                                Ошибка
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Error404 />
            <ModalCallbackWindow />
        </>
    )
}
