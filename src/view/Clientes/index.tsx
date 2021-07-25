import React from 'react';
import { Link } from 'react-router-dom';

function Clientes() {
    return (
        <div id="content">
            <h1>Cadastro de cliente</h1>
                <form id="form">
             <label>
                 Nome: 
                 <input type="text" placeholder="nome" id="nome"/>
             </label>
             <label>
                 E-mail: 
                 <input type="text" placeholder="E-mail" id="email"/>
             </label>
             <label>
                 Endereço: 
                 <input type="text" placeholder="Endereço" id="endereço"/>
             </label>
             <label>
                 Telefone: 
                 <input type="text" placeholder="Telefone" id="telefone"/>
             </label>
             <input type="submit" value="Enviar" />
         </form>
         <div>
             <a href="http://localhost:3000">Voltar para produtos</a>
             </div>
         </div>
         )
         }
     

export default Clientes