import React from 'react';

function FormModal(props) {
    return (
        <>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                
                <div class="modal-dialog  modal-dialog-centered ">
                    <div class="modal-content">
                        {/* <div class="modal-header"></div> */}
                        <div class="modal-body custom-modal-body p-sm-4 p-lg-0 p-md-0 pe-md-4 pe-lg-4 p-4">
                            <div className="row text-center align-items-center">
                                <button type="button" class="btn-close estimate-close" data-bs-target="#exampleModalToggle2" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="col-lg-5 col-md-6 col-sm-12 col-12 d-lg-block d-md-block d-none">
                                    <div className="left-side">
                                        <h1 className='get-estimate'> {props.title} </h1>
                                        <p className="please-fill-in-the">
                                            Please fill in the details,
                                            <br /> so we can provide you with the
                                            <br /> best of our services
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-12 d-block d-lg-none d-md-none">
                                   <div className="">
                                    <h3>Your Quick Quote</h3>
                                    <p>is 1 step away</p>
                                   </div>
                                </div>
                                <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                                    <div className="right-side  mt-lg-4  mt-md-4">
                                        <div className="d-flex justify-content-between back-to-cat">
                                            <h6>{props.title}</h6>
                                            <h6><a href='' className="text-decoration-none" data-bs-target="#estimateModal" data-bs-toggle="modal">Change</a></h6>
                                        </div>
                                        <div className="form-popup text-start">
                                            <form class="g-3 needs-validation" novalidate>
                                                <div class="">
                                                    <label for="validationCustom01" class="form-label">Pickup Address</label>
                                                    <input type="text" class="form-control" id="validationCustom01" placeholder='Enter pickup address' required />
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <label for="validationCustom02" class="form-label">Drop Address</label>
                                                    <input type="text" class="form-control" id="validationCustom02" placeholder='Enter drop address' required />
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div class="">
                                                    <label for="validationCustomUsername" class="form-label">Phone Number</label>
                                                    <div class="input-group has-validation">
                                                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder='Enter your phone number' required />
                                                        <div class="invalid-feedback">
                                                            Please enter valid phone no.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-2">
                                                    <label for="validationCustom03" class="form-label">Name</label>
                                                    <input type="text" class="form-control" id="validationCustom03" placeholder='Enter your name' required />
                                                    <div class="invalid-feedback">
                                                        Enter Name.
                                                    </div>
                                                </div>
                                                <div class="mb-2">
                                                    <button class="btn btn-primary w-100 d-flex justify-content-between" type="submit"><span>Get Estimate </span><span>&rarr;</span></button>
                                                    
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormModal;
