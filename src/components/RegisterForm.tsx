import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services/userService";

export function RegisterForm() {
    const { login } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    async function onRegisterClick(email: string, password: string) {
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            return alert("Preencha todos os campos");
        }
        
        if (password !== confirmPassword) {
            return alert("Senhas diferentes");
        }

        try{
            const token = await registerService(name, email, password);
            await login(token);
            navigate("/tasks");
        } catch (error) {
            console.error(error);
        }
        
        // await login(email, password);
        // navigate("/tasks");
    }

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <p className="text-slate-700 text-center">Campos com * devem ser preenchidos</p>
            
            <input
                type="text"
                placeholder="Nome *"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            
            <input
                type="text"
                placeholder="E-mail *"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            
            <input
                type="password"
                placeholder="Senha *"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <input
                type="password"
                placeholder="Confirme a senha *"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
            />
            
            <button 
                onClick={() => {
                    onRegisterClick(email, password);
                }}
                className="bg-slate-500 text-white p-2 px-4 py-2 rounded-md">
                Cadastrar
            </button>

        </div>
    )
}