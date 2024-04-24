import React from 'react';
import line from '../images/line.png'
import user from '../images/image 8.png'  
function Testimonial() {
    return (
        <>
            <div className="testimonial-label d-flex align-items-center justify-content-center pb-5">
                <img src={line} alt="" /><p className="testimonial-wrapper">SOME WORDS FROM OUR HAPPY CUSTOMERS</p> <img src={line} alt="" />
            </div>
            <div className="happy-customer">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="textimonial-card">
                            <div className="d-flex gap-4 align-itmes-center">
                                <img src={user} alt="" />
                                <div className="user-info">
                                    <div className='grow-text'>Vinay</div>
                                    <div className='locate'>Nagpur</div>
                                </div>
                            </div>
                            <div className="">
                                <p className="something pt-4">
                                    “Way better than naaka
                                     waalas. Have shifted all my
                                     logistics needs to Porter and I 
                                    can now safely focus on my
                                     business growth. Amazing 
                                    service!”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="textimonial-card">
                            <div className="d-flex gap-4 align-itmes-center">
                                <img src={user} alt="" />
                                <div className="user-info">
                                    <div className='grow-text'>Vinay</div>
                                    <div className='locate'>Nagpur</div>
                                </div>
                            </div>
                            <div className="">
                                <p className="something pt-4">
                                    “Way better than naaka
                                     waalas. Have shifted all my
                                     logistics needs to Porter and I 
                                    can now safely focus on my
                                     business growth. Amazing 
                                    service!”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="textimonial-card">
                            <div className="d-flex gap-4 align-itmes-center">
                                <img src={user} alt="" />
                                <div className="user-info">
                                    <div className='grow-text'>Vinay</div>
                                    <div className='locate'>Nagpur</div>
                                </div>
                            </div>
                            <div className="">
                                <p className="something pt-4">
                                    “Way better than naaka
                                     waalas. Have shifted all my
                                     logistics needs to Porter and I 
                                    can now safely focus on my
                                     business growth. Amazing 
                                    service!”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
