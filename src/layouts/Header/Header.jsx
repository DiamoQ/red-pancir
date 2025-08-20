import './Header.scss';
import Logo from "@/components/Logo";
import classNames from "classnames";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";
import Socials from "@/components/Socials";
import SearchString from "@/components/SearchString";

const Header = (props) => {
  const {
    url,
    isFixed,
  } = props;
  const menuItems = [
    {
      label: 'О компании',
      href: '/about'
    },{
      label: 'Мы готовим',
      href: '/gotovim'
    },{
      label: 'Оплата',
      href: '/oplata'
    },{
      label: 'Акции',
      href: '/bonusactions'
    },
  ]

  const companyInfo = {
    addressUrl: 'https://yandex.ru/profile/239792091110?lang=ru',
    addressName: 'г. Челябинск, ул Чичерина 8/3',
    workTime: 'с 11:00 до 23:00',
    workDay: 'Ежедневно',
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

  const basePath = import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_PUBLIC_PATH
      : ''

  return (
      <header className={classNames('header', {
        'is-fixed': isFixed,
      })} data-js-overlay-menu=''>
        <div className='header__inner container'>
          <div className='header__inner-top'>
            <Logo loading='eager'/>
            <address className='header__company-info'>
              <div className='header__company-info-option'>
                            <span className='header__company-info-name'>
                                Самовывоз:
                            </span>
                <a href={companyInfo.addressUrl} target='_blank' rel='noopener noreferrer' className='header__company-info-value'>
                  {companyInfo.addressName}
                </a>
              </div>
              <time className='header__company-info-option'>
                <span className='header__company-info-name'>
                    {companyInfo.workDay}
                </span>
                <span className='header__company-info-value'>
                    {companyInfo.workTime}
                </span>
              </time>
              <Socials links={socials} />
              <a className="header__company-phone" href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
              <Button
                  label='Заказать звонок'
                  className='header__button-call'
                  extraAttrs={{
                    'data-js-modal-notify-button': 'callback-window'
                  }}
              />
            </address>
            <div className='header__actions'>
              <Button
                  className='busket-button'
                  iconName='busket'
                  href={`${basePath}/basket`}
                  label='Корзина'
                  mode='white'
                  hasFillIcon
              />
              <Button
                  className='login-button'
                  iconName='login'
                  href={`${basePath}/login`}
                  label='Войти'
                  mode='white'
                  hasFillIcon
              />
              <BurgerButton
                  className='header__burger-button visible-tablet'
                  extraAttrs={{
                    'data-js-overlay-menu-burger-button': 'callback-window'
                  }}
              />
            </div>
          </div>
          <div className='header__inner-bottom'>
            <Button
                className='katalog-button'
                iconName='katalog'
                href={`${basePath}/katalog`}
                label='Каталог'
                hasFillIcon
            />
            <SearchString />
            <dialog
                className='header__overlay-menu-dialog'
                data-js-overlay-menu-dialog=''
            >
              <nav className='header__menu'>
                <ul className='header__menu-list'>
                  {menuItems.map((item, index) => (
                      <li key={index} className='header__menu-item'>
                        <a
                            href={`${basePath}${item.href}`}
                            className={classNames('header__menu-link', {
                              'is-active': item.href === url
                            })}
                        >
                          {item.label}
                        </a>
                      </li>
                  ))}
                </ul>
              </nav>
              <address className='header__company-info'>
                <Socials links={socials} />
                <a className="header__company-phone" href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
                <Button
                    label='Заказать звонок'
                    className='header__button-call'
                    extraAttrs={{
                      'data-js-modal-notify-button': 'callback-window'
                    }}/>
                <div className='header__company-info-option'>
                  <span className='header__company-info-name'>
                      Самовывоз:
                  </span>
                  <a href={companyInfo.addressUrl} target='_blank' rel='noopener noreferrer' className='header__company-info-value'>
                    {companyInfo.addressName}
                  </a>
                </div>
                <time className='header__company-info-option'>
                  <span className='header__company-info-name'>
                      {companyInfo.workDay}
                  </span>
                  <span className='header__company-info-value'>
                      {companyInfo.workTime}
                  </span>
                </time>
              </address>
            </dialog>
            <Button
                className='busket-button'
                iconName='busket'
                href={`${basePath}/basket`}
                label='Корзина'
                mode='white'
                hasFillIcon
            />
            <Button
                className='login-button'
                iconName='login'
                href={`${basePath}/login`}
                label='Войти'
                mode='white'
                hasFillIcon
            />
          </div>
        </div>
      </header>
  )
}

export default Header;