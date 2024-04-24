import AuthLayout from '@/Layout/AuthLayout'
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Register = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const router = useRouter();

    const HandleOnSubmit =async()=>{
        if(email!=='' || password !==''){

  
        try {
              const user = await createUserWithEmailAndPassword(auth,email,password);
                console.log("user",user)
              router.push("/");
        } catch (error) {
                    console.log(error.message);
        }
    }else{
        alert("All feilds are required");
    }
    }


  return (
   <AuthLayout>
     <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
  <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
  <div className="relative mb-4">
    <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  </div>
  <div className="relative mb-4">
    <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
  </div>
  <button onClick={HandleOnSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Register</button>
  <Link href={'/login'} className="text-xl mt-3 text-center ">Already have an Account &rarr; </Link>
</div>
   </AuthLayout>

  )
}

export default Register