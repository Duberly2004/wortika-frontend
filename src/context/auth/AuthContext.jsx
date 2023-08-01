import { createContext, useContext, useEffect, useState } from "react";
import { getUserRequest, loginRequest, logoutRequest, registerRequest, verifyTokenRequest } from "../../api/auth.api";
import Cookies from "js-cookie";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [errors, setErrors] = useState([]);
  const [isAutenticated, setIsAutenticated] = useState(false);
  const [isLoading,setLoading] = useState(true);
  const [userId, setUserId] = useState(null)
  const [user, setUser] = useState(null) // Esto es parqa almacenar los datos del usuario
  
  const login = async (user) => {
    try {
      await loginRequest(user);
      const userData = await getUserRequest()
      const res = await verifyTokenRequest();
      console.log(res)
      if(res.data && userData.data){
        setUserId(res.data)
        setUser(userData.data)
        setIsAutenticated(true)
        return res
      }
      } catch (error) {
      setErrors(error.response.data);
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      setUserId(null);
      setUser(null)
      setIsAutenticated(false);
    } catch (error) {
      console.log(error)
    }
  }

  const register = async (user) => {
    try {
      return await registerRequest(user);
      } catch (error) {
      setErrors(error.response.data);
    }
  };  

  
  // Eliminar errores despues de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(()=> {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAutenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest();
        const userData = await getUserRequest()
        if (!res.data && !userData.data) return setIsAutenticated(false);
        setUser(userData.data);
        setIsAutenticated(true);
        setUserId(res.data)
        setLoading(false);
        return;
      } catch (error) {
        setIsAutenticated(false);
        setLoading(false);
      }
    }
    checkLogin()
  },[])

  return (
    <AuthContext.Provider
      value={{ login, logout,errors, isAutenticated, setIsAutenticated,isLoading,userId,register,user}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}
