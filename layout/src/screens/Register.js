import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../Config/Firebase';
import AuthLayout from '../Layouts/Authlayout';


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
    <AuthLayout>
      <div className='container w-50 mx-auto'>
       <form onSubmit={(e)=>{e.preventDefault();submitHandler()}}>
       <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" name='name' value={value?.name} onChange={changeHandler} />
  </div>
  <div class="mb-3">
    <label class="form-label">Email address</label>
    <input type="email" class="form-control" name='email' value={value?.email} onChange={changeHandler}/>
   
  </div>
  <div class="mb-3">
    <label  class="form-label">Password</label>
    <input type="password" class="form-control" name='password' value={value?.password} onChange={changeHandler} />
  </div>

  <button type="submit" className="btn btn-primary w-100 mb-3">Submit</button>
</form>
<Link to={'/login'} className=''>Already Have An account</Link>
    </div>
    </AuthLayout>
  )
}

export default Registration