
import logo from './componentes/icones/logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Rota from "./routes/routes";
import { NodeAPI } from 'services/Services';
import { AxiosResponse } from 'axios';
import { ProdutoDTO } from 'dtos/produtosDTO';
import Adicionarpt from 'Paginas/Adicionar';


function App() {
  const [message, setMessage] = useState<string>('')


  async function getProdutos() {
    try {
      const produtos: AxiosResponse<ProdutoDTO> = await NodeAPI.get(`${process.env.REACT_APP_API_URL}`);
      console.log(produtos.data.nome);
      setMessage(produtos.data.nome);

    } catch (erro) {
      console.log(erro)
      setMessage('Erro na chamada da API')
    }



  }

  useEffect(() => {
    console.log('rendenizei meu componente')
    getProdutos()

  }, []);



  return (
    <>{message}</>,
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>



      <div>
        
        <Rota />
      </div>
    </div>
  );
}

export default App;
