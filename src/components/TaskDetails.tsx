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
        <div className="space-y-4 p-6 bg-white rounded-md shadow flex flex-col">
            <h2 className="text-xl text-slate-600 font-bold">{task?.title}</h2>
            <p className="text-slate-600">{task?.description}</p>
            <p className="text-slate-600">{task?.status}</p>
            <button 
                onClick={() => {props.onEditClick()}}
                className="bg-orange-500 text-white p-2 px-4 py-2 rounded-md">
                Editar
            </button>
            <button 
                onClick={() => {navigate(-1)}}
                className="border-orange-300 border outline-orange-400 bg-white text-orange-500 p-2 px-4 py-2 rounded-md">
                Voltar
            </button>
        </div>
    );
}