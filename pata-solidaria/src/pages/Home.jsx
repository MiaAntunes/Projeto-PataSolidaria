import { AboutWe } from "../components/aboutWe/AboutWe"
import { FooterComponent } from "../components/footer/Footer"
import { AnimalsAdoption } from "../components/gridAnimal/AnimalsAdoption"
import { HeaderPages } from "../components/header/Header"
import { ServicesProject } from "../components/servicesProject/ServicesProject"



export const Home = () =>{

    return(
        <>
          <HeaderPages/>
          <AboutWe/>
          <AnimalsAdoption/>
          <ServicesProject/>
          <FooterComponent/>
        </>
    )
}