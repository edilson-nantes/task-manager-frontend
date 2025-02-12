import { ChevronRightIcon, TrashIcon } from "lucide-react";

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

interface TasksListProps {
    tasks: Task[];
    onDeleteTaskClick: (id: number) => void;
}

export function TasksList({ tasks, onDeleteTaskClick }: TasksListProps) {
    
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button className={`w-full text-left bg-slate-400 text-white p-2 rounded-md ${
                        task.status === "concluída" ? "line-through" : ""
                        }`}>
                        {task.title}
                        <span className="text-sm text-slate-100">({task.status})</span>
                    </button>

                    <button className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>

                    <button
                        className="bg-slate-400 text-white p-2 rounded-md"
                        onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    )
}