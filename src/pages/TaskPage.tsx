import { useState } from "react";
import { TaskDetails } from "../components/TaskDetails";
import { EditTask } from "../components/EditTask";
import { Header } from "../components/Header";


export function TaskPage() {
    const pageName = "Detalhes da tarefa";
    
    
    const [editMode, setEditMode] = useState(false);

    function onEditClick() {
        setEditMode(!editMode);
    }

    return (
        <div className="w-screen h-screen bg-slate-200 flex justify-center p-6">
            <Header pageName={pageName}/>
            <div className="pt-16 w-[500px] space-y-4">
                    
                    {editMode ? <EditTask onEditClick={onEditClick} /> : <TaskDetails onEditClick={onEditClick}/>}
                    
                    
            </div>
        </div>
    )
}