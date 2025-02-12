import { useState } from "react"
import { AddTask } from "../components/AddTask"
import { TasksList } from "../components/TasksList"

interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
}

export function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            title: "Estudar",
            description: "Estudar programação",
            status: "em progresso"
        },
        {
            id: 2,
            title: "Limpar a casa",
            description: "Limpar a casa",
            status: "pendente"
        },
        {
            id: 3,
            title: "Tirar o lixo",
            description: "Colocar o lixo na coleta",
            status: "concluída"
        }
    ])

    function onDeleteTaskClick(id: number) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }
  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask />
        <TasksList tasks={tasks} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}