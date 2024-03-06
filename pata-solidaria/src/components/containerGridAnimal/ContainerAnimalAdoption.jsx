import "./containerAnimalAdoption.css"
import "../gridAnimal/animalsAdoption.css"



export const ContainerAnimalAdoption = ({animal}) => {

    return (
        <article className="card">
                <img src={animal.imgSrc} alt={animal.alt}/>
                <h3 className="card-title">{animal.title}</h3>
                <p className="card-text">{animal.text}</p>
                <button className="card-button">Adotar</button>
        </article>
    )
}