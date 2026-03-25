import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Conhecimentos from "./paginas/Conhecimentos";
import Inicio from "./paginas/Inicio";
import Projetos from "./paginas/Projetos";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";



function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      
        <Routes>  

          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />}/>
            <Route path="/sobremim" element={<SobreMim />}/>
            <Route path="/conhecimentos" element={<Conhecimentos />}/>
            <Route path="/projetos" element={<Projetos />}/>
          </Route>

          <Route path="/posts/:id/*" element={<Post />}/>
          <Route path="*" element={<NaoEncontrada />}/>

        </Routes>

        <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
