
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import RecommendedProducts from "@/sections/RecommendedProducts";


export const metadata = {
    title: 'Страница продукта',
    isHeaderFixed: true,
}

export default () => {

    return (
        <>

            <RecommendedProducts />
            <ModalCallbackWindow />
        </>
    )
}