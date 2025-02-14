import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TaskDetails } from "../components/TaskDetails";
import { EditTask } from "../components/EditTask";

export function TaskPage() {
    const navigate = useNavigate();
    
    
    const [editMode, setEditMode] = useState(false);

    function onEditClick() {
        setEditMode(!editMode);
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                    <div className="flex justify-center relative text-slate-100">
                        <button 
                            onClick={() => navigate(-1)}
                            className="absolute left-0 top-0 bottom-0">
                            <ChevronLeftIcon />
                        </button>

                        <h1 className="text-3xl text-slate-100 font-bold text-center">
                            Detalhes da tarefa
                        </h1>
                    </div>
                    {editMode ? <EditTask onEditClick={onEditClick} /> : <TaskDetails onEditClick={onEditClick}/>}
                    
                    
            </div>
        </div>
    )
}