import fotoNoticiais from "../../assets/noticiais-animais.png"
import './aboutwe.css';


export const AboutWe = () =>{
    return(
        <section className="about-section">
            <article className="text-container">
                <h2>Sobre Nós</h2>
                <p className="about-text">Somos uma organização dedicada ao resgate e adoção de animais. Nosso objetivo é encontrar lares amorosos para animais abandonados e maltratados.</p>
            </article>
            <div className="image-container">
                <img src={fotoNoticiais} alt="Noticias de abandono de animais"/>
            </div>
        </section>
    )
}