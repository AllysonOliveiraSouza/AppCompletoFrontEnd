import { createContext, useState, useEffect, useContext } from "react";
import { TOKEN_KEY } from "../services/authService";
import type { Usuario } from "../models/Usuario";
import { requestsApi } from "../static/requestsApi";

const AuthContext: any = createContext(null);
const baseUrl = "https://localhost:7206";

export const AuthProvider = ({ children }: any) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  // Verifica se há token no localStorage quando a aplicação carrega
  useEffect(() => {
    load();
  }, []);

  // Carregamento

  const load = async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      await getUser(token);
    }
    setLoading(false);
  };

  // Função de login
  const login = async (email: string, password: string) => {
    const body = { email: email, senha: password };
    const request = await requestsApi.Post(
      `${baseUrl}/api/Usuario/Login`,
      body
    );

    if (request.ok) {
      const token = await request.text();
      localStorage.setItem(TOKEN_KEY, token);
      await getUser(token);
    } else alert(await request.text());
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setUsuario(null);
  };

  // Função para obter o usuário

  async function getUser(token: string) {
    let request = await requestsApi.Get(
      `${baseUrl}/api/Usuario/Autenticado`,
      token
    );

    request = await request.json();
    setUsuario({
      id: request.id,
      email: request.email,
      nome: request.nome,
      sexo: request.sexo,
      tipoUsuarioId: request.tipoUsuarioId,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: usuario != null,
        usuario,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acessar facilmente o contexto
export const useAuth = () => useContext(AuthContext);
