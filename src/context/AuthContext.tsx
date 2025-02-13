import { createContext, ReactNode, useContext, useState } from "react";
import { login as loginService } from "../services/authService";

interface AuthContextProps {
    token: string | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider ({ children }: {children: ReactNode}) {
    const [token, setToken] = useState<string | null>(null);

    async function login(email: string, password: string) {
        try {
            const token = await loginService(email, password);
            setToken(token);
            localStorage.setItem("token", token);
          } catch (error) {
            console.error(error);
          }
    };

    function logout() {
        setToken(null);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };