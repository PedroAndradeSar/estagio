import React from 'react';
import { Link } from 'react-router-dom';
import '../Paginas/Adicionar.css'

const Adicionarpt   = () => {
    return (
    <div>
      <div>
        <header>        
          <nav className='caminho'>       
              <Link to="/home">Home &gt;{" "} </Link>
              <Link to="/carrinho">Carrinho &gt;{" "} </Link>
              <Link to="/editar">Editar &gt;{" "}</Link>
          </nav>
          <h1>Adicionar Produto</h1>
        </header>
      </div>
        


        <div class="container">
          <fieldset class="fieldset-border">
            <legend class="legend-border">Nome do Produto</legend>
          </fieldset>
          <fieldset class="fieldset-border">
            <legend class="legend-border">Marca</legend>
          </fieldset>
          <div className="container-menor">
            <fieldset class="fieldset-border">
            <legend class="legend-border">Valor</legend>
          </fieldset>
          <fieldset class="fieldset-border">
            <legend class="legend-border">Cor</legend>
          </fieldset>
          </div>


        falta data de cadastro

        </div>

        <div className='botao'>
          <button> Adicionar Produto </button>
        </div>



      </div>
        ) 
 
};

export default Adicionarpt;