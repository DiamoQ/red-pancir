import './Logo.scss'
import classNames from 'classnames'
import {Image} from "minista";
const logoImgSrc = '/src/assets/images/logo.png';

const Logo = (props) => {
  const {
    className,
    loading = lazy
  } = props
  const title = 'Главная'

  return (
      <a
          className={classNames(className, 'logo')}
          href='/'
          title={title}
          aria-label={title}
      >
        <Image
            className="logo__image"
            src={logoImgSrc}
            alt='Логотип компании Красный панцирь'
        />
      </a>
  )
}

export default Logo