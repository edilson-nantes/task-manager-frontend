import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useAuth } from "../context/AuthContext";
import { dropTask } from "../redux/slices/taskSlice";
import { Task } from "../types/task";

export function TasksList() {
    const navigate = useNavigate();
    const tasks = useAppSelector((state) => state.tasks.tasks);
    const { error } = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();
    const { token } = useAuth();

    function onSeeDatailsClick(task: Task) {
        const query = new URLSearchParams();
        query.set("id", task.id ? task.id.toString() : "");
        navigate(`/task-page?${query.toString()}`);
    }

    function onDeleteTaskClick(id: number) {
        if (token) {
            dispatch(dropTask({ token, id }));
            if (error){
                alert(error);
            }
        }
    }

    return (
        <ul className="space-y-4 p-6 bg-white rounded-md shadow">
            {tasks.map((task) => (
                task && task.id !== undefined && task.title && task.description && task.status && (
                    <li key={task.id} className="flex gap-2">
                        <button
                            onClick={() => onSeeDatailsClick(task)}
                            className={`w-full text-left text-white p-2 rounded-md
                            ${task.status === "concluida" ? "line-through bg-green-500" : "bg-orange-400"
                        }`}>
                            {task.title}
                            <span className="text-sm text-blue-100">({task.status})</span>
                        </button>

                        <button
                            onClick={() => onSeeDatailsClick(task)}
                            className={`text-white p-2 rounded-md details
                            ${task.status === "concluida" ? " bg-green-600" : "bg-orange-400"}`}>
                            <ChevronRightIcon />
                        </button>

                        <button
                            className="bg-red-400 text-white p-2 rounded-md"
                            onClick={() => { task.id ? onDeleteTaskClick(task.id): alert("ID da tarefa não encontrado")}}>
                            <TrashIcon />
                        </button>
                    </li>
                )))
            }
        </ul>
    )
}