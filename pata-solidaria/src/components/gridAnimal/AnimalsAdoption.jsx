import { ContainerAnimalAdoption } from "../containerGridAnimal/ContainerAnimalAdoption"
import "./animalsAdoption.css"
import listAnimal from "../../listAnimal/listAnimal"


export const AnimalsAdoption = () =>{

    return(
        <section className="animals">
            <div className="container-animals">
                <h2 className="animals-title">Animais para Adoção</h2>
                <div className="container-article">
                {
                    listAnimal.map((animal,index)=>
                      <ContainerAnimalAdoption key={index} animal={animal} />
                    )
                }
                </div>
            </div>
        </section>
    )
}