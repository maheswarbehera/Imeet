import React from "react";
import bgbanner from "../assets/images/image 2 (3).png";
import Subscribe from "./Subscribe";
function Landing() {
  return (
    <>
      <div className="banner">
        <img className="w-100 img-position" src={bgbanner} alt="banner" />
      </div>
        <div className="text-wrapper">
          <p className="heading">Unlimited movies, TV shows and more</p>
          <p className="sub-title">Watch anywhere. Cancel anytime.</p>
          <p className="sub-title">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        <Subscribe/>
      </div>
    </>
  );
}

export default Landing;
