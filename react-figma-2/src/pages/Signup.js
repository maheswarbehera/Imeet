import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../Layouts/AuthLayout';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../Config/Firebase'

function Signup() {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const HandleOnSubmit = async()=>{
        if(email!=='' || password !==''){
        try {
            const user = await createUserWithEmailAndPassword(auth,email,password);
            console.log("user",user)
            navigate('/dashboard');
        } catch (error) {
            console.log(error.messages);

        }
    } else{
        alert("All feilds are required");
    }}

  return (
    <AuthLayout>
    <div>
       <div className="w-25 mx-auto">
        <div className='signup_card'>
        <h1>Register</h1>

          <form className="text-start">
            <div className="mb-3">
                <input type="email" className="input-border form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email/Username'/>
            </div>
            <div className="mb-3">
                <input type="password" className="input-border form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
            </div>
            
            <button onClick={HandleOnSubmit} className="btn btn-primary w-100 mb-2">Submit &rarr;</button>
                <button  className="btn google btn-primary w-100 gap-2 d-flex justify-content-center">
                  Continue With Google &rarr;
                </button>
            <Link className="nav-link active text-center pt-3" aria-current="page" to="/login">Already Have An Account ?<strong> Sign In</strong> &rarr;</Link>
        </form>
      </div>
      </div>
    </div>
    </AuthLayout>
  );
}

export default Signup;
