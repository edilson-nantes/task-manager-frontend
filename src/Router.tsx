import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tasks } from "./pages/Tasks";
import { TaskPage } from "./pages/TaskPage";

export function Router() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/task-page" element={<TaskPage />} />
            </Routes>
        </BrowserRouter>
    )
}