import React from 'react';
import banner from '../images/image 2.png'
import './Herosection.css'
function Herosection() {
  return (
    <>
    <div className="container">
        <div className="row py-5 align-items-center">
            <div className="col-lg-6">
                <div className="banner">
                    <img src={banner} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
                <div className="">
                    <div className="main-content text-center">
                        <strong className='hero-head'>Welcome to iMeet for MERN</strong>
                    </div>
                    <div className='info pt-5 '>
                        <span>
                        Collaboration lies at the heart of successful software development, and iMeet for MERN makes it easier than ever. Connect with your team members, effortlessly share code snippets, and collaborate in real-time, all within a unified and intuitive interface. Leverage the collective expertise of your team and accelerate your development process, bringing your MERN projects to life faster than ever before.</span>
                    </div>
                </div>
            </div>            
        </div>
    </div>
    </>
  );
}

export default Herosection;
