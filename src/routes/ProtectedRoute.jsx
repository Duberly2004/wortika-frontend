import { Navigate, Outlet} from  'react-router-dom';
import { useAuth } from '../context/auth/AuthContext';

export const ProtectedRoute = () => {
  const { isAutenticated ,isLoading} = useAuth()
  console.log('Auth',isAutenticated,'Loading',isLoading)
  if(isLoading) return <p>Loading... </p>
  if( !isLoading && !isAutenticated) return <Navigate to={'/login'}/>

  return <Outlet/>
}
export default ProtectedRoute