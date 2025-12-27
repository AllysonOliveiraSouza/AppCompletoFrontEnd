// src/routes/PrivateRoute.jsx

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes = () => {
  const { isAuthenticated, loading }: any = useAuth();

  if (loading) {
    // Podemos retornar um spinner ou texto de carregando enquanto verifica o auth
    return <div>Carregando…</div>;
  }

  // Se estiver autenticado, renderiza o componente filho (Outlet);
  // Caso contrário, redireciona para login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
