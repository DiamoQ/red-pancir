import './BonusCard.scss'

const BonusCard = (props) => {
    const {
        title,
        imageDesctop,
        imageMobile,
        href,
    } = props

    return (
        <a
            className='bonus-card'
            href={href}
            target='_blank'
        >
            <picture>
                <source
                    srcSet={imageMobile}
                    media="(min-width: 768.97px)"
                    type="image/png"
                />
                <img src={imageDesctop} alt={title} className='bonus-card__image' loading='lazy'/>
            </picture>
        </a>
    )
}

export default BonusCard