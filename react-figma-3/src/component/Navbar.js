import React from "react";
import "../App.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black text-light">
      <div className="container">
        <h1 className="text-wrapper">Pickup</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class>
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
              <path d="M51.625 19.6667H7.375V14.75H51.625M22.125 31.9583H51.625V27.0417H22.125M22.125 44.25H51.625V39.3333H22.125" fill="#F0F3FF" />
            </svg>
          </span>

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto fs-5">
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="/">For Enterprise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="/">Delivery Partners</a>
            </li>
          </ul>
          <a className="fs-4 nav-link text-light" aria-current="page" href="/">Login</a>
        </div>
      </div>
    </nav>


  );
};
