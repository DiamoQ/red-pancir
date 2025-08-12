const basePath = import.meta.env.MODE === 'production'
    ? `${import.meta.env.VITE_PUBLIC_PATH}/images/promot1onsSlides`
    : '/images/promot1onsSlides'

const mobilePromot1onsLinkCardsBanner1 = `${basePath}/promot1onsLinkCards-mobile-1.png`;
const desktopPromot1onsLinkCardsBanner1 = `${basePath}/promot1onsLinkCards-desctop-1.png`;
const mobilePromot1onsLinkCardsBanner2 = `${basePath}/promot1onsLinkCards-mobile-2.png`;
const desktopPromot1onsLinkCardsBanner2 =  `${basePath}/promot1onsLinkCards-desctop-2.png`;

const promot1onsLinkCards = [
    {
        title: "Бонусная программа",
        href: "/category/bonus",
        mobileBanner: mobilePromot1onsLinkCardsBanner1,
        desktopBanner: desktopPromot1onsLinkCardsBanner1,
    },
    {
        title: "Наши рецепты приготовления",
        href: "/category/recepts",
        mobileBanner: mobilePromot1onsLinkCardsBanner2,
        desktopBanner: desktopPromot1onsLinkCardsBanner2,
    },
]

export default promot1onsLinkCards;