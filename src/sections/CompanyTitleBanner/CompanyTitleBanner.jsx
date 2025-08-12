import './CompanyTitleBanner.scss'

const basePath = import.meta.env.MODE === 'production'
    ? `${import.meta.env.VITE_PUBLIC_PATH}/images/ban-section`
    : '/images/ban-section'

const mobileImage = `${basePath}/companyMobileBannerImage.png`;
const desktopImage = `${basePath}/companyBannerImage.png`;

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

              <img
                  className='company-title-banner__image'
                  src={desktopImage}
                  alt='Изображение блока баннера Раковарня Красный панцирь'
                  loading='lazy'
              />
            </picture>
          </div>
        </div>
      </section>
  )
}

export default CompanyTitleBanner