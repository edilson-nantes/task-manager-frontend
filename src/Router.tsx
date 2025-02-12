import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tasks } from "./pages/Tasks";

export function Router() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/tasks" element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    )
}