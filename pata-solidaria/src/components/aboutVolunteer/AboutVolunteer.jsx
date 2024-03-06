import volunteer from "../../assets/volunteer.jpg"
import "./aboutVolunteer.css"


export const AboutVolunteer = () =>{
    return(
        <section className="about-volunteer">
            <article className="about-volunteer-container">
                <h2 className="about-volunteer-title">Seja um Herói Voluntário: A Força do Amor em Ação</h2>
                <p className="about-volunteer-text">Ser voluntário é abraçar uma causa com o coração aberto e estender a mão para ajudar aqueles que mais precisam. É dedicar seu tempo, habilidades e compaixão para fazer a diferença na vida dos outros, sem esperar nada em troca além do sorriso de gratidão de quem foi beneficiado.</p>
                <p className="about-volunteer-text">Ao se tornar um voluntário, você se torna parte de uma rede de solidariedade que é a essência de uma comunidade unida. É ser a voz dos que não têm voz, o apoio dos que estão frágeis e o conforto dos que estão desamparados. É transformar o mundo ao seu redor com pequenos gestos de bondade e empatia.</p>
                <p className="about-volunteer-text">Você tem a oportunidade de se inscrever para ser voluntário em diversas campanhas, resgates e cuidados temporários. Desde ajudar em campanhas de arrecadação de alimentos para famílias carentes, até participar de resgates de animais em situações de perigo, e oferecer cuidado temporário para pessoas em situação de rua.</p>
                <p className="about-volunteer-text">Ao se inscrever para ser voluntário, você se torna um agente de mudança positiva na sociedade. Sua contribuição, por menor que pareça, faz uma grande diferença na vida daqueles que são beneficiados por sua generosidade. Juntos, podemos construir um mundo mais justo, solidário e amoroso para todos. Então, o que você está esperando? Junte-se a nós e seja a luz que ilumina o caminho da esperança para aqueles que precisam!</p>
            </article>
            <div className="image-container">
                <img src={volunteer} alt="Foto de ajuda aos animais"/>
            </div>
        </section>
    )
}