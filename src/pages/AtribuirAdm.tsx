import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderLogado from "../components/HeaderLogado";

export default function AtribuirAdm() {
  const { usuario }: any = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario.tipoUsuarioId != 1) {
      navigate("/inicio");
    }
  }, []);

  return (
    <>
      {usuario.tipoUsuarioId === 1 ? (
        <>
          <HeaderLogado /> <div>Atribua os adms aí</div>
        </>
      ) : (
        <Navigate to={"/inicio"} />
      )}
    </>
  );
}
