import React from 'react'
import MainLayout from '../Layouts/Mainlayout'
import { useAuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user, handleLogout } = useAuthContext();
  return (
    <MainLayout>
      <div className="w-50 mx-auto">
      <Link to='/' >Back To Dashboard</Link>
        <h1 className="text-center py-5">Profile Setting</h1>
          <div className="d-flex justify-content-between mb-4">
          <img src={user?.photoURL} alt='' width={'50px'} />          
          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
        <span className=' fs-4' >Name : {user?.displayName}</span>
        <p className=' fs-4' >Email : {user?.email}</p>
      </div>

    </MainLayout>
  )
}

export default Profile