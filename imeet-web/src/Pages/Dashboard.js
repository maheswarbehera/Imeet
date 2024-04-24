import React from 'react'
import MainLayout from '../Layouts/Mainlayout'
import { useAuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom';
import './Dashboard.css'
import dashboard from '../images/view-dashboard.svg'

const Dashboard = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <MainLayout>
      <div className=' pt-5'>
        <div className="row">
          <div className="col-2">
            <div className="sidebar">
              <div className='icon d-flex justify-content-between align-baseline'>
                <img src={dashboard} alt="" />
                <Link  to='/dashboard'><span >Dashboard</span></Link>                
              </div>
              <div className='icon mt-3 text-center'>
              <Link  to='/profile'><span >Profile</span></Link>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h1>Welcome To Dashboard</h1>
            <h4 className='text-center'>Hello ! {user && user?.displayName}</h4>
            <button onClick={handleLogout} className="btn btn-info text-light logout">Logout</button>
            
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard