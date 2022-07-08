import React from 'react';
import './Topnav.css';
import IMAGES from '../../utils/images';

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="contents">
        <p>My Profile</p>
        <div className="fixed">
          <div className='images'>
            <img src={IMAGES.Search} alt="" />
            <img src={IMAGES.Notification} alt="" />
          </div>
          <img src={IMAGES.Line} alt="" />

          <div className="picnname">
            <p>
              John <br />
              Kent
            </p>
            <img src={IMAGES.Picicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
