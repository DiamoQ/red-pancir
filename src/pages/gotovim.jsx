import LoyaltyProgrammBanner from "@/sections/LoyaltyProgrammBanner/LoyaltyProgrammBanner";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import CookingVariables from "@/sections/CookingVariables";


export const metadata = {
    title: 'Мы готовим',
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
                                Мы готовим
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <CookingVariables />
            <LoyaltyProgrammBanner />
            <ModalCallbackWindow />
        </>
    )
}
