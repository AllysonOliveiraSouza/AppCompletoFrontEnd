import { useState } from "react";
import { requestsApi } from "../static/requestsApi";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const api = requestsApi;

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    sexo: "",
    senha: "",
  });

  async function handleCadastrar() {
    let request = await api.Post("https://localhost:7206/api/Usuario", usuario);
    const jsonR1 = await request.json();

    if ((await request.status) === 400) {
      const erros = [
        jsonR1.errors.Email,
        jsonR1.errors.Senha,
        jsonR1.errors.Sexo,
        jsonR1.errors.Nome,
      ];

      const e = erros.filter((item) => item != undefined);

      e.forEach((erro: any) => {
        alert(erro);
      });

      return;
    }

    alert("Usuário cadastrado com sucesso !");
    navigate("/");
  }

  return (
    <>
      <form
        action=""
        className="bg-amber-400 p-3 flex-colr gap-2 w-[400px] rounded-2xl m-auto"
      >
        <div>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setUsuario({ ...usuario, nome: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">E-mail:</label>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setUsuario({ ...usuario, email: e.target.value });
            }}
          />
        </div>
        <div className="flex gap-2">
          <span>Sexo:</span>
          <label htmlFor="">Masculino</label>
          <input
            type="radio"
            name="sexo"
            id=""
            value={"M"}
            onChange={(e) => {
              setUsuario({ ...usuario, sexo: e.target.value });
            }}
          />
          <label htmlFor="">Feminino</label>
          <input
            type="radio"
            name="sexo"
            id=""
            value={"F"}
            onChange={(e) => {
              setUsuario({ ...usuario, sexo: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="">Senha:</label>
          <input
            type="password"
            name=""
            id=""
            onChange={(e) => {
              setUsuario({ ...usuario, senha: e.target.value });
            }}
          />
        </div>
        <button type="button" onClick={handleCadastrar}>
          Cadastrar
        </button>
        <button
          type="button"
          style={{ backgroundColor: "red", color: "white" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Cancelar
        </button>
      </form>
    </>
  );
}
