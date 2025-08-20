import './AboutPresent.scss'

const AboutPresent = () => {
    const basePath = import.meta.env.MODE === 'production'
        ? `${import.meta.env.VITE_PUBLIC_PATH}/videos`
        : '/videos'

    const videoSrc = `${basePath}/video.mp4` ;
    const posterSrc = `${basePath}/example-poster.png`;

    return (
        <section
            className='about-present'
            aria-labelledby='about-title'
        >
            <div className='about-present__inner container'>
                <header className='about-present__header'>
                    <h1 className="main-title">Раковарня<br/> <span className='text-red'>«Красный панцирь»</span></h1>
                    <p className="about-present__description">Мы готовим раков, креветок, крабов высокого качества, пока
                        они не станут не только ярко-красными, но и отменно вкусными! Отсюда название – Раковарня
                        «Красный панцирь».</p>
                </header>
                <div className="about-present__video-block" data-js-video=''>
                    <video className="js-player" data-poster={posterSrc} controls
                           playsInline data-js-video-video=''>
                        <source src={videoSrc} type="video/mp4"/>
                    </video>
                    <button
                        className="video-block__play-button"
                        type="button"
                        data-js-video-play-button=''
                        aria-label="Запустить видео"
                    >
                        Запустить видео
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutPresent