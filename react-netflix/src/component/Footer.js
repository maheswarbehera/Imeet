import React from "react";
import Language from "./Language";

function Footer() {
  return (
    <>
      <footer className="bg-black py-5">
        <div className="container">
            <div className="pb-4">
            <span>Questions? Call 000-000-000</span>
            </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <ul className=" list-unstyled">
                <li>FAQ</li>
                <li>Media Center</li>
                <li>Ways to Watch</li>
                <li>Cookie Preferences</li>
                <li>Speed Test</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <ul className=" list-unstyled">
                <li>Help Centre</li>
                <li>Investor Relations</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
                <li>Legal Notices</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <ul className=" list-unstyled">
                <li>Account</li>
                <li>Jobs</li>
                <li>Privacy</li>
                <li>Contact Us</li>
                <li>Only on Netflix</li>
              </ul>
            </div>
          </div>
          <div className="pb-3">
            <Language/>
          </div>
          <span className="text-decoration-none">Netflix India</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
