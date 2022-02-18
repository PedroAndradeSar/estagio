import { Button, Grid, IconButton } from "@mui/material";
import { ProdutoDTO } from "dtos/produtosDTO";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NodeAPI } from "services/Services";
import "../Paginas/Home.css";
import Produto from "./Produto"



const Home = () => {
  const [produtos, setProdutos] = useState<Array<ProdutoDTO>>([])
  useEffect(() => {
    const getProdutos = async () => {
      try {
        const resposta = await NodeAPI.get(`${process.env.REACT_APP_API_URL}/produto`)
        console.log(resposta.data)
        setProdutos(resposta.data)
      } catch (erro) {
        console.log(erro);
      }
    }
    getProdutos();
  }, []);




  return (
    <div>
      <Grid style={{ border: "1px solid red" }}>
        <nav className="caminho">
          <Link to="/carrinho">Carrinho &gt; </Link>
          <Link to="/adicionarpt">Adicionar &gt; </Link>
          <Link to="/editar">Editar &gt; </Link>
        </nav>
        <h1>Página Inicial</h1>
        <div className="botton">
          <Button
            variant={'contained'}
            onClick={() => <Link to="/adicionarpt">Adicionar &gt; </Link>}>
            <h3>
              Adicionar Produto
            </h3>
          </Button>

        </div>
      </Grid>

      <Grid>
        {produtos.map((it, index) => <Produto key={index} produtoDTO={it} />)}
      </Grid>

      <div>
      </div>
    </div>
  );
};


{/* <Grid>
        {produtos.map(produto => {
          <Produto key={produto} produtoDTO={it}/> })}

      </Grid> */}



{/* <Button className="adicionar" variant="outlined" startIcon={<AddCircleIcon />}onClick={()=>{window.location.replace('/adicionarproduto')}}>
            Adicionar Produto
            </Button> */}


export default Home;
