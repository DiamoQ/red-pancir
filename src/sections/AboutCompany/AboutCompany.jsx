import './AboutCompany.scss'
import Section from "@/layouts/Section";
import Slider from "@/components/Slider";
import {Image} from "minista";
import aboutBlockItems from "./aboutBlockItems";
const lobster = "/src/assets/icons/company_lobster.png";

const AboutCompany = () => {

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    return (
        <Section
            className='about-company'
            title='О компании'
            titleId='about-company-title'
            actions={(
                <a href={`${basePath}/about`} className='about-company__page-link section-page-link' target='_blank'>Подробнее</a>
            )}
        >
            <div className="about-company__information">
                <Image
                    src={lobster}

                    alt='Лобстер О Компании'
                    loading='lazy'
                />
                <h3 className="about-company__title">Мы — команда, которая заботится о том, что вы едите.</h3>
                <p className="about-company__description">Работаем только со свежими раками и морепродуктами, варим по собственным рецептам, не скрываем процессов — готовим на открытой кухне. У нас уже более 500 постоянных клиентов, и мы делаем всё, чтобы вы с удовольствием возвращались снова.</p>
            </div>
            <div className="about-company__slider">
                <Slider
                    hasScrollbarOnMobile={false}
                    hasPagination={false}
                    navigationMode='abs-bottom'
                    isNavigationHiddenMobile={false}
                    sliderParams={{
                        slidesPerView: 1,
                        spaceBetween: 0,
                        breakpoints: {
                            1024: {
                                allowTouchMove: false,
                            }
                        }
                    }}
                >
                    {aboutBlockItems.map((slide, i,) => (
                        <Image
                            src={slide.imgSrc}
                            alt={slide.imgAlt}

                            loading='lazy'
                            key={i}
                        />
                    ))}
                </Slider>
            </div>
        </Section>
    )
}

export default AboutCompany