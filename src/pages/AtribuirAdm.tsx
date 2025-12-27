import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderLogado from "../components/HeaderLogado";
import { requestsApi } from "../static/requestsApi";
import { getToken } from "../services/authService";
import type { Usuario } from "../models/Usuario";

export default function AtribuirAdm() {
  const { usuario }: any = useAuth();
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const token: string | null = getToken();

  useEffect(() => {
    load();
  }, []);

  async function load() {
    if (usuario.tipoUsuarioId != 1) {
      navigate("/inicio");
    } else {
      await listarUsuarios();
    }
  }

  async function listarUsuarios() {
    let request = await requestsApi.Get(
      "https://localhost:7206/api/Usuario",
      token
    );

    request = await request.json();
    setUsuarios(request);
  }

  function getCorBtn(tipoUsuarioId: number) {
    return tipoUsuarioId === 1 ? "#ad9600" : "#065c0e";
  }

  async function atribuirAdm(id: number) {
    if (id === 1) return;

    let request = await requestsApi.Patch(
      "https://localhost:7206/api/Usuario/AtribuirAdm/" + id,
      token
    );

    const json = await request.json();
    alert(json.mensagem);

    if (await request.ok) {
      alert(json.mensagem);
      await load();
    }
  }

  return (
    <>
      {usuario.tipoUsuarioId === 1 ? (
        <>
          <HeaderLogado />
          <table className="custom-table" style={{ width: "100%" }}>
            <tr className="bg-blue-500">
              <th>Id</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Sexo</th>
              <th></th>
            </tr>
            <tbody>
              {usuarios.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.sexo === "M" ? "Masculino" : "Feminino"}</td>
                  <td>
                    <button
                      style={{
                        backgroundColor: getCorBtn(item.tipoUsuarioId),
                        color: "white",
                      }}
                      onClick={() => atribuirAdm(item.id)}
                    >
                      {item.tipoUsuarioId === 1
                        ? "Já é administrador"
                        : "Atribuir Adm"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <Navigate to={"/inicio"} />
      )}
    </>
  );
}
