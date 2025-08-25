
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import RecommendedProducts from "@/sections/RecommendedProducts";
import ProductReviews from "@/sections/ProductReviews";
import Product from "@/sections/Product";

export const metadata = {
    title: 'Страница продукта',
    isHeaderFixed: true,
}

export default () => {

    const basePath = import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_PUBLIC_PATH
        : ''

    const productInfo = {
        articul: '99352',
        name: 'Креветка 90/120 Гренландия',
        price: 1399,
        oldPrice: 1499,
        inStock: true,
        introtext: 'Креветки северные варено-мороженые. В одном килограмме   90\u00A0-120 креветок. Полностью готовы к употреблению после разморозки. Сварены и заморожены на борту рыболовного траулера.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et repellendus sed suscipit vero? Ad, architecto aspernatur corporis enim error eveniet fugit maxime nihil, omnis quidem sit soluta totam, vel?',
        memo: 'Время доставки составляет приблизительно 1 час с момента поступления заказа.',
        delivery: 'Время доставки составляет приблизительно 1 час с момента поступления заказа. В выходные и праздничные дни время доставки может быть увеличено до 2,5 часов. Стоимость доставки, независимо от суммы заказа, от 300 рублей в зависимости от района. Точную стоимость доставки вам сообщит оператор.',
        photos: [],
        labels: [
            'promo',
            'hold',
            'new',
        ],
        portionInformation: [
            {
                portionInformationName: 'Вес порции',
                portionInformationValue: '1кг',
            },
            {
                portionInformationName: 'На человека',
                portionInformationValue: '0.5кг',
            },
            {
                portionInformationName: 'Кол-во',
                portionInformationValue: '35шт',
            },
            {
                portionInformationName: 'Вес единицы',
                portionInformationValue: 'до 30гр',
            },
            {
                portionInformationName: 'Ккал',
                portionInformationValue: '147',
            },
            {
                portionInformationName: 'Белки, г',
                portionInformationValue: '8.5',
            },
            {
                portionInformationName: 'Жиры, г',
                portionInformationValue: '10.5',
            },
            {
                portionInformationName: 'Углеводы, г',
                portionInformationValue: '4.5',
            },
        ],
        cookingVariants: [
            {
                title: 'Пожарить',
                isActive: true,
                variants: [
                    {
                        title: 'Нет',
                        id: 'not',
                    },
                    {
                        title: 'Классическая',
                        id: 'classic',
                        memo: 'Тонкий аромат размарина, белого вина, чеснока и свежей петрушки с лимоном. Идеально для лангустинов и креветок.',
                        price: '199',
                    },
                    {
                        title: 'В томатном маринаде',
                        id: 'tomato',
                        memo: 'Креветки северные варено-мороженые. В одном килограмме 90',
                        price: '299',
                    },
                    {
                        title: 'По-Средиземноморски',
                        id: 'sredizem',
                        memo: 'Креветки северные варено-мороженые. В одном килограмме 90',
                        price: '299',
                    },
                    {
                        title: 'Мексиканская',
                        id: 'mexico',
                        memo: 'Креветки',
                        price: '299',
                    },
                    {
                        title: 'Азиатская',
                        id: 'asia',
                        memo: 'Дополнительная информация',
                        price: '299',
                    },
                    {
                        title: 'По-Тайски',
                        id: 'thai',
                        memo: 'Креветки северные варено-мороженые.',
                        price: '299',
                    },
                    {
                        title: 'Сливочно-чесночная',
                        id: 'slivChesn',
                        memo: 'Дополнительная информация',
                        price: '299',
                    },
                ],
            },
            {
                title: 'Отварить',
                variants: [
                    {
                        title: 'Нет',
                        id: 'notVar',
                    },
                    {
                        title: 'По-Средиземноморски',
                        id: 'poSredizem',
                        memo: 'Креветки северные варено-мороженые. В одном килограмме 90',
                        price: '299',
                    },
                    {
                        title: 'Мексиканская',
                        id: 'mexicoVar',
                        memo: 'Креветки',
                        price: '299',
                    },
                    {
                        title: 'Азиатская',
                        id: 'asiatskVarka',
                        memo: 'Дополнительная информация',
                        price: '299',
                    },
                ],
            }
        ],
        marinadeVariants: [
            {
                title: 'Нет',
                id: 'notmarinade',
            },
            {
                title: 'Цитрусовый',
                id: 'citrus',
                memo: 'Дополнительная информация',
                price: '199',
            },
            {
                title: 'Соево-имбирный',
                id: 'soeimbir',
                memo: 'Креветки северные варено-мороженые. В одном килограмме 90',
                price: '299',
            },
        ]
    }

    return (
        <>
            <section
                className='breadcrumbs'
                aria-labelledby='breadcrumbs'
            >
                <div className='breadcrumbs__inner container'>
                    <nav className="breadcrumbs__nav" aria-label="Хлебные крошки">
                        <ul className="breadcrumbs__list">
                            <li className="breadcrumbs__item">
                                <a href={basePath} className="breadcrumbs__link">Главная</a>
                                <span className="breadcrumbs__separator">›</span>
                            </li>
                            <li className="breadcrumbs__item">
                                <a href={`${basePath}/katalog`} className="breadcrumbs__link">Каталог</a>
                                <span className="breadcrumbs__separator">›</span>
                            </li>
                            <li className="breadcrumbs__item">
                                <a href={`${basePath}/moreproducty`} className="breadcrumbs__link">Креветки</a>
                                <span className="breadcrumbs__separator">›</span>
                            </li>
                            <li className="breadcrumbs__item breadcrumbs__item--current">
                                Креветки северные 90/120
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <Product productInfo={productInfo}/>
            <ProductReviews />
            <RecommendedProducts />
            <ModalCallbackWindow />
            <ModalCallbackWindow
                modalId="notify-availability"
                title="Сообщить о поступлении"
                description="К сожалению, товара нет в наличии, но мы сообщим о поступлении!"
                hasProductNameField={true}
            />
        </>
    )
}