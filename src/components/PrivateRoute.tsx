// src/components/ProtectedRoute.tsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: ProtectedRouteProps) {
  const { token, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // ou um spinner de carregamento
  }
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}