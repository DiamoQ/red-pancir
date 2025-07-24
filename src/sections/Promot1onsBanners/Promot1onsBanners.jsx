import './Promot1onsBanners.scss'
import Slider from "@/components/Slider";
import promot1onsSlides from "./promot1onsSlides";
import promot1onsLinkCards from "./promot1onsLinkCards";
import {Image} from "minista";

const Promot1onsBanners = () => {

  return (
      <section
          className='promot1ons-section'
          aria-labelledby='promot1ons-title'
      >
        <div className='promot1ons__inner container'>
          <h2 className="visually-hidden">Специальные предложения</h2>
          <div className="promot1ons__slider">
            <Slider
                hasScrollbarOnMobile={false}
                hasPagination={false}
                navigationPosition='abs-bottom'
                isNavigationHiddenMobile={false}
                navigationButtonMode='grey'
                sliderParams={{
                  slidesPerView: 1,
                  spaceBetween: 10,
                  breakpoints: {
                    1024: {
                      allowTouchMove: false,
                    }
                  }
                }}
            >
              {promot1onsSlides.map((slide, i,) => (
                  <a
                      href={slide.href}
                      key={i}
                      target='_blank'
                      rel='noopener noreferrer'
                      title={slide.title}
                  >
                    <picture>
                      <source srcSet={slide.mobileBanner} media="(max-width: 768.97px)"/>

                      <Image
                          className="promot1ons__slide"
                          src={slide.desktopBanner}
                          alt={slide.title}
                      />
                    </picture>
                  </a>
              ))}
            </Slider>
          </div>
          <div className="promot1ons__link-cards">
            {promot1onsLinkCards.map((card, i,) => (
                <a
                    className="promot1ons__link-card"
                    href={card.href}
                    key={i}
                    target='_blank'
                    rel='noopener noreferrer'
                    title={card.title}
                >
                  <picture>
                    <source srcSet={card.mobileBanner} media="(max-width: 768.97px)"/>

                    <Image
                      className="promot1ons__link-card"
                      src={card.desktopBanner}
                      alt={card.title}
                    />
                  </picture>
                </a>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Promot1onsBanners