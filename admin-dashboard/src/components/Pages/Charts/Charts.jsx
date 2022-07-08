import React from 'react';
import '../Charts/Charts.css';
import IMAGES from '../../../utils/images';

const Charts = () => {
  return (
    <div className="braces">
      <div className="section">
        <div>
          <p>Unresolved</p>
          <strong>60</strong>
        </div>
        <div className="active">
          <p>Overdue</p>
          <strong>16</strong>
        </div>
        <div>
          <p>Open</p>
          <strong>43</strong>
        </div>
        <div>
          <p>On hold</p>
          <strong>64</strong>
        </div>
      </div>
      {/* <div className="trends">
        <div>
          <div>
            <p>Today's trends</p>
            <span>as of 25 May 2019, 09:41 PM</span>
            <div>
              <p>Today</p>
              <p>Yesterday</p>
            </div>
          </div>
          <div>
            <img src={IMAGES.Graph} alt="" />
          </div>
        </div>
        <div className="analysis">
          <div>
            <p>Resolved</p>
            <strong>49</strong>
          </div>
          <div className="active">
            <p>Received</p>
            <strong>426</strong>
          </div>
          <div>
            <p>Average first response time</p>
            <strong>33m</strong>
          </div>
          <div>
            <p>Average response time</p>
            <strong>3h 8m</strong>
          </div>
          <div>
            <p>Resolution within SLA</p>
            <strong>94%</strong>
          </div>
        </div>
      </div> */}
      <div className="ffflex">
        <div className="trends">
          <div className="flxx">
            <div>
              <p>Today's trends</p>
              <span>as of 25 May 2019, 09:41 PM</span>
            </div>
            <div className="today">
              <img src={IMAGES.Bluedivider} alt="" /><p>Toda <br /> y</p>
              <img src={IMAGES.Greydivider} alt="" /><p>Yesterda <br /> y</p>
            </div>
          </div>
          <br />
          <div>
            <img src={IMAGES.Graph} alt="" />
          </div>
        </div>
        <div className="analysis">
          <div>
            <p>Resolved</p>
            <strong>49</strong>
          </div>
          <div className="active">
            <p>Received</p>
            <strong>426</strong>
          </div>
          <div>
            <p>Average first response time</p>
            <strong>33m</strong>
          </div>
          <div>
            <p>Average response time</p>
            <strong>3h 8m</strong>
          </div>
          <div>
            <p>Resolution within SLA</p>
            <strong>94%</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
