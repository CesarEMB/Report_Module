import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/Auth.context"


const ProtectedRoute = () =>{ 
    const auth = useAuth()

    if (auth.isLoading) {
        return <div>Cargando...</div>;
      }

    return auth.isAuthenticated ? <Outlet /> : <Navigate to={"/"}/>
}

export  { ProtectedRoute} 