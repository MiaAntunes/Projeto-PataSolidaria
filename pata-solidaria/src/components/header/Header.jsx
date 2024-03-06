import "./header.css"
import { Link } from 'react-router-dom';
import pataSolidaria from "../../assets/patasSolidarias.png"

export const HeaderPages = () => {
    return (
        <header>
            <div className="logo">
              <img src={pataSolidaria} alt="Logo Patas Solidárias" />
            </div>
            <h1 className="header-title">Adote um Amigo</h1>
            <p className="header-text">Encontre seu novo companheiro aqui.</p>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/trabalhovoluntariado">Trabalho Voluntário</Link></li>
                </ul>
            </nav>
        </header>       
    )
}