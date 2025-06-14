// Codigo fonte das rotas de navegação do site!

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import Error404 from "./Errors/Error404";
import ScrollToHash from "./Components/ScrollToHash/ScrollToHash";
import TestPage from "./Pages/Test";
import UserPage from "./Pages/UserPages/UserHome";
import UserHistoricoPage from "./Pages/UserPages/UserHistorico";
import UserEditarPage from "./Pages/UserPages/UserEditar";
import SobrenosPage from "./Pages/Sobrenos";
import ConfirmarPedidoPage from "./Pages/ConfirmarPedidoPage";
import ContentPages from "./Pages/ContentPages";
import DedicationFormPage from "./Pages/DedicationForm";
import VideoMakerPage from "./Pages/VideoMakerPage";

export default function AppRoutes() {
  return (
    <>
      {/* Configurações de rotas */}
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          {/* Users routes */}
          <Route path="*" element={<Error404 />}></Route>  {/* ROTA DA ERROR 404 */}
          <Route path="/" element={<HomePage />}></Route>   {/* ROTA DA HOME */}
          <Route path="/test" element={<TestPage />}></Route> {/* ROTA DA PAGE TESTE */}
          <Route path="/user" element={<UserPage />}></Route> {/* ROTA DA PAGE USUARIO*/}
          <Route path="/user-historico" element={<UserHistoricoPage />}></Route> {/* ROTA DA PAGE HISTORICO USUARIO */}
          <Route path="/user-editar" element={<UserEditarPage />}></Route> {/* ROTA DA PAGE EDITAR USUARIO */}
          <Route path="/sobrenos" element={<SobrenosPage />}></Route> {/* ROTA DA PAGE SOBRE NOS */}
          <Route path="/login" element={<LoginPage />}></Route> {/* ROTA DA PAGE LOGIN */}
          <Route path="/registra-se" element={<RegisterPage />}></Route> {/* ROTA DA PAGE DE REGISTRO */}
          <Route path="/confirmar-pedido" element={<ConfirmarPedidoPage />}></Route> {/* ROTA DA PAGE CONFIRMAR PEDIDO */}
          <Route path="/musics-grid" element={<ContentPages />}></Route> {/* ROTA DA PAGE GRID DE MUSICAS */}
          <Route path="/form-detication" element={<DedicationFormPage />}></Route> {/* ROTA DA PAGE DE DEDICAR MUSICA */}
          <Route path="/video-maker" element={<VideoMakerPage />}></Route> {/* ROTA DA PAGE DE CRIAR VIDEO */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
