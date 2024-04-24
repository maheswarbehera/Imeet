import {   signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../Config/Firebase';
import {useNavigate} from 'react-router-dom';
import AuthLayout from '../Layouts/Authlayout';


const Login = () => {
const navigate = useNavigate();
    const [value,setValue] = useState({
      
        email:'',
        password:""
    });


    const LoginWithGoogle = async()=>{
      const Provider = new GoogleAuthProvider();
      try {
              await signInWithPopup(auth,Provider);
              navigate("/");
      } catch (error) {
        console.log(`error: ${error.message}`)
      }
    }

    const changeHandler = e=>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const submitHandler = async()=>{
        try {
                   await signInWithEmailAndPassword(auth,value.email,value.password);
                    navigate("/");
                  
        } catch (error) {
            alert(`err : ${error?.message}`)

        }
    }

  return (
  <AuthLayout>
      <div className='container w-50 mx-auto'>
       <form onSubmit={(e)=>{e.preventDefault();submitHandler()}}>
 
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={value?.email} onChange={changeHandler}/>
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={value?.password} onChange={changeHandler} />
  </div>

  <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>
<button onClick={LoginWithGoogle} className="btn btn-sm btn-secondary w-100 mb-3">Login with google</button>
</form>
<Link to={'/signup'}>Don't Have An account</Link>
    </div>
  </AuthLayout>
  )
}

export default Login