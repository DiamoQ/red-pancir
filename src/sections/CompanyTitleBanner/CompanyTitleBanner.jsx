import './CompanyTitleBanner.scss'
import {Image} from "minista";
const mobileImage = '/src/assets/images/ban-section/companyMobileBannerImage.png';
const desktopImage = '/src/assets/images/ban-section/companyBannerImage.png';

const CompanyTitleBanner = () => {

  return (
      <section
          className='company-present'
          aria-labelledby='company-title'
      >
        <div className='company-present__inner container'>
          <div className='company-present__banner'>
            <h1 className="main-title">Раковарня <span>Красный панцирь</span></h1>
            <picture>
              <source srcSet={mobileImage} media="(max-width: 768.97px)"/>

              <Image
                  className='company-title-banner__image'
                  src={desktopImage}
                  alt='Изображение блока баннера Раковарня Красный панцирь'
              />
            </picture>
          </div>
        </div>
      </section>
  )
}

export default CompanyTitleBanner