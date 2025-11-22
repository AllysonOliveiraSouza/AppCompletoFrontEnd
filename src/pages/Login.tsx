import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <form className="bg-amber-400 flex flex-col gap-2 w-[400px] m-auto mt-3 p-3 rounded-2xl">
        <div className="flex justify-center gap-3">
          <label htmlFor="">E-mail:</label>
          <input type="email" name="" id="" />
        </div>
        <div className="flex justify-center gap-3">
          <label htmlFor="">Senha:</label>
          <input type="password" name="" id="" />
        </div>
        <div className="flex gap-1 justify-center">
          <Link to={"/inicio"}>
            <button
              type="button"
              style={{ backgroundColor: "black", color: "white" }}
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
    </>
  );
}
