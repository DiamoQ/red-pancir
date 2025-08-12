import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import Advantages from "@/sections/Advantages";
import Gallery from "@/sections/Gallery";
import InviteToJobForm from "@/sections/InviteToJobForm";
import AboutPresent from "@/sections/AboutPresent";
import AboutPresentSlider from "@/sections/AboutPresentSlider";


export const metadata = {
    title: 'О компании',
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
                                О компании
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <AboutPresent />
            <AboutPresentSlider />
            <Advantages />
            <Gallery />
            <InviteToJobForm />
            <ModalCallbackWindow />
        </>
    )
}
