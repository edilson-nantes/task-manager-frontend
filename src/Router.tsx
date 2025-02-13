import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tasks } from "./pages/Tasks";
import { TaskPage } from "./pages/TaskPage";
import { LoginPage } from "./pages/LoginPage";

export function Router() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/task-page" element={<TaskPage />} />
            </Routes>
        </BrowserRouter>
    )
}