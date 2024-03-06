import protection from "../../assets/protecao-animal.png"
import castraction from "../../assets/cuidado-animal.png"
import "./servicesProject.css"
import { Forms } from "../forms/Forms"



export const ServicesProject = () => {

    return (
        <section className="services-section">
            <div className="services-container">
                <h2 className="services-title">Serviços</h2>
                <div className="services-list">
                    <article className="service-item">
                        <img src={protection} alt="Ícone de proteção ao animal" className="service-icon" />
                        <h3 className="service-title">Microchipagem</h3>
                        <ul className="service-list">
                            <li>
                                <p className="service-text"><strong>Identificação rápida de animais perdidos:</strong> O microchip oferece um método seguro e único para identificar animais perdidos, facilitando sua rápida devolução aos proprietários.</p>
                            </li>
                            <li>
                                <p className="service-text"><strong>Prevenção contra roubo:</strong> Com o microchip, os animais estão menos suscetíveis ao roubo, pois sua identidade pode ser verificada por profissionais autorizados.</p>
                            </li>
                            <li>
                                <p className="service-text"><strong>Controle populacional responsável:</strong> A microchipagem é essencial em programas de esterilização, ajudando a evitar procedimentos desnecessários e contribuindo para o controle responsável da população animal.</p>
                            </li>
                            <li>
                                <p className="service-text"><strong>Facilitação dos cuidados médicos:</strong> O microchip fornece acesso rápido ao histórico médico do animal, permitindo cuidados médicos adequados e oportunos.</p>
                            </li>
                            <li>
                                <p className="service-text"><strong>Gestão eficaz de animais de estimação:</strong> A microchipagem promove a responsabilidade do proprietário e contribui para a segurança e bem-estar dos animais de estimação.</p>
                            </li>
                        </ul>
                        <p className="service-text">Esta imagem foi extraída desse <a href="https://www.flaticon.com/br/icones-gratis/seguro-animal-de-estimacao" className="service-icon-link" title="Ícones de seguro animal de estimação">Link</a></p>
                    </article>
                    <article className="service-item">
                        <img src={castraction} alt="Ícone da saúde do animal" className="service-icon" />
                        <h3 className="service-title">Castração</h3>
                        <ul>
                            <li>
                                <p className="service-text"><strong>Benefícios à saúde animal:</strong> A castração reduz o risco de várias doenças reprodutivas, como câncer de próstata e testicular em machos, e piometra e tumores mamários em fêmeas.</p>
                            </li>
                            <li>
                                <p className="service-text"><strong>Controle de comportamento:</strong> O procedimento pode diminuir comportamentos agressivos, marcação territorial e fugas em machos, enquanto em fêmeas, reduz a agitação associada ao ciclo reprodutivo.</p>
                            </li>
                            <li>
                                <p className="service-text"><strong>Prevenção de gestações indesejadas:</strong> Ao eliminar a capacidade reprodutiva, a castração evita gestações indesejadas, reduzindo o número de animais abandonados e contribuindo para o controle populacional.</p>
                            </li>
                            <li>
                                <p className="service-text"><strong>Bem-estar e longevidade:</strong> Animais castrados tendem a viver mais e desfrutar de uma melhor qualidade de vida, com menos riscos de problemas de saúde relacionados à reprodução.</p>
                            </li>
                            <li>
                                <p className="service-text"> <strong>Benefícios para a convivência humana-animal:</strong> A castração promove uma convivência mais harmoniosa entre humanos e animais de estimação, reduzindo comportamentos indesejados e facilitando a interação positiva entre ambos.</p>
                            </li>
                        </ul>
                        <p className="service-text">Esta imagem foi extraída desse <a href="https://www.flaticon.com/br/icones-gratis/clinica-de-cuidado-de-animais-domesticos" className="service-icon-link" title="Ícones de clínica de cuidado de animais domésticos">Link</a></p>
                    </article>
                </div>
                <div className="container-forms">
                    <Forms title="Formulário para Contratação do Serviço"/>
                </div>
            </div>
        </section>
    )
}