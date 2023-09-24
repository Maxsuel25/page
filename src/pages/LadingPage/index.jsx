//import Batatinha from "../../components/Header"

import { Button } from "../../components/Button"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { BannerSection } from "../../components/sections/BannerSection"
import { CategoriesSection } from "../../components/sections/CategoriesSection"
import { FormSection } from "../../components/sections/FormSection"
import { ProductsSection } from "../../components/sections/ProductsSection"

// import ArrowIcon from "../../assets/arrow-icon.svg"
export const LadingPage = () => {
    return (
        <>
            <DefaultTemplate >
                {/* Isso é o valor children para o componente DefaultTemplate */}
                {/* <Button >
                    <img src={ArrowIcon} alt="icon" />
                    Enviar
                </Button> */}
                <BannerSection/>
                <CategoriesSection/>
                <ProductsSection/>
                <FormSection/>
            </DefaultTemplate>
        
        </>
    )
}