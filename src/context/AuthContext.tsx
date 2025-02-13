import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextProps {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider ({ children }: {children: ReactNode}) {
    const [token, setToken] = useState<string | null>(null);

    async function login(token: string) {
        setToken(token);
        localStorage.setItem("token", token);
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