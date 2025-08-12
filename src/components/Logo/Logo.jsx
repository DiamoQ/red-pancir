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

  const basePath = import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_PUBLIC_PATH
      : '/'


  return (
      <a
          className={classNames(className, 'logo')}
          href={basePath}
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