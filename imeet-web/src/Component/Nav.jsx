import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Nav.css'
import { Link } from 'react-router-dom';
function Nav(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">{props.logo}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item header-text">
                                <Link className="nav-link active header-text" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                            <li className="nav-item pe-3">
                                <Link to='/login' className="btn out-line-btn header-text" style={{backgroundColor: '#fff',color: '#000'}}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to='/signup' className="btn out-line-btn header-text" style={{backgroundColor: '#635DFF',color:'#fff'}}>Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
