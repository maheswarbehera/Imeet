import { createContext, useContext, useEffect, useState } from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../Config/Firebase";
import {useNavigate} from "react-router-dom";


const AuthContext = createContext();

export const useAuthContext= () =>{
    return useContext(AuthContext);
}

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const navigate  = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }
        })
    },[navigate])

    const handleLogout = async()=>{
        console.log("logout");
        await signOut(auth);
        console.log("success");
        navigate('/login');
    }

    return <AuthContext.Provider value={{user,handleLogout}}>{children}</AuthContext.Provider>
}