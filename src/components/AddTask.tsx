import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addTask } from '../redux/slices/taskSlice';
import { useAuth } from "../context/AuthContext";

export function AddTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useAppDispatch();
    const { token } = useAuth();
    const { error } = useAppSelector((state) => state.tasks);

    function onAddTaskSubmit(title: string, description: string, status: string) {
        if (!title.trim() || !description.trim() || !status.trim()) {
            return alert("Preencha todos os campos");
        }

        const newTask = {
            title,
            description,
            status
        };

        if (token) {
            dispatch(addTask({ token, task: newTask }));

            if(error){
                alert(error);
            }
        }
        setTitle("")
        setDescription("")
        setStatus("")
        window.location.reload();
    }

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="Digite o nome da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            
            <input
                type="text"
                placeholder="Digite a descrição da tarefa"
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <select
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-slate-50"
                value={status}
                onChange={(event) => setStatus(event.target.value)}>
                <option value="">Status</option>
                <option value="pendente">Pendente</option>
                <option value="em progresso">Em progresso</option>
                <option value="concluida">Concluída</option>
            </select>
            
            <button 
                onClick={() => {
                    onAddTaskSubmit(title, description, status);
                }}
                className="bg-slate-500 text-white p-2 px-4 py-2 rounded-md">
                Adicionar
            </button>
        </div>
    )
}