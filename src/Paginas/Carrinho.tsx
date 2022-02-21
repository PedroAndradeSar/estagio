import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { NodeAPI } from 'services/Services';
import '../Paginas/Carrinho.css'
import { ProdutoDTO } from 'dtos/produtosDTO';
import { AxiosResponse } from 'axios';
import { TextField } from '@mui/material';



async function getProduto(id_produto) {


  try {
    const putResponse: AxiosResponse = await NodeAPI.get(
      `${process.env.REACT_APP_API_URL}/produto/${id_produto}`
    );

    console.log(putResponse);
  } catch (error) {

    console.log(error);
  }
}

type ProdutoProps = {
  produtoDTO: ProdutoDTO;
}

export function Carrinho() {

  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<number>(0);
  const [foto, setFoto] = useState<string>('');
  const [marca, setMarca] = useState<string>('');
  const [cor, setCor] = useState<string>('');
  const { id_produto } = useParams();

  async function editarProduto() {
    const produtoDTO = new ProdutoDTO(
      nome,
      valor,
      foto,
      cor,
      marca,
      Number(id_produto))
  }




  useEffect(() => {
    const getProduto = async () => {

      try {
        const getResponse = await NodeAPI.get(
          `${process.env.REACT_APP_API_URL}/produto/${id_produto}`
        );
        console.log(getResponse)
        setNome(getResponse.data.nome);
        setValor(getResponse.data.valor);
        setCor(getResponse.data.cor);
        setFoto(getResponse.data.foto);
        setMarca(getResponse.data.marca);

      } catch (error) {

      }
    }
    getProduto()
  }, [])





  return (
    <div>
      <header>
        <nav className='caminho'>
          <Link to="/home">Home &gt; {" "}</Link>
          <Link to="/adicionarpt">Adicionar &gt; {" "}</Link>
          <Link to="/editar">Editar &gt; {" "}</Link>
        </nav>
        <h1>
          Carrinho
        </h1>
      </header>
      <div className='alincontainer'>
        <div>
          <div className='dadospedido'>
            <div><span>{nome}</span></div>
            <div><span>{cor}</span></div>
            <div> <span>{marca}</span></div>
            <div><span>{valor}</span></div>
            <div className='imgproduto'>
              <div className="img">
                <img src={`data:image/jpg;base64,${foto}`} alt="" />
              </div>
              <div className='alincontainer'>
                <div>
                  <div className='pedidofinalized'>
                    <div><span>{nome}</span></div>
                    <div><span>{cor}</span></div>
                    <div> <span>{marca}</span></div>
                    <div><span>{valor}</span></div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
