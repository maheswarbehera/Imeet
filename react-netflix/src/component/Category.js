import React from "react";
import Border from "./Border";
import tv from "../assets/images/image 3 (2).png";
import child from "../assets/images/image 7 (1).png";
import download from "../assets/images/image 5 (2).png";
import autoplay from "../assets/images/image 3 (3).png";

function Category() {
  return (
    <>
      <div className="bg-black">
        <div className="">
          <div className="row w-75 mx-auto py-5 align-items-center">
            <div className="col-lg-6">
              <div className="category-wrapper">
                <p className="heading">Enjoy on your TV</p>
                <p className="sub-title">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={tv} alt="tv" />
            </div>
          </div>
          <Border />
          <div className="row w-75 mx-auto py-5 align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid" src={download} alt="tv" />
            </div>
            <div className="col-lg-6">
              <div className="category-wrapper">
                <p className="heading">Download your shows to watch offline</p>
                <p className="sub-title">
                Save your favourites easily and always have something to watch.
                </p>
              </div>
            </div>
          </div>
          <Border />
          <div className="row w-75 mx-auto py-5 align-items-center">
            <div className="col-lg-6">
              <div className="category-wrapper">
                <p className="heading">Watch everywhere</p>
                <p className="sub-title">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={autoplay} alt="tv" />
            </div>
          </div>
          <Border />
          <div className="row w-75 mx-auto py-5 align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid" src={child} alt="tv" />
            </div>
            <div className="col-lg-6">
              <div className="category-wrapper">
                <p className="heading">Create profiles for kids</p>
                <p className="sub-title">
                Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                </p>
              </div>
            </div>
          </div>
          <Border />
        </div>
      </div>
    </>
  );
}

export default Category;
