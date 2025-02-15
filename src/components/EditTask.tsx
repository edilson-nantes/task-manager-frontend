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
    const { error } = useAppSelector((state) => state.tasks);
    const [title, setTitle] = useState(task?.title);
    const [description, setDescription] = useState(task?.description);
    const [status, setStatus] = useState(task?.status);
    const dispatch = useAppDispatch();
    const { token } = useAuth();
    const navigate = useNavigate();

    function onUpdateTaskSubmit(updatedTask: Task) {

        

        if (token) {
            dispatch(updateTask({ token, task: updatedTask }));
            if (error){
                alert(error);
            }
        }

        navigate("/tasks");
        window.location.reload();
    }

    return (
        <div className="space-y-4 p-6 bg-white rounded-md shadow flex flex-col">
            <input
                type="text"
                placeholder="Digite o nome da tarefa"
                className="border border-orange-300 outline-orange-400 px-4 py-2 rounded-md bg-slate-50"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            
            <input
                type="text"
                placeholder="Digite a descrição da tarefa"
                className="border border-orange-300 outline-orange-400 px-4 py-2 rounded-md bg-slate-50"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />

            <select
                className="border border-orange-300 outline-orange-400 px-4 py-2 rounded-md bg-slate-50"
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
                className="bg-orange-500 text-white p-2 px-4 py-2 rounded-md">
                Salvar
            </button>

            <button 
                onClick={() => {
                    props.onEditClick()}}
                className="border-red-300 border outline-red-400 bg-white text-red-500 p-2 px-4 py-2 rounded-md">
                Cancelar
            </button>
        </div>
    )
}