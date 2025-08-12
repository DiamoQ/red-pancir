import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import Category from "@/sections/Category";
import LoyaltyProgrammBanner from "@/sections/LoyaltyProgrammBanner";
import FilterModalWindow from "@/components/FilterModalWindow";

export const metadata = {
    title: 'Морепродукты',
    isHeaderFixed: true,
}

export default () => {

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

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
                            <li className="breadcrumbs__item">
                                <a href={`${basePath}/katalog`} className="breadcrumbs__link">Каталог</a>
                                <span className="breadcrumbs__separator">›</span>
                            </li>
                            <li className="breadcrumbs__item breadcrumbs__item--current">
                                Морепродукты
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Category/>
            <LoyaltyProgrammBanner />
            <FilterModalWindow />
            <ModalCallbackWindow />
        </>
    )
}
