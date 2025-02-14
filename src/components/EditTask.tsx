import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { updateTask } from "../redux/slices/taskSlice";
import { Task } from "../types/task";

interface EditTaskProps {
    onEditClick: () => void;
}

export function EditTask(props: EditTaskProps) {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const task = useAppSelector((state) => state.tasks.tasks.find((task) => task.id?.toString() === id));
    
    const [title, setTitle] = useState(task?.title);
    const [description, setDescription] = useState(task?.description);
    const [status, setStatus] = useState(task?.status);
    const dispatch = useAppDispatch();
    const { token } = useAuth();
    const navigate = useNavigate();

    function onUpdateTaskSubmit(updatedTask: Task) {

        

        if (token) {
            dispatch(updateTask({ token, task: updatedTask }));
        }

        navigate("/tasks");
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
                    const updatedTask = {
                        id: Number(id),
                        title: title,
                        description: description,
                        status: status
                    };
                    onUpdateTaskSubmit(updatedTask);
                }}
                className="bg-slate-500 text-white p-2 px-4 py-2 rounded-md">
                Salvar
            </button>

            <button 
                onClick={() => {
                    props.onEditClick()}}
                className="border-slate-300 border outline-slate-400 bg-slate-300 text-slate-500 p-2 px-4 py-2 rounded-md">
                Cancelar
            </button>
        </div>
    )
}