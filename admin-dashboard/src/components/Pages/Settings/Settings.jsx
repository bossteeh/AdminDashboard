import React from 'react';
import '../Settings/Settings.css';
import IMAGES from '../../../utils/images';

const Settings = () => {
  return (
    <div className="section">
      <div className="profile">
        <p>Edit Profile</p>

        <form action="">
          <div className="profileimg">
            <img src={IMAGES.Profileimg} alt="" />
          </div>
          <label htmlFor="fullname">Full Name</label> <br />
          <input type="text" placeholder="John Kent" />
          <label htmlFor="email">Email Address</label> <br />
          <input type="email" placeholder="kentjohn@gmail.com" />
          <label htmlFor="dob">Date of Birth</label> <br />
          <input type="text" placeholder="DD/MM/YYYY" />
          <label htmlFor="number">Phone Number</label> <br />
          <input type="text" placeholder="081010101016" /> <br />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
