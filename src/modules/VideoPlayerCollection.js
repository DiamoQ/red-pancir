const rootSelector = '[data-js-video]';

class VideoPlayer {
    selectors = {
        root: rootSelector,
        video: '[data-js-video-video]',
        button: '[data-js-video-play-button]',
    }

    stateClasses = {
        isActive: 'is-active',
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.videoElement = this.rootElement.querySelector(this.selectors.video);
        this.playButtonElement =  this.rootElement.querySelector(this.selectors.button);
        this.bindEvents();
    }

    onPlayButtonClick = () => {
        this.videoElement.play();
        this.videoElement.requestFullscreen();
        this.videoElement.controls(true);
        this.playButtonElement.classList.remove(this.stateClasses.isActive);
    }

    onVideoPause = () => {
        this.videoElement.controls(false);
        this.playButtonElement.classList.add(this.stateClasses.isActive);
    }

    onVideoFullScreenChange = () => {
        const isFullScreenEnable = document.fullscreenElement === this.videoElement;

        if (!isFullScreenEnable) {
            this.videoElement.pause()
        }
    }

    bindEvents() {
        this.playButtonElement.addEventListener('click', this.onPlayButtonClick)
        this.videoElement.addEventListener('pause', this.onVideoPause)
        this.videoElement.addEventListener('fullscreenchange', this.onVideoFullScreenChange)
    }
}

class VideoPlayerCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((el) => {
            new VideoPlayer(el);
        })
    }
}

export default VideoPlayerCollection;