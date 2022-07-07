import React from 'react';
import '../Sidenav/Sidenav.css';
import IMAGES from '../../utils/images';

const Sidenav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={IMAGES.Logo} alt="" />
        <p>Language Acad</p>
      </div>
      <br />
      <br />
      <div className="downlines">
        <div className="charts">
          <img src={IMAGES.Charts} alt="" />
          <p>Charts</p>
        </div>
        <div className="referrals">
          <img src={IMAGES.Referrals} alt="" />
          <p>Referrals</p>
        </div>
        <div className="referrals">
          <img src={IMAGES.Transactions} alt="" />
          <p>Transactions</p>
        </div>
        <div className="referrals">
          <img src={IMAGES.Payouts} alt="" />
          <p>Payouts</p>
        </div>
      </div>
      <br />
          <br />
          

        <hr />
      <div className='downlines'>
        <div className="referrals">
          <img src={IMAGES.Settings} alt="" />
          <p>Settings</p>
        </div>
        <div className="referrals">
          <img src={IMAGES.Home} alt="" />
          <p>Home</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidenav;
