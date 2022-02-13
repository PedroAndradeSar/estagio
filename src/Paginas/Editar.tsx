import React from "react";
import { Link } from "react-router-dom";
import "../Paginas/Editar.css";

const Editar = () => {
  return (
    <div>
      <header>
        <nav className="caminho">
          <Link to="/home">Home &gt; </Link>
          <Link to="/carrinho">Carrinho &gt; </Link>
          <Link to="/adicionarpt">Adicionar &gt; </Link>
        </nav>
        <h1>Editar Produto</h1>
      </header>
      <div>
        <div className="container">
          <fieldset className="fieldset-border">
            <legend className="legend-border">Nome do Produto</legend>
          </fieldset>
          <fieldset className="fieldset-border">
            <legend className="legend-border">Marca</legend>
          </fieldset>

          <div className="formulario_menor">
            <fieldset className="formulario-border">
              <legend className="border">Valor</legend>
            </fieldset>
            <fieldset className="formulario-border">
              <legend className="border">Cor</legend>
            </fieldset>
          </div>
        </div>
      </div>
      <div>
        <footer className="footer">
          <button className="botao">
            {" "}
            <h1>Salvar Produto</h1>{" "}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Editar;
