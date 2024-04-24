import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext'

function Nav(props) {
  const {user,handleLogout} = useAuthContext();

  return (
    <>
      <div className="nav">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" id='brand' to="/">{props.logo}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav align-items-center gap-2">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Our Courses</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ">Insights</Link>
                  </li>
                  <li>
                  {!user ? <Link to='/login' ><button className="btn">Login</button></Link>

                    :
                        <button onClick={handleLogout} className="bdtn">Logout </button>
                    }

                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;
