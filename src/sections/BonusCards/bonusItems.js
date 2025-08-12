const basePath = import.meta.env.MODE === 'production'
    ? `${import.meta.env.VITE_PUBLIC_PATH}/images/bonus`
    : '/images/bonus'

const shashlik1 = `${basePath}/shashlik1.png`;
const shashlik1Mobile = `${basePath}/shashlik1Mobile.png`;
const shashlik2 = `${basePath}/shashlik2.png`;
const shashlik2Mobile = `${basePath}/shashlik2Mobile.png`;

const categoryItems = [
    {
        title: "Шашлычки гребешок в беконе",
        imageDesctop: shashlik1,
        imageMobile: shashlik1Mobile,
        href: '/krevetki',
    },
    {
        title: "Шашлычки гребешок в беконе 2",
        imageDesctop: shashlik2,
        imageMobile: shashlik2Mobile,
        href: '/raki',
    },
    {
        title: "Шашлычки гребешок в беконе 3",
        imageDesctop: shashlik2,
        imageMobile: shashlik2Mobile,
        href: '/krabi',
    },
    {
        title: "Шашлычки гребешок в беконе 4",
        imageDesctop: shashlik2,
        imageMobile: shashlik2Mobile,
        href: '/midii',
    },
    {
        title: "Шашлычки гребешок в беконе 5",
        imageDesctop: shashlik2,
        imageMobile: shashlik2Mobile,
        href: '/ribi',
    },
    {
        title: "Шашлычки гребешок в беконе 6",
        imageDesctop: shashlik1,
        imageMobile: shashlik1Mobile,
        href: '/moreptodukti',
    },
    {
        title: "Шашлычки гребешок в беконе 7",
        imageDesctop: shashlik1,
        imageMobile: shashlik1Mobile,
        href: '/jiviemoreprodukti',
    },
    {
        title: "Шашлычки гребешок в беконе 8",
        imageDesctop: shashlik1,
        imageMobile: shashlik1Mobile,
        href: '/ikra',
    },
];

export default categoryItems;