import React from 'react';
import banner from '../images/coding 1.png'
import './Testimonial.css'
function Testimonial() {
  return (
    <>
    <div className="container pt-5">
        <div className="row py-5 align-items-center">
            <div className="col-lg-8">
                <div className="main-content">
                    <strong className='head'>iMeet Codebase</strong>
                </div>
                <div className='head-info pt-4'>
                    <span>
                    Unlock the potential of seamless collaboration and efficient coding with iMeet, the leading codebase platform. Designed by developers for developers, iMeet is here to revolutionize the way you work, collaborate, and create.
                    </span>
                </div>

                <div className="d-flex pt-5 gap-2">
                    <button className='btn outline'>Join Now</button>
                    <button className='btn outline'>Upload Code</button>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="banner">
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Testimonial;
