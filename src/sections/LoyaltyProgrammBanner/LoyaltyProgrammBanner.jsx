import './LoyaltyProgrammBanner.scss'
import {Image} from "minista";
const QR = "/src/assets/images/loyaltyProgramm/qr.png";
const appLogo = "/src/assets/images/loyaltyProgramm/appLogo.png";
const mobileImage = "/src/assets/images/loyaltyProgramm/loyaltyProgrammMobileBannerImage.png";
const desktopImage = "/src/assets/images/loyaltyProgramm/loyaltyProgrammBannerImage.png";

const LoyaltyProgrammBanner = () => {
  const appLink = 'https://play.google.com/'

  return (
      <section
          className='loyalty-programm__section'
          aria-labelledby='loyalty-programm-title'
      >
        <div className='loyalty-programm__inner container'>
          <div className='loyalty-programm__banner'>
            <div className="loyalty-programm__qr">
              <Image
                  className='loyalty-programm__image'
                  src={QR}

                  loading='lazy'
                  alt='QR-код для скачивания приложения'
              />
            </div>
            <div className="loyalty-programm__content">
              <h2 className="loyalty-programm__title">Присоединяйтесь к нашей бонусной программе</h2>
              <p className="loyalty-programm__description">Сканируйте QR-код, чтобы присоединиться к бонусной программе и получить 200₽ на баланс уже сегодня. Вы получаете 300 бонусных рублей на день рождения и кэшбэк с каждой покупки!</p>
              <a href={appLink} target='_blank' aria-label='Ссылка на наше приложение' title='Скачать наше приложение' className='loyalty-programm__app-link'>
                <Image
                    className='loyalty-programm__app-logo'
                    src={appLogo}

                    loading='lazy'
                    alt='Логотип нашего приложения'
                />
                UDC App
              </a>
            </div>
            <picture>
              <source srcSet={mobileImage} media="(max-width: 1023.97px)"/>

              <Image
                  className='loyalty-programm__app-screen'
                  src={desktopImage}

                  alt='Изображение блока баннера приглашения на работу'
              />
            </picture>
          </div>
        </div>
      </section>
  )
}

export default LoyaltyProgrammBanner