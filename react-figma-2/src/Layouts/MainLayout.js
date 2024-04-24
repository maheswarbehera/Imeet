import { useAuthContext } from '../context/AuthContext'
import { useNavigation } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

const MainLayout = ({children}) => {
    const {user} = useAuthContext();
    const navigate = useNavigation();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
            if(user === null){
                navigate("/login");
            }else{
                setLoading(false);
            }
    },[navigate,user])

        if(loading){
            return <div>loading...</div>
        }

  return (
    <div>{children}</div>
  )
}

export default MainLayout;