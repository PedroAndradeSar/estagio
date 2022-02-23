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
  const [cont, setCont] = useState<number>(1);



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

  let total = 0;
  function somavalor() {
    return (total = valor * cont)
  }

  function pagartotal() {
    return ((somavalor() / 10) + somavalor())
  }

  return (
    <>
      <header>
        <nav className='caminho' style={{ border: "1px solid black" }}>
          <Link to="/home">Home &gt; {" "}</Link>
          <Link to="/adicionarpt">Adicionar &gt; {" "}</Link>
          <Link to="/editar">Editar &gt; {" "}</Link>
        </nav>
        <div className='names'>
          <h1>
            <span>Carrinho</span>
          </h1>
          <h1>
            <span>Resumo do Pedido</span>
          </h1>
        </div>

      </header>


      <div className='fatherstyle' style={{
        border: "1px solid black"
      }} >

        {/* conteudo a esquedar */}
        <div className='infosleftstyle' style={{ border: "1px solid red" }}>
          {/* parte de cima     */}

          <div>
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
            <span>Quantidade:</span>
            <Button onClick={() => {
              if (cont > 1)
                setCont(cont - 1)
            }}><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18.5V15.5H23V18.5H9Z" fill="#353535" />
                <circle cx="16" cy="16.5" r="15.5" stroke="#353535" />
              </svg>
            </Button>
            <div style={{ border: "1px solid red" }}>
              <TextField value={cont}>
              </TextField>
            </div>
            <Button onClick={() => {
              setCont(cont + 1)
              console.log(setCont)
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 17.5V23.5H15V17.5H9V15.5H15V9.5H17V15.5H23V17.5H17Z" fill="#353535" />
                <circle cx="16" cy="16" r="15.5" stroke="#353535" />
              </svg>
            </Button>
            <div className='totalcash'>

              <span className='cash'>R$: {valor},00</span>
            </div>
          </div>
        </div>

        {/* conteudo a direita */}
        <div className='inforigthstyle' style={{ border: "1px solid green" }}>
          <div className='element' style={{ border: "1px solid red", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Typography>Subtotal</Typography>
            <Typography >R$: {somavalor()},00</Typography>
          </div>
          <div className='divisionrigthone'>
            <Divider></Divider>
          </div>
          <Divider className='divisionrigth'></Divider>
          <div className='element'>
            <Typography >Frete</Typography>
            <Typography>R$: {somavalor() / 10},00</Typography>
          </div>
          <div className='divisionrigthtwo'>
            <Divider></Divider>
          </div>
          <div className='element'>
            <Typography>Valor Total</Typography>
            <Typography>R$: {pagartotal()},00</Typography>
          </div>


          <div className='pagamento'>
            <Button onClick={() => {

            }}>
              <span>Pagar</span>
            </Button>
          </div>


        </div>

      </div>
    </ >
  )
}
