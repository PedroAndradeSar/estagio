import { ProdutoDTO } from 'dtos/produtosDTO';
import React from 'react';

import { Button, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AxiosResponse } from 'axios';
import { NodeAPI } from 'services/Services';


async function deleteProduto(id_produto) {


    try {
        const putResponse: AxiosResponse = await NodeAPI.delete(
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

export default function Produto(props: ProdutoProps) {
    const { produtoDTO } = props


    return (
        <>
            <Grid style={{ margin: "10px solid red" }}>

                <section className='containerproduto'>
                    <div className="img">
                        <img src={`data:image/jpg;base64,${produtoDTO.foto}`} alt="" />
                    </div>
                    <div className="campos">
                        <h2 className='camera'>{produtoDTO.nome}</h2>
                        <p className='marca'>{produtoDTO.marca}</p>
                        <p className='valor'>R${produtoDTO.valor},00</p>
                        <p className='cor'>{produtoDTO.cor}</p>

                    </div>
                    <div className="actions"><Button variant="outlined" onClick={() => { window.location.replace('/editar/' + produtoDTO.id_produto) }}>
                        Editar Produto
                    </Button>
                        {/* <IconButton aria-label="delete"></IconButton>
                        <Button variant="outlined" onClick={() => deleteProduto(produtos.id) }><DeleteIcon />
                        </Button> */}

                        <IconButton aria-label="delete"></IconButton>
                        <Button variant="outlined" onClick={() => { window.location.replace('/carrinho') }}><AddShoppingCartIcon />
                        </Button>

                    </div>
                    <div className="actions"><Button variant="outlined" onClick={() => {
                        deleteProduto(produtoDTO.id_produto)
                    }}>
                        deletar
                    </Button>
                    </div>


                </section>
            </Grid>
        </>
    )
}



