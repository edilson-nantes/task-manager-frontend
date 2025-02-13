import { useEffect } from "react"
import { AddTask } from "../components/AddTask"
import { TasksList } from "../components/TasksList"
import { useAppDispatch } from "../redux/hooks";
import { loadTasks } from "../redux/slices/taskSlice";
import { useAuth } from "../context/AuthContext";

export function Tasks() {
    const dispatch = useAppDispatch();
    const { token } = useAuth();

    useEffect(() => {
      if(token) {
        dispatch(loadTasks(token));
      }
    }, [dispatch]);
  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>

        <AddTask />

        <TasksList />
      </div>
    </div>
  )
}