import './Footer.scss';
import Socials from "@/components/Socials";
import Button from "@/components/Button";
import Icon from "@/components/Icon";

const Footer = (props) => {
  const menuItems = [
    {
      title: 'Полезное',
      links: [
        {
          title: 'Меню',
          link: '/katalog',
        },
        {
          title: 'О нас',
          link: '/about',
        },
        {
          title: 'Оплата',
          link: '/oplata',
        },
        {
          title: 'Контакты',
          link: '/contacts',
        },
      ],
    },{
      title: 'Документы',
      links: [
        {
          title: 'Информация об офферте',
          link: '/offerta',
        },
        {
          title: 'Политика конфиденциальности',
          link: '/confidential',
        },
        {
          title: 'Согласие на обработку персональных данных',
          link: '/personality-info',
        },
      ],
    }
  ]

  const companyInfo = {
    addressUrl: 'https://www.yandex.ru',
    addressName: 'г. Челябинск, ул Чичерина 8/3',
    workTime: 'с 11:00 до 23:00',
    workDay: 'Ежедневно',
    mail: 'Kpraki@yandex.ru',
    vk: 'https://www.vk.ru',
    telegram: 'https://www.telegram.com',
    whatsapp: 'https://www.whatsapp.com',
    phone: '+7-351-777-80-90'
  }

  const socials = [
    {
      label: 'Мы в ВКонтакте',
      iconName: 'vkLogo',
      link: 'vk.com',
    },
    {
      label: 'Мы в Telegram',
      iconName: 'tgLogo',
      link: 'tg.com',
    },
    {
      label: 'Мы в WhatsApp',
      iconName: 'whatsLogo',
      link: 'whatsapp.com',
    },
  ]

  const payServices = [
    {
      label: 'VISA',
      iconName: 'visa',
    },
    {
      label: 'МИР',
      iconName: 'mir',
    },
    {
      label: 'Union',
      iconName: 'union',
    },
  ]

  return (
      <footer className='footer'>
        <div className='footer__inner container'>
          <div className='footer__inner-top'>
            <nav className='footer__menu'>
              {menuItems.map(({title, links, socialLinks}, index) => (
                  <div className='footer__menu-column' key={index}>
                    <h4 className="footer__menu-title h6">{title}</h4>
                    {links?.length > 0 && (
                        <ul className='footer__menu-list'>
                          {links.map(({title, link}, index) => (
                              <li className='footer__menu-item' key={index}>
                                <a href={link} className='footer__menu-link'>{title}</a>
                              </li>
                          ))}
                        </ul>
                    )}
                    {socialLinks?.length > 0 && (
                        <Socials className='footer__soc1als' links={socialLinks}/>
                    )}
                  </div>
              ))}
            </nav>
            <div className="footer__address">
              <h4 className="footer__address-title h6">Наш адрес</h4>
              <address>
                <a href={companyInfo.addressUrl} target='_blank' rel='noopener noreferrer' className='footer__address-link'>
                  {companyInfo.addressName}
                </a>
              </address>
            </div>
            <address className='footer__company-info'>
              <a className="footer__company-phone" href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              <a className="footer__company-mail" href={`mailto:${companyInfo.mail}`}>{companyInfo.mail}</a>
              <button className="footer__company-callback" data-js-modal-notify-button='callback-window'>Заказать звонок</button>
              <Socials links={socials}/>
              <time className='footer__company-info-option'>
                            <span className='footer__company-info-name'>
                                {companyInfo.workDay}
                            </span>
                <span className='footer__company-info-value'>
                                {companyInfo.workTime}
                            </span>
              </time>
              <Button href='https://play.google.com/' target='_blank' label='Скачать UDS App'
                      className='footer__company-app-button'/>
            </address>
          </div>
          <div className='footer__extra'>
            <p className='footer__copyright'>
              Все права защищены@<time dateTime='2025'>2025</time>
            </p>
            <ul className="footer__pay-services">
              {payServices.map(({iconName, hasFillIcon, label}, index) => (
                      <li className="footer_pay-service" key={index}>
                        <Icon
                            className="button__icon"
                            name={iconName}
                            hasFill
                            areaLabel={label}
                            // FallbackSVG={SVGSearch}
                        />
                      </li>
                  )
              )}
            </ul>
            <p className="footer__name">
              Раковарня «Красный панцирь»
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer;