import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../Paginas/Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <nav className="caminho">
          <Link to="/carrinho">Carrinho &gt; </Link>
          <Link to="/adicionarpt">Adicionar &gt; </Link>
          <Link to="/editar">Editar &gt; </Link>
        </nav>
        <h1>Página Inicial</h1>
        <div className="botton">
            <Button 
            variant={'contained'}
            onClick={ () => <Link to="/adicionarpt">Adicionar &gt; </Link> }
            >
              <h3>
                Adicionar Produto
              </h3>
            </Button>
          </div>
      </header>
      {/* <Button className="adicionar" variant="outlined" startIcon={<AddCircleIcon />}onClick={()=>{window.location.replace('/adicionarproduto')}}>
            Adicionar Produto
            </Button> */}

      <div></div>

      <div className="container">
        <fieldset className="fieldset-border">
          <legend className="legend-border">Teste</legend>
        </fieldset>
      </div>
      
    </div>
  );
};




export default Home;
