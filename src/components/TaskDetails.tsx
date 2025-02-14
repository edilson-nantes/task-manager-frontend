import { useAppSelector } from "../redux/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";

interface TaskDetailsProps {
    onEditClick: () => void;
}

export function TaskDetails(props: TaskDetailsProps) {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const task = useAppSelector((state) => state.tasks.tasks.find((task) => task.id?.toString() === id));
    const navigate = useNavigate();

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <h2 className="text-xl text-slate-600 font-bold">{task?.title}</h2>
            <p className="text-slate-600">{task?.description}</p>
            <p className="text-slate-600">{task?.status}</p>
            <button 
                onClick={() => {props.onEditClick()}}
                className="bg-slate-500 text-white p-2 px-4 py-2 rounded-md">
                Editar
            </button>
            <button 
                onClick={() => {navigate(-1)}}
                className="border-slate-300 border outline-slate-400 bg-slate-300 text-slate-500 p-2 px-4 py-2 rounded-md">
                Voltar
            </button>
        </div>
    );
}