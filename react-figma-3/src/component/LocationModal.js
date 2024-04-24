import React from 'react';
import location from '../images/image 9.png'
import location1 from '../images/image 9 (1).png'
import location2 from '../images/image 9 (2).png'
import location3 from '../images/image 9 (3).png'
import location4 from '../images/image 9 (4).png'
import location5 from '../images/image 9 (5).png'
function LocationModal() {
    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Choose your city</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-target="#exampleModal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row text-center">
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location} alt="" />
                                        <p>Ahmedabad</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location1} alt="" />
                                        <p>Bangalore</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location2} alt="" />
                                        <p>Chandigarh</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location3} alt="" />
                                        <p>Chennai</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location4} alt="" />
                                        <p>Coimbatore</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location5} alt="" />
                                        <p>Delhi</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location} alt="" />
                                        <p>Ahmedabad</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location1} alt="" />
                                        <p>Bangalore</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location2} alt="" />
                                        <p>Chandigarh</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location3} alt="" />
                                        <p>Chennai</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location4} alt="" />
                                        <p>Coimbatore</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location5} alt="" />
                                        <p>Delhi</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location} alt="" />
                                        <p>Ahmedabad</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location1} alt="" />
                                        <p>Bangalore</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location2} alt="" />
                                        <p>Chandigarh</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location3} alt="" />
                                        <p>Chennai</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location4} alt="" />
                                        <p>Coimbatore</p>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                    <div className="card-tab">
                                        <img src={location5} alt="" />
                                        <p>Delhi</p>
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

export default LocationModal;
