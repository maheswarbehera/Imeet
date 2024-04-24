import React from 'react';
import bike from '../images/image 4 (1).png'
import truck from '../images/image 4 (2).png'
import parcel from '../images/image 4 (3).png'
import courier from '../images/image 4 (4).png'
import LocationModal from './LocationModal';
import GetEstimate from './GetEstimate';


function Category(props) {
    return (
        <>
            <div className="location-wrapper">
                <div className="container">
                    <div className="moving-a-billion-wrapper">
                        <div className="rectangle">
                            <div className="d-flex align-items-center p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <rect width="15" height="15" fill="white" />
                                    <path d="M7.5 7.1875C7.0856 7.1875 6.68817 7.02288 6.39515 6.72985C6.10212 6.43683 5.9375 6.0394 5.9375 5.625C5.9375 5.2106 6.10212 4.81317 6.39515 4.52015C6.68817 4.22712 7.0856 4.0625 7.5 4.0625C7.9144 4.0625 8.31183 4.22712 8.60485 4.52015C8.89788 4.81317 9.0625 5.2106 9.0625 5.625C9.0625 5.83019 9.02208 6.03337 8.94356 6.22294C8.86504 6.41251 8.74995 6.58476 8.60485 6.72985C8.45976 6.87495 8.28751 6.99004 8.09794 7.06856C7.90837 7.14708 7.70519 7.1875 7.5 7.1875ZM7.5 1.25C6.33968 1.25 5.22688 1.71094 4.40641 2.53141C3.58594 3.35188 3.125 4.46468 3.125 5.625C3.125 8.90625 7.5 13.75 7.5 13.75C7.5 13.75 11.875 8.90625 11.875 5.625C11.875 4.46468 11.4141 3.35188 10.5936 2.53141C9.77312 1.71094 8.66032 1.25 7.5 1.25Z" fill="#002BFF" />
                                </svg>
                                <span className='city'>City <span className='city-name' data-bs-toggle="modal" data-bs-target="#exampleModal">Ahmedabad</span> </span>
                                {/* modal start*/}
                                <LocationModal />
                                {/* modal end*/}
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M1 6L3.5 9L6 6H1Z" fill="#002BFF" />
                                </svg>
                            </div>
                            <div className="row align-items-center justify-content-center text-center" >
                                <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                                    <div className="card-tab">
                                        <img src={bike} alt="" />
                                        <div className="type">Two Wheelers</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                                    <div className="card-tab">
                                        <img src={truck} alt="" />
                                        <div className="type">Truck</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                                    <div className="card-tab">
                                        <img src={parcel} alt="" />
                                        <div className="type">Packers and Movers</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-6 col-6">
                                    <div className="card-tab">
                                        <img src={courier} alt="" />
                                        <div className="type">Courier Service</div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-12">
                                    <div className="get-an-estimate-wrapper" data-bs-toggle="modal" data-bs-target="#estimateModal">
                                        <div className="get-an-estimate">
                                            Get an
                                            <br /> Estimate
                                            <p className='time'>(takes ~2 mins)</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M0.291748 6.41667V7.58334H9.33341L6.12508 10.7917L6.95341 11.62L11.5734 7L6.95341 2.38L6.12508 3.20834L9.33341 6.41667H0.291748Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>  
                                    {/* modal start*/}
                                    <GetEstimate />
                                    {/* modal end*/}
                                </div>
                            </div>
                        </div>
                        <h1 className="moving-a-billion pb-5">
                            Moving a billion dreams ahead, one delivery at a time. Pursuing an <br />
                            unsaid promise to deliver anything, anywhere, anytime with the <br />
                            collaborative efforts of our driver - partners.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
