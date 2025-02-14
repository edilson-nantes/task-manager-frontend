import { useEffect } from "react"
import { AddTask } from "../components/AddTask"
import { TasksList } from "../components/TasksList"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadTasks } from "../redux/slices/taskSlice";
import { useAuth } from "../context/AuthContext";
import { Header } from "../components/Header";

export function Tasks() {
    const dispatch = useAppDispatch();
    const { token } = useAuth();
    const pageName = "Gerenciador de tarefas";
    const { loading, error } = useAppSelector((state) => state.tasks);

    useEffect(() => {
      if(token) {
        dispatch(loadTasks(token));
      }
    }, [dispatch]);
  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      
        <Header pageName={pageName}/>
      
        <div className="pt-16 w-[500px] space-y-4">
        {error && <div className="text-red-500">{error}</div>}
          <AddTask />
          {loading ? (
            <div>Loading...</div>
          ) : (
            <TasksList />
          )}
        </div>
      
    </div>
  )
}