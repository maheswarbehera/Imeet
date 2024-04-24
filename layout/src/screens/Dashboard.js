import React from 'react'
import MainLayout from '../Layouts/Mainlayout'
import { useAuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';




const Dashboard = () => {
  const {user,handleLogout} = useAuthContext();

  return (
            <MainLayout>
                <h1>Welcome To Dashboard</h1>
                <p>Hello ! {user && user?.displayName}</p>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                <Link className='btn btn-info ms-3' to='/profile'>Profile</Link>
            </MainLayout>
  )
}

export default Dashboard