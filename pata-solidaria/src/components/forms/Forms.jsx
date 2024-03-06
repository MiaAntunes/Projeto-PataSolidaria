import { useState } from "react";
import "./forms.css"


export const Forms = ({title}) =>{
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [castracao, setCastracao] = useState(false);
    const [microchipagem, setMicrochipagem] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aqui você pode processar os dados do formulário conforme necessário
      console.log({
        nomeCompleto,
        email,
        whatsapp,
        castracao,
        microchipagem
      });
    };
  
    return (
      <article className="formulario-container">
        <h2 className="formulario-title">{title}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome_completo">Nome Completo:</label>
          <input 
            type="text" 
            id="nome_completo" 
            value={nomeCompleto} 
            onChange={(e) => setNomeCompleto(e.target.value)} 
            placeholder="Digite seu nome completo" 
            required 
          />
  
          <label htmlFor="email">E-mail:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Digite seu e-mail" 
            required 
          />
  
          <label htmlFor="whatsapp">WhatsApp:</label>
          <input 
            type="text" 
            id="whatsapp" 
            value={whatsapp} 
            onChange={(e) => setWhatsapp(e.target.value)} 
            placeholder="Digite seu número de WhatsApp" 
          />

          <input type="submit" value="Enviar" />
        </form>
      </article>
    );
  }