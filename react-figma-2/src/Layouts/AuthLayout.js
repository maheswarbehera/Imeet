import React from 'react';
import {useAuthContext } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

const AuthLayout = ({children}) =>{
    const {user} = useAuthContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(user){
            navigate('/dashboard');
        }
        else{
            setLoading(false);            
        }
    },[navigate,user])

    if(loading){
        return <div>Loading...</div>
    }

  return (
    <div>
        {children}
    </div>
  );
}

export default AuthLayout;
