import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../Config/Firebase';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../Layouts/Authlayout';
import google from '../images/google.svg'
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({

    email: '',
    password: ""
  });


  const LoginWithGoogle = async () => {
    const Provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, Provider);
      navigate("/dashboard");
    } catch (error) {
      console.log(`error: ${error.message}`)
    }
  }

  const changeHandler = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const submitHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigate("/dashboard");

    } catch (error) {
      alert(`err : ${error?.message}`)

    }
  }

  return (
    <AuthLayout>
      <div className="w-25 mx-auto">
        <div className='login_card'>
          <h1>Login</h1>
          <form className="text-start" onSubmit={(e) => { e.preventDefault(); submitHandler() }}>
            <div className="mb-3">
              <input type="email" className="input-border form-control" name="email" value={value?.email} onChange={changeHandler} placeholder='Enter Email/Username' />
            </div>
            <div className="mb-3">
              <input type="password" className="input-border form-control" name="password" value={value?.password} onChange={changeHandler} placeholder='Enter Password' />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">Submit &rarr;</button>
            <button onClick={LoginWithGoogle} className="btn google btn-primary w-100 gap-2 d-flex justify-content-center">
              <img src={google} alt="" />
              Continue With Google &rarr;
            </button>
            <Link className="nav-link active text-center py-3" aria-current="page" to="/signup">Don’t Have An Account ? <strong>Sign Up</strong> &rarr;</Link>

            <p className='forgot'>Forget Password</p>
          </form>
        </div>
      </div>

    </AuthLayout>
  )
}

export default Login