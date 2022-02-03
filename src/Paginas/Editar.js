import React from 'react';
import { Link } from 'react-router-dom';


const Editar = () => {
    return (
    <div>
        <p>Editar</p>
        <h1>Editar Produto</h1>
        <nav className='link'>
          <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/carrinho">Carrinho</Link>
            </li>
            <li>
                <Link to="/adicionarpt">Adicionar</Link>
            </li>
          </ul>
        </nav>
      </div>
        ) 
 
};

    
  
    

export default Editar;

    
