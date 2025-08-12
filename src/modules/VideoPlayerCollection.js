import Plyr from 'plyr';

const rootSelector = '[data-js-video]';

class VideoPlayer {
    constructor(root) {
        this.root = root;
        this.video = root.querySelector('video.js-player');
        this.playButton = root.querySelector('[data-js-video-play-button]');
        this.player = null;

        this.init();
    }

    init() {
        this.player = new Plyr(this.video, {
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
            hideControls: false,
            autoplay: false,
        });

        // Изначальное состояние: остановлен
        this.root.classList.add('is-stopped');

        this.playButton.addEventListener('click', () => {
            this.root.classList.remove('is-stopped');
            this.root.classList.add('is-started');
            this.playButton.blur();
            this.player.play();
        });

        this.player.on('play', () => {
            this.root.classList.remove('is-stopped');
            this.root.classList.add('is-started');
        });

        // если хочешь скрывать контролы на паузе — раскомментируй:
        // this.player.on('pause', () => {
        //   this.root.classList.add('is-stopped');
        // });
    }
}

class VideoPlayerCollection {
    constructor() {
        this.init();
    }
    init() {
        document.querySelectorAll(rootSelector).forEach(el => new VideoPlayer(el));
    }
}

export default VideoPlayerCollection;
