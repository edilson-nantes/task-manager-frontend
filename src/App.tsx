import { AddTask } from "./components/AddTask";
import { TasksList } from "./components/TasksList";

export function App() {
  

  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <AddTask />
      <TasksList />
    </>
  )
}