import { useState } from "react";

interface AddTaskProps {
    onAddTaskSubmit: (title: string, description: string) => void;
}

export function AddTask({ onAddTaskSubmit }: AddTaskProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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
            
            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    return alert("Preencha todos os campos");
                }
                onAddTaskSubmit(title, description)
                setTitle("")
                setDescription("")
            }}
                className="bg-slate-500 text-white p-2 px-4 py-2 rounded-md"
            >
                Adicionar
            </button>
        </div>
    )
}