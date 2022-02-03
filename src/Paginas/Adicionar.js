import React from 'react';
import { Link } from 'react-router-dom';
import '../Paginas/Adicionar.css'

const Adicionarpt   = () => {
    return (
    <div>
      <div>
        <header>
          <h1>Adicionar Produto</h1>
        </header>
      </div>
        
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
            <li>
              <Link to="/editar">Editar</Link>
            </li>
          </ul>
        </nav>

        <div class="container">
          <fieldset class="fieldset-border">
            <legend class="legend-border">Nome do Produto</legend>
          </fieldset>
          <fieldset class="fieldset-border">
            <legend class="legend-border">Marca</legend>
          </fieldset>
          <fieldset class="fieldset-border">
            <legend class="legend-border">Valor</legend>
          </fieldset>
          <fieldset class="fieldset-border">
            <legend class="legend-border">Cor</legend>
          </fieldset>

        falta data de cadastro

        </div>

        <div className='botao'>
          <button> Adicionar Produto </button>
        </div>



      </div>
        ) 
 
};

export default Adicionarpt;