import OrderSteps from "@/sections/OrderSteps";
import Categories from "@/sections/Categories";
import FoodCookingVariables from "@/sections/FoodCookingVariables";
import AboutCompany from "@/sections/AboutCompany";
import LoyaltyProgrammBanner from "@/sections/LoyaltyProgrammBanner/LoyaltyProgrammBanner";
import Promot1onsBanners from "@/sections/Promot1onsBanners";
import ModalCallbackWindow from "@/components/ModalCallbackWindow";
import CompanyTitleBanner from "@/sections/CompanyTitleBanner";


export const metadata = {
    title: 'Главная',
    isHeaderFixed: true,
}

export default () => {
    return (
        <>
            <CompanyTitleBanner />
            <Promot1onsBanners/>
            <OrderSteps />
            <Categories title='Наш ассортимент' mainSectionInPage={false}/>
            <FoodCookingVariables />
            <AboutCompany/>
            <LoyaltyProgrammBanner />
            <ModalCallbackWindow />
        </>
    )
}
