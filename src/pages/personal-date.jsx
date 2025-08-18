import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import PersonalDate from "@/sections/PersonalDate";
import PersonalDateForm from "@/components/PersonalDateForm";

export const metadata = {
    title: 'Личные данные',
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
                                Личные данные
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <PersonalDate title="Личные данные">
                <PersonalDateForm/>
            </PersonalDate>
            <ModalCallbackWindow/>
        </>
    )
}
