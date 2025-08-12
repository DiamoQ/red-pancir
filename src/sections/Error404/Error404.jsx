import './Error404.scss'
import Section from "@/layouts/Section";
import Button from "@/components/Button";
import {Image} from "minista";
const error404 = "/src/assets/images/error404/error404.png"

const Error404 = (props) => {

  const {
    title = 'Ошибка 404',
  } = props

  const basePath = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PUBLIC_PATH
    : '/'

  return (
      <Section
          title={title}
          titleIsVisible={false}
          titleId='error-404-title'
          mainSectionInPage
          className='error404 noto-font'
      >
          <Image src={error404} alt='Ошибка 404' />
          <div className="error404__content">
              <p className='error404__description'>Такой страницы нет. Если не нашли что искали, позвоните нам или воспользуйтесь каталогом сайта.</p>
              <Button
                  className='button-page-link-to-main'
                  href={basePath}
                  label='На главную'
              />
          </div>
      </Section>
  )
}

export default Error404