import { AboutVolunteer } from "../components/aboutVolunteer/AboutVolunteer"
import { FooterComponent } from "../components/footer/Footer"
import { Forms } from "../components/forms/Forms"
import { HeaderPages } from "../components/header/Header"


export const JobVolunteer = () => {

    return (
        <>
            <HeaderPages />
            <AboutVolunteer />
            <Forms title="Convocação para Voluntariado: Junte-se a Nós e Faça a Diferença!" />
            <FooterComponent/>
        </>
    )
}