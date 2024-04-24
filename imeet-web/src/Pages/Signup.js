import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../Config/Firebase';
import AuthLayout from '../Layouts/Authlayout';
import './Login.css'
import google from '../images/google.svg'

const Registration = () => {

    const [value,setValue] = useState({
        name:'',
        email:'',
        password:""
    });
    const changeHandler = e=>{
        setValue({...value,[e.target.name]:e.target.value})
    }

    const submitHandler = async()=>{
        try {
                  await createUserWithEmailAndPassword(auth,value.email,value.password);
                    await updateProfile(auth?.currentUser,{
                        displayName:value?.name,
                        photoURL:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    })

                    signOut(auth);
                    alert("register successful")
        } catch (error) {
            alert(`err : ${error?.message}`)

        }
    }

  return (
 <>
    <AuthLayout>
    <div className="">
      <div className="w-25 mx-auto">
        <div className='signup_card'>
        <h1>Register</h1>

          <form className="text-start" onSubmit={(e)=>{e.preventDefault();submitHandler()}}>
            <div className="mb-3">
                <input type="text" className="input-border form-control" id="name" name="name" value={value?.name} onChange={changeHandler} placeholder='Enter Name'/>
            </div>
            <div className="mb-3">
                <input type="email" className="input-border form-control" id="exampleInputEmail1" name="email" value={value?.email} onChange={changeHandler} placeholder='Enter Email/Username'/>
            </div>
            <div className="mb-3">
                <input type="password" className="input-border form-control" id="exampleInputPassword1" name="password" value={value?.password} onChange={changeHandler} placeholder='Enter Password'/>
            </div>
            
            <button  type="submit" className="btn btn-primary w-100 mb-2">Submit &rarr;</button>
                <button  className="btn google btn-primary w-100 gap-2 d-flex justify-content-center">
                  <img src={google} alt="" />
                  Continue With Google &rarr;
                </button>
            <Link className="nav-link active text-center pt-3" aria-current="page" to="/login">Already Have An Account ?<strong> Sign In</strong> &rarr;</Link>
        </form>
      </div>
      </div></div>
    </AuthLayout>
    </>
  )
}

export default Registration