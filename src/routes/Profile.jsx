import React, { useEffect } from 'react';
import { useAuth } from '../context/auth/AuthContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
// Este componente aun no esta en uso
export default function Profile() {
   const navigate = useNavigate()
    const {user,isLoading} = useAuth()
    console.log(user)
    useEffect(()=> {
      if(user){        
        console.log(user,isLoading)
        if(user.profile_name === 'company') return navigate('/profile-company')
        // if(user.profile_name === 'company') return <Navigate to='/profile-company'/>
        if(user.profile_name === 'candidate') return navigate('/profile-candidate')
      } 
    },[])
}
