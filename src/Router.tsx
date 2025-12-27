import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AtribuirAdm from "./pages/AtribuirAdm";
import Perfil from "./pages/Perfil";
import Inicio from "./pages/Inicio";
import Cadastro from "./pages/Cadastro";
import PrivateRoutes from "./routes/PrivateRoutes";
import { AuthProvider } from "./contexts/AuthContext";

export default function Router() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<div>Página não encontrada!</div>} />
          <Route element={<PrivateRoutes />}>
            {/* Qualquer rota declarada aqui dentro só será acessível se o usuário estiver autenticado */}
            <Route path="/atribuir-adm" element={<AtribuirAdm />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/inicio" element={<Inicio />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
