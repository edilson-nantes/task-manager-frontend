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
            await login(token, name);
            navigate("/tasks");
        } catch (error) {
            console.error(error);
            return alert("E-mail já cadastrado");
        }
    }

    return (
        <div className="space-y-4 p-6 bg-white rounded-md shadow flex flex-col">
            <p className="text-slate-500 text-center">Campos com * devem ser preenchidos</p>
            
            <input
                type="text"
                placeholder="Nome *"
                className="border border-orange-300 outline-orange-400 px-4 py-2 rounded-md bg-slate-50"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            
            <input
                type="text"
                placeholder="E-mail *"
                className="border border-orange-300 outline-orange-400 px-4 py-2 rounded-md bg-slate-50"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            
            <input
                type="password"
                placeholder="Senha *"
                className="border border-orange-300 outline-orange-400 px-4 py-2 rounded-md bg-slate-50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <input
                type="password"
                placeholder="Confirme a senha *"
                className="border border-orange-300 outline-orange-400 px-4 py-2 rounded-md bg-slate-50"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
            />
            
            <button 
                onClick={() => {
                    onRegisterClick(email, password);
                }}
                className="bg-orange-500 text-white p-2 px-4 py-2 rounded-md">
                Cadastrar
            </button>
            <button 
                onClick={() => {navigate("/")}}
                className="border-orange-300 border outline-orange-400 bg-white text-orange-500 p-2 px-4 py-2 rounded-md">
                Cancelar
            </button>

        </div>
    )
}