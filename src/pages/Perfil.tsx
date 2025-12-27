import { useNavigate } from "react-router-dom";
import HeaderLogado from "../components/HeaderLogado";
import { useAuth } from "../contexts/AuthContext";

export default function Perfil() {
  const { usuario }: any = useAuth();
  const navigate = useNavigate();
  const btnAtribuirAdm = () => {
    if (usuario.tipoUsuarioId === 1)
      return (
        <button className="block" onClick={pageAtribuirAdm}>
          Atribuir Adms
        </button>
      );
  };

  function pageAtribuirAdm() {
    navigate("/atribuir-adm");
    alert("Clicou");
  }

  return (
    <>
      <HeaderLogado />
      Você está em Perfil
      {btnAtribuirAdm()}
    </>
  );
}
