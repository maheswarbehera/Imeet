
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../Layouts/AuthLayout';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../Config/Firebase'

function Login() {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const HandleOnSubmit = async()=>{
        if(email!=='' || password !==''){
        try {
            const user = await signInWithEmailAndPassword(auth,email,password);
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
    <div className="w-25 mx-auto">
        <div className='login_card'>
          <h1>Login</h1>
          <form className="text-start">
            <div className="mb-3">
              <input type="email" className="input-border form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email/Username' />
            </div>
            <div className="mb-3">
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input-border form-control" placeholder='Enter Password' />
            </div>
            <button onClick={HandleOnSubmit} className="btn btn-primary w-100 mb-2">Submit &rarr;</button>
            <button  className="btn google btn-primary w-100 gap-2 d-flex justify-content-center">
              Continue With Google &rarr;
            </button>
            <Link className="nav-link active text-center py-3" aria-current="page" to="/signup">Don’t Have An Account ? <strong>Sign Up</strong> &rarr;</Link>

            <p className='forgot'>Forget Password</p>
          </form>
        </div>
      </div>     
    </AuthLayout>
  );
}

export default Login;
