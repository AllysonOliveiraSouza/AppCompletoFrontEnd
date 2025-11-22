import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AtribuirAdm from "./pages/AtribuirAdm";
import Perfil from "./pages/Perfil";
import Inicio from "./pages/Inicio";
import Cadastro from "./pages/Cadastro";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/atribuir-adm" element={<AtribuirAdm />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
