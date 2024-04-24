import React, { useState } from "react";
// import bike from '../images/image 10.png'
// import truck from '../images/image 10 (1).png'
// import parcel from '../images/image 10 (2).png'
import bike from "../images/image 4 (1).png";
import truck from "../images/image 4 (2).png";
import parcel from "../images/image 4 (3).png";
import FormModal from "./FormModal";
function GetEstimate() {
const [title, setTitle] = useState("");
return (
<>
    <div class="modal fade" id="estimateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered ">
            <div class="modal-content">
                {/* <div class="modal-header">

                </div> */}
                <div class="modal-body custom-modal-body p-sm-4 p-lg-0 p-md-0 pe-md-4 pe-lg-4 p-4">
                    <div className="row text-center align-items-center">
                        <button type="button" class="btn-close estimate-close" data-bs-target="#estimateModal"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-lg-block d-md-block d-none">
                            <div className="left-side">
                                <h2 className="get-estimate">
                                    Get an <br /> Estimate
                                </h2>
                                <p className="please-fill-in-the">
                                    Please fill in the details,
                                    <br /> so we can provide you with the
                                    <br /> best of our services
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-12 d-block d-lg-none d-md-none">
                            <div className="">
                                <h3>How can we help you?</h3>
                                <p>Please pick a service we can help you with.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                            <div className="right-side">
                                <div className="vehicle-card">
                                    <div onClick={()=> setTitle("Two Wheelers")}
                                        className="card-popup d-flex align-items-center justify-content-between"
                                        data-bs-target="#exampleModalToggle2"
                                        data-bs-toggle="modal"
                                        >
                                        <img src={bike} alt="" />
                                        <p className="m-0">Two Wheelers</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 40 40" fill="none">
                                            <g clip-path="url(#clip0_175_128)">
                                                <path
                                                    d="M9.7998 6.86659L22.9331 19.9999L9.7998 33.1333L13.3331 36.6666L29.9998 19.9999L13.3331 3.33325L9.7998 6.86659Z"
                                                    fill="#6D6D6D" fill-opacity="0.5" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_175_128">
                                                    <rect width="40" height="40" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div onClick={()=> setTitle("Trucks")}
                                        className="card-popup d-flex align-items-center justify-content-between"
                                        data-bs-target="#exampleModalToggle2"
                                        data-bs-toggle="modal"
                                        >
                                        <img src={truck} alt="" />
                                        <p className="m-0">Trucks</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 40 40" fill="none">
                                            <g clip-path="url(#clip0_175_128)">
                                                <path
                                                    d="M9.7998 6.86659L22.9331 19.9999L9.7998 33.1333L13.3331 36.6666L29.9998 19.9999L13.3331 3.33325L9.7998 6.86659Z"
                                                    fill="#6D6D6D" fill-opacity="0.5" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_175_128">
                                                    <rect width="40" height="40" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div onClick={()=> setTitle("Packers and Movers")}
                                        className="card-popup d-flex align-items-center justify-content-between"
                                        data-bs-target="#exampleModalToggle2"
                                        data-bs-toggle="modal"
                                        >
                                        <img src={parcel} alt="" />
                                        <p className="m-0">Packers and Movers</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 40 40" fill="none">
                                            <g clip-path="url(#clip0_175_128)">
                                                <path
                                                    d="M9.7998 6.86659L22.9331 19.9999L9.7998 33.1333L13.3331 36.6666L29.9998 19.9999L13.3331 3.33325L9.7998 6.86659Z"
                                                    fill="#6D6D6D" fill-opacity="0.5" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_175_128">
                                                    <rect width="40" height="40" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FormModal title={title} />
</>
);
}

export default GetEstimate;