import { Navigate, Outlet} from  'react-router-dom';
import { useAuth } from '../context/auth/AuthContext';

export const isLoading = () => {
  const {isLoading,isAutenticated} = useAuth()
  console.log('Loading login',isLoading)
  if(isLoading) return <p>Loading... </p>
  if(isAutenticated) return <Navigate to='/profile'/> 
  return <Outlet/>
}
export default isLoading                                      