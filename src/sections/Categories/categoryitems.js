const krevetki = '/src/assets/images/categories/krevetki.png';
const raki = '/src/assets/images/categories/raki.png';
const krabi = '/src/assets/images/categories/krabi.png';
const midii = '/src/assets/images/categories/midii.png';
const ribi = '/src/assets/images/categories/ribi.png';
const moreptodukti = '/src/assets/images/categories/moreptodukti.png';
const jiviemoreprodukti = '/src/assets/images/categories/jiviemoreprodukti.png';
const ikra = '/src/assets/images/categories/ikra.png';
const delikatesi = '/src/assets/images/categories/delikatesi.png';
const polufabrikati = '/src/assets/images/categories/polufabrikati.png';
const sousi = '/src/assets/images/categories/sousi.png';
const konservi = '/src/assets/images/categories/konservi.png';

const basePath = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PUBLIC_PATH
    : ''

const categoryItems = [
    {
        title: "Креветки",
        image: krevetki,
        href: `${basePath}/moreproducty`,
    },{
        title: "Раки",
        image: raki,
        href: `${basePath}/moreproducty`,
    },{
        title: "Крабы",
        image: krabi,
        href: `${basePath}/moreproducty`,
    },{
        title: "Мидии",
        image: midii,
        href: `${basePath}/moreproducty`,
    },{
        title: "Рыба",
        image: ribi,
        href: `${basePath}/moreproducty`,
    },{
        title: "Морепродукты",
        image: moreptodukti,
        href: `${basePath}/moreproducty`,
    },{
        title: "Живые морепродукты",
        image: jiviemoreprodukti,
        href: `${basePath}/moreproducty`,
    },{
        title: "Икра",
        image: ikra,
        href: `${basePath}/moreproducty`,
    },{
        title: "Деликатесы",
        image: delikatesi,
        href: `${basePath}/moreproducty`,
    },{
        title: "Полуфабрикаты",
        image: polufabrikati,
        href: `${basePath}/moreproducty`,
    },{
        title: "Соусы",
        image: sousi,
        href: `${basePath}/moreproducty`,
    },{
        title: "Консервы",
        image: konservi,
        href: `${basePath}/moreproducty`,
    },
];

export default categoryItems;