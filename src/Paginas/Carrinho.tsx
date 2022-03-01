import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { NodeAPI } from 'services/Services';
import '../Paginas/Carrinho.css'
import { ProdutoDTO } from 'dtos/produtosDTO';
import { AxiosResponse } from 'axios';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';



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
  // const [notas, setNotas] = useState<number>();
  const [pagamento, setPegamento] = useState<object>({})
  const [mostrarPagamento, setMostrarPagamento] = useState<boolean>(false);




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


  function finallyPayments() {
    let total = pagartotal(); // Informe o valor aqui
    let cedulas = [100, 50, 20, 10, 5, 2, 1]; // as notas
    const notas = new Object()

    for (let index in cedulas) {
      let quantidadeNotas = Math.floor(total / Number(cedulas[index]));
      total -= quantidadeNotas * cedulas[index]
      notas[cedulas[index]] = quantidadeNotas
    }
    setPegamento(notas)
    console.log(notas)
    setMostrarPagamento(true)
  }




  return (
    <>
      <header>
        <nav className='caminho' >
          <Link to="/home">Home &gt; {" "}</Link>
          <Link to="/carrinho/' + produtoDTO.id_produto">Carrinho &gt; </Link>

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


      <div className='fatherstyle'>

        {/* conteudo a esquedar */}
        <div className='infosleftstyle' style={{ border: "1px solid #B2B2B2", padding: "2vh" }}>
          {/* parte de cima     */}

          <div>
            <div className="img">
              <img src={`data:image/jpg;base64,${foto}`} alt="" />


              <div className='infostyle'>
                <span className='classname'>{nome}</span>
                <span className='classcor'>Cor: {cor}</span>
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
            <div >
              <TextField className='contador' value={cont}>
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

              <span className='cash'>R$:{valor.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* conteudo a direita */}
        <div className='inforigthstyle'>
          <div className='element' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <p>Subtotal</p>
            <p >R$: {somavalor()},00</p>
          </div>
          <div className='divisionrigthone'>
            <Divider></Divider>
          </div>
          <Divider className='divisionrigth'></Divider>
          <div className='element'>
            <p >Frete</p>
            <p>R$: {somavalor() / 10},00</p>
          </div>
          <div className='divisionrigthtwo'>
            <Divider></Divider>
          </div>
          <div className='element'>
            <p>Valor Total</p>
            <p>R$: {pagartotal()},00</p>
          </div>


          <div style={{
            padding: "2vh"
          }} >
            <Button
              style={{
                backgroundColor: "#0F4C81",
                color: "white",
                padding: "1vh"
              }}
              fullWidth
              onClick={() => {
                finallyPayments()
              }}>
              <span>Pagar</span>
            </Button>
          </div>


        </div>


      </div>
      <Grid className='campNotas' visibility={mostrarPagamento == true ? 'visible' : 'hidden'} >
        <Typography className='campoNotas'>
          <h3>
            Pagamento realizado com Sucesso!
          </h3>
          <p>
            Este pagamento foi realizado com:
          </p>
        </Typography>
        <Typography className='campgreen'>
          {mostrarPagamento && Object.entries(pagamento).map(it => { if (it[1] > 0) return <p>{`Usado ${it[1]} notas de ${it[0]},00`}</p> })}
        </Typography>

      </Grid>
    </ >
  )
}
