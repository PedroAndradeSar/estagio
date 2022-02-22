import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { NodeAPI } from 'services/Services';
import '../Paginas/Carrinho.css'
import { ProdutoDTO } from 'dtos/produtosDTO';
import { AxiosResponse } from 'axios';
import { Button, Divider, TextField, Typography } from '@mui/material';



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

  async function getProduto() {
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
    <>
      <header>
        <nav className='caminho' style={{ border: "1px solid black" }}>
          <Link to="/home">Home &gt; {" "}</Link>
          <Link to="/adicionarpt">Adicionar &gt; {" "}</Link>
          <Link to="/editar">Editar &gt; {" "}</Link>
        </nav>
        <h1>
          Carrinho
        </h1>
      </header>

      <div className='fatherstyle' style={{
        border: "1px solid black"

      }} >

        {/* conteudo a esquedar */}
        <div className='infosleftstyle' style={{ border: "1px solid red" }}>
          {/* parte de cima     */}
          <div className='  '>
            <div className="img">
              <img src={`data:image/jpg;base64,${foto}`} alt="" />


              <div className='infostyle'>
                <span className='classname'>{nome}</span>
                <span className='classcor'>{cor}</span>
                <span className='classmarca'>{marca}</span>
              </div>
            </div>

          </div>
          <Divider className='division'></Divider> {/* usado para fazer a borda */}

          {/* parte de baixo */}
          <div className='infostyledown'>
            Quantidade:
            <Button><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18.5V15.5H23V18.5H9Z" fill="#353535" />
              <circle cx="16" cy="16.5" r="15.5" stroke="#353535" />
            </svg>
            </Button>
            <div><svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.488 27.564V29.5H20.056V27.564H22.264V20.172C22.1467 20.332 21.9387 20.524 21.64 20.748C21.3413 20.9613 21.0107 21.148 20.648 21.308C20.296 21.468 19.976 21.548 19.688 21.548V19.564C19.9653 19.564 20.2533 19.4893 20.552 19.34C20.8507 19.1907 21.128 19.02 21.384 18.828C21.64 18.6253 21.848 18.4493 22.008 18.3C22.1787 18.14 22.264 18.0493 22.264 18.028H24.456V27.564H26.488Z" fill="#353535" />
              <rect x="0.5" y=" " width="45" height="45" rx="6.5" stroke="#353535" />
            </svg>
            </div>
            <Button><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17.5V23.5H15V17.5H9V15.5H15V9.5H17V15.5H23V17.5H17Z" fill="#353535" />
              <circle cx="16" cy="16" r="15.5" stroke="#353535" />
            </svg>
            </Button>
            <div className='totalcash'>

              <span className='cash'>R$:{valor},00</span>
            </div>
          </div>
        </div>

        {/* conteudo a direita */}
        <div className='inforigthstyle' style={{ border: "1px solid green" }}>
          <Typography className='subtotal'>Subtotal  R$:{valor},00</Typography>
          <Divider className='divisionrigth'></Divider>

          <Typography>Frete</Typography>
          <Divider className='divisionrigth'></Divider>

          <Typography>Valor Total</Typography>
          <Divider className='divisionrigth'></Divider>

          <Button>Pagar</Button>

        </div>

      </div>
    </ >
  )
}
