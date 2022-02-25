import { Button, Grid } from "@mui/material";
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
      <Grid >
        <div className="topo">
          <h1 className="pginicial" >Produtos</h1>
          <div className="botton">
            <Button

              variant={'contained'}
              onClick={() => { window.location.replace('/adicionarpt') }}>

              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0016 32C7.16818 31.9903 0.00970076 24.8325 0 16V15.68C0.175908 6.88727 7.41608 -0.115241 16.2107 0.00143715C25.0053 0.118115 32.0571 7.31024 31.9997 16.1046C31.9422 24.8989 24.797 31.9982 16.0016 32ZM8.0008 14.4V17.6H14.4014V24H17.6018V17.6H24.0024V14.4H17.6018V8.00002H14.4014V14.4H8.0008Z" fill="white" />
              </svg>
              <h3>
                <span> Adicionar Produto</span>
              </h3>
            </Button>

          </div>
        </div>


      </Grid>

      <Grid>
        <div className="lista">

          {produtos.map((it, index) => <Produto key={index} produtoDTO={it} />)}
        </div>

      </Grid>

      <div>
      </div>
    </div>
  );
};



export default Home;
