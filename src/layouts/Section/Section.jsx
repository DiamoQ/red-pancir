import './Section.scss'
import classNames from 'classnames'

const Section = (props) => {
  const {
    className,
    title,
    titleIsVisible = true,
    titleId,
    description,
    actions,
    mainSectionInPage = false,
    isActionsHiddenInMobile = false,
    children,
  } = props

  return (
      <section
          className={classNames(className, 'section container')}
          aria-labelledby={titleId}
      >
        <header className='section__header'>
          <div className='section__info'>
            { mainSectionInPage ? (
                <h1 className={`page-title ${!titleIsVisible && ' visually-hidden'}`} id={titleId}>
                  {title}
                </h1>
            ) : (
                <h2 className={`section__title ${!titleIsVisible && ' visible-hidden'}`} id={titleId}>
                  {title}
                </h2>
            )
            }
            {description && (
                <div className="section__description">
                  {description}
                </div>
            )}
          </div>
          {actions && (
              <div className={classNames('section__actions', {
                'hidden-mobile': isActionsHiddenInMobile,
              })}>
                {actions}
              </div>
          )}
        </header>
        <div className='section__body'>
          {children}
        </div>
      </section>
  )
}

export default Section