import { AuthProvider } from "./context/AuthContext";
import { Router } from "./Router";


export function App() {
  
  return(
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}