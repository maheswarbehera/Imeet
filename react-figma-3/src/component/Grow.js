import React from 'react';
import map from '../images/image 5 (1).png'
import Testimonial from './Testimonial';
function Grow() {
    return (
        <>
            <div className="bg-grow">
                <div className="container">
                    <div className="label py-5">
                        <h1 className="text-center grow-text">
                            And thanks to you, we are growing each &amp;
                            <br /> every day!
                        </h1>
                    </div>
                    <div className="row text-center pb-5">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="wrapper">
                                <h1 className="grow-text counter fs-1">19+</h1>
                                <span className='grow-text-wrapper'>Cities</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="wrapper">
                                <h1 className="grow-text counter fs-1">5 Lakh+</h1>
                                <span className='grow-text-wrapper'>Driver Partners</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="wrapper">
                                <h1 className="grow-text counter fs-1">1 Core+</h1>
                                <span className='grow-text-wrapper'>Customers</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className="wrapper">
                                <h1 className="grow-text counter fs-1">10 Core+</h1>
                                <span className='grow-text-wrapper'>Trips</span>
                            </div>
                        </div>
                    </div>
                    <div className="map py-5">
                        <div className="map text-center">
                            <img src={map} alt="" className='img-fluid'/>
                        </div>
                        <p className="text-center grow-text-wrapper fs-6 py-5">
                            We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad, Jaipur, Pune, Kolkata, Surat, Chennai,
                            Coimbatore, Indore,
                            <br /> Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, and Nashik.
                        </p>
                    </div>
                <Testimonial/>
                </div>
            </div>
        </>
    );
}

export default Grow;
