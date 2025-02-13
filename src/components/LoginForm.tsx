import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function onLoginClick(email: string, password: string) {
        await login(email, password);
        navigate("/tasks");
    }

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="E-mail"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            
            <input
                type="password"
                placeholder="Senha"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            
            <button 
                onClick={() => {
                    onLoginClick(email, password);
                }}
                className="bg-slate-500 text-white p-2 px-4 py-2 rounded-md">
                Entrar
            </button>

            <p className="text-slate-700 text-center">Não tem conta? <a className="text-slate-500 underline" href="/register">Cadastre-se</a></p>
        </div>
    )
}