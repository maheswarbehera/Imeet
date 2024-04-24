import React from 'react';
import banner from '../images/image 1 (1).png'
function Banner() {
  return (
    <div className="image">
    <div className="image-wrapper">
      <img className="w-100" alt="banner" src={banner} />
    </div>
  </div>
  );
}

export default Banner;
