import HeaderLogado from "../components/HeaderLogado";
import { useAuth } from "../contexts/AuthContext";
import { date } from "../static/date";

export default function Inicio() {
  const { usuario }: any = useAuth();

  function getSaudacao() {
    const hora = date.getHours();
    if (hora >= 12 && hora < 18) return "Boa tarde";
    else if (hora >= 18) return "Boa noite";
    return "Bom dia";
  }

  function getSrOuSra() {
    return usuario.sexo === "M" ? "Sr " : "Srª ";
  }

  return (
    <>
      <HeaderLogado />
      {getSaudacao()} {getSrOuSra()} {usuario.nome}
    </>
  );
}
