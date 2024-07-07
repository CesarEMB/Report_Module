import { useContext, createContext, useState, useEffect } from "react";
import { loginRequest } from "../api/auth";
import { jwtDecode } from "jwt-decode";

//interfaces

interface LoginError {
  response?: {
    data?: {
      message?: string;
    };
  };
}
interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isUser: string;
  accessToken: string;
  messageError: string;
}


const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  login: () => Promise.resolve(),
  logout: () => { },
  isUser: "",
  accessToken: "",
  messageError: ""
})

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUser, setIsUser] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const [messageError, setMessageError] = useState("")

  const login = async (email: string, password: string) => {
    try {
      const response = await loginRequest(email, password);
      const { token } = response.data;
      const { user } = response.data.user;
      setIsUser(user)
      //Token
      localStorage.setItem("token", token);
      setAccessToken(token)
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Error de inicio de sesión");
      const error = err as LoginError;
      setMessageError(error.response?.data?.message || "Unknown error")
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setAccessToken("");
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode<{ exp: number }>(token);
      const expirationTime = decodedToken.exp * 1000; 
      if (expirationTime < Date.now()) {
        logout();
      } else {
        setIsAuthenticated(true);
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, isUser, accessToken, isLoading, messageError}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);