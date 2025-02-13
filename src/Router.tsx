import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tasks } from "./pages/Tasks";
import { TaskPage } from "./pages/TaskPage";
import { LoginPage } from "./pages/LoginPage";
import { PrivateRoute } from "./components/PrivateRoute";

export function Router() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/tasks" element={
                    <PrivateRoute>
                        <Tasks />
                    </PrivateRoute>
                } />
                <Route path="/task-page" element={
                    <PrivateRoute>
                        <TaskPage />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}