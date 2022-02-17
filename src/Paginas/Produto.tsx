import { ProdutoDTO } from 'dtos/produtosDTO';
import React from 'react';
// import './produto.css';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


type ProdutoProps = {
    produtoDTO: ProdutoDTO;
}

export default function Produto(props: ProdutoProps) {
    const { produtoDTO } = props
    return (
        <>
            <section className='containerproduto'>
                <div className="img">
                    <img src={`data:image/jpg;base64,${produtoDTO.foto}`} alt="" />
                </div>
                <div className="details">
                    <h2 className='camera'>{produtoDTO.nome}</h2>
                    <p className='marca'>{produtoDTO.marca}</p>
                    <p className='valor'>R${produtoDTO.valor},00</p>
                    <p className='cor'>{produtoDTO.cor}</p>

                </div>
                <div className="actions"><Button variant="outlined" onClick={() => { window.location.replace('/editar/' + produtoDTO.nome) }}>
                    Editar Produto
                </Button>
                    <IconButton aria-label="delete"></IconButton>
                    <Button variant="outlined" onClick={() => { window.location.replace('/delete') }}><DeleteIcon />
                    </Button>

                    <IconButton aria-label="delete"></IconButton>
                    <Button variant="outlined" onClick={() => { window.location.replace('/carrinho') }}><AddShoppingCartIcon />
                    </Button>

                </div>


            </section>
        </>
    )
}