import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Login() {
  interface Login {
    email: string;
    senha: string;
  }
  const { isAuthenticated, login }: any = useAuth();
  const [logJson, setLogJson] = useState<Login>({ email: "", senha: "" });

  async function handleEntrar() {
    if (logJson.email.trim() === "" || logJson.senha.trim() === "") {
      alert("Preencha os campos !");
      return;
    }
    await login(logJson.email, logJson.senha);
  }

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/inicio"}></Navigate>
      ) : (
        <form className="bg-amber-400 flex flex-col gap-2 w-[400px] m-auto mt-3 p-3 rounded-2xl">
          <div className="flex justify-center gap-3">
            <label htmlFor="">E-mail:</label>
            <input
              type="email"
              onChange={(e) =>
                setLogJson({ ...logJson, email: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center gap-3">
            <label htmlFor="">Senha:</label>
            <input
              type="password"
              onChange={(e) =>
                setLogJson({ ...logJson, senha: e.target.value })
              }
            />
          </div>
          <div className="flex gap-1 justify-center">
            <Link to={"/inicio"}>
              <button
                type="button"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={handleEntrar}
              >
                Entrar
              </button>
            </Link>

            <Link to={"/cadastro"}>
              <button type="button">Cadastrar-se</button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              to={"#"}
              className="text-blue-700"
              style={{ textDecoration: "underline" }}
            >
              Esqueceu a senha? Clique aqui
            </Link>
          </div>
        </form>
      )}
    </>
  );
}
