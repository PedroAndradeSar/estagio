import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Carrinho } from "../Paginas/Carrinho";
import { Editar } from "../Paginas/Editar";
import { Adicionarpt } from "../Paginas/Adicionar";


import Home from "../Paginas/Home";
//import Carrinho from "./Paginas/Carrinho";
//import Adicionar from "./Paginas/Adicionar";
//import Editar from "./Paginas/Editar";

const Rota = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/carrinho/:id_produto" element={<Carrinho />} />
                <Route path="/editar/:id_produto" element={<Editar />} />
                <Route path="/adicionarpt" element={<Adicionarpt />} />

                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rota;