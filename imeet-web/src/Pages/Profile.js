import React from 'react'
import MainLayout from '../Layouts/Mainlayout'
import { useAuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import './Dashboard.css'
import dashboard from '../images/view-dashboard.svg'

const Profile = () => {
  const { user, handleLogout } = useAuthContext();
  return (
    <MainLayout>



      <div className="row pt-5">
        <div className="col-2">
          <div className="sidebar">
            <div className='icon d-flex justify-content-between align-baseline'>
              <img src={dashboard} alt="" />
              <Link to='/dashboard'><span >Dashboard</span></Link>
            </div>
            <div className='icon mt-3 text-center'>
              <Link to='/profile'><span >Profile</span></Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <h1>Profile Setting</h1>
          <div className="d-flex justify-content-between ">

            <ol className=' fs-5'>
              <li><p className=' fs-5' >Name : {user?.displayName}</p></li>
              <li> <p className=' fs-5' >Email : {user?.email}</p></li>
            </ol>
            <img src={user?.photoURL} alt='' className=' justify-content-end' width={'80px'} />
            <button onClick={handleLogout} className="btn  btn-primary logout">Logout</button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Profile