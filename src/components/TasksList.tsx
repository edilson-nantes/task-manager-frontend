import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface Task {
    id?: number;
    title: string;
    description: string;
    status: string;
}

export function TasksList() {
    const navigate = useNavigate();
    const tasks = useAppSelector((state) => state.tasks.tasks);

    function onSeeDatailsClick(task: Task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task-page?${query.toString()}`);
    }

    function onDeleteTaskClick(id: number) {
        console.log(id);
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                task && task.id !== undefined && task.title && task.description && task.status && (
                    <li key={task.id} className="flex gap-2">
                        <button
                            className={`w-full text-left bg-slate-400 text-white p-2 rounded-md
                            ${task.status === "concluída" ? "line-through" : ""
                        }`}>
                            {task.title}
                            <span className="text-sm text-slate-100">({task.status})</span>
                        </button>

                        <button
                            onClick={() => onSeeDatailsClick(task)}
                            className="bg-slate-400 text-white p-2 rounded-md">
                            <ChevronRightIcon />
                        </button>

                        <button
                            className="bg-slate-400 text-white p-2 rounded-md"
                            onClick={() => { task.id ? onDeleteTaskClick(task.id): alert("ID da tarefa não encontrado")}}>
                            <TrashIcon />
                        </button>
                    </li>
                )))
            }
        </ul>
    )
}