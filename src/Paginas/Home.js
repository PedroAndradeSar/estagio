import React from 'react';
import { Link } from 'react-router-dom';
import '../Paginas/Home.css';



const Home = () =>{
  return (
   <div>
      <h1>Página Inicial</h1>
      <nav className='navegacao'>
        <ul>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>
          <li>
            <Link to="/adicionarpt">Adicionar</Link>
          </li>
          <li> 
            <Link to="/editar">Editar</Link>
          </li>
        </ul>
      </nav>
      <div>
     
      </div>

      <div class="container">
        <fieldset class="fieldset-border">
          <legend class="legend-border">Teste</legend>
        </fieldset>
      </div>

    </div> 
  );
}

export default Home;
