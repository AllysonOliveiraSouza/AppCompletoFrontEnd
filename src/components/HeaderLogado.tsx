import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function HeaderLogado() {
  const { logout }: any = useAuth();

  return (
    <>
      <header className="bg-amber-500">
        <nav>
          <ul className="list-none flex items-center justify-between p-3">
            <li>
              <Link to={"/inicio"}>Início</Link>
            </li>
            <li>
              <Link to={"/perfil"}>Perfil</Link>
            </li>
            <li>
              <button onClick={() => logout()}>Sair</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
