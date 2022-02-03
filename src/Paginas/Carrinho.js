import React from 'react';
import { Link } from 'react-router-dom';

const Carrinho = () => {
    return (
    <div>
        <p>Carrinho</p>
        <h1>Página Inicial</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/adicionarpt">Adicionar</Link>
            </li>
            <li>
              <Link to="/editar">Editar</Link>
            </li>
          </ul>
        </nav>
      </div>
        ) 
 
};

    
  
    

export default Carrinho;

