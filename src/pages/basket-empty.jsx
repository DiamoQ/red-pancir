import Section from "@/layouts/Section";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import AuthorizationForm from "@/components/AuthorizationForm";
import Field from "@/components/Field";
import Icon from "@/components/Icon";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";
import LoyaltyProgrammBanner from "@/sections/LoyaltyProgrammBanner";
import Basket from "@/sections/Basket";

export const metadata = {
    title: 'Корзина',
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
                                Корзина
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section
                className='basket container'
                aria-labelledby='basket'
            >
                <h1 className='page-title'>Корзина</h1>
                <div className="basket__content">
                    <p className='basket__description'>В корзине пока пусто.</p>
                    <Button
                        className='button-page-link-to-main'
                        href={`${basePath}/katalog`}
                        label='В каталог'
                    />
                </div>
            </section>
            <LoyaltyProgrammBanner />
            <ModalCallbackWindow />
        </>
    )
}
