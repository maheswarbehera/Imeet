import React from 'react';
import './Footer.css';
import  Vector3 from '../images/Vector (3).svg';
import  Vector4 from '../images/Vector (4).svg';
import  Vector5 from '../images/Vector (5).svg';
import email from '../images/email-outline.svg';
import phone from '../images/phone.svg';
import map from '../images/map-marker-radius-outline.svg'
function Footer(props) {
    return (
        <>
            <footer>
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12">
                            <div className='footer-logo pb-4'>{props.logo}</div>
                            <div className="info">
                            <p>With iMeet's robust collaboration features,
                                you can easily connect with fellow developers,
                                share code snippets, and brainstorm ideas in real-time.
                            </p></div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <div className="footer-links w-50 mx-auto">
                                <h2 className="title">Quick Links</h2>
                                <ul className='list-unstyled'>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                    <li><a href="/">Terms & Condition</a></li>
                                    <li><a href="/">Privacy & policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <div className="footer-links w-50 mx-auto">
                                <h2 className="title">Contact</h2>
                                <ul className='list-unstyled'>
                                    <li>
                                        <div className='gap-2 d-flex align-items-center'>
                                            <img src={phone} alt="" />
                                        <span>+91 000000000</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='gap-2 d-flex align-items-center'>
                                            <img src={email} alt="" />
                                            
                                            <span>imeet.mathura@gmail.com</span>
                                        </div>
                                        </li>
                                    <li>
                                        <div className='gap-2 d-flex align-items-center'>
                                            <img src={map} alt="" />
                                            <span>Mathura, Uttar Pradesh</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className='d-flex gap-2'>
                                    <img className='icon' src={Vector3} alt="" />
                                    <img className='icon' src={Vector4} alt="" />
                                    <img className='icon' src={Vector5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
                <div className="copyright text-center py-4">Copyright @ 2023 iMeet</div>
             
        </>
  );
}

export default Footer;
