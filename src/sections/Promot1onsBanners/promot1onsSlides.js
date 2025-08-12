const basePath = import.meta.env.MODE === 'production'
    ? `${import.meta.env.VITE_PUBLIC_PATH}/images/promot1onsSlides`
    : '/images/promot1onsSlides'

const mobilePromot1onsSlideBanner1 = `${basePath}/promot1onsSlide-mobile-1.png`;
const desktopPromot1onsSlideBanner1 = `${basePath}/promot1onsSlide-desctop-1.png`;
const mobilePromot1onsSlideBanner2 = `${basePath}/promot1onsSlide-mobile-2.png`;
const desktopPromot1onsSlideBanner2 = `${basePath}/promot1onsSlide-desctop-2.png`;

const promot1onsSlides = [
    {
        title: "Камчатский краб за 3999₽",
        href: "/category/krab",
        mobileBanner: mobilePromot1onsSlideBanner1,
        desktopBanner: desktopPromot1onsSlideBanner1,
    },
    {
        title: "Камчатский краб за 4999₽",
        href: "/category/krab-2",
        mobileBanner: mobilePromot1onsSlideBanner2,
        desktopBanner: desktopPromot1onsSlideBanner2,
    },
]

export default promot1onsSlides;