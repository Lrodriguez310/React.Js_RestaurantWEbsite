import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g lettering" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We specialize in fine dining and are passionate about giving you an experience that you've never had before.
        We are a team of passionate chefs who work hard to prepare food for kings and queens.</p>
      <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife"/>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We started in France and then moved to the United States to deliver our fine cuisine. We have chef Luigi Bistro who has worked with us for 30 years and is still serving up the best of the best.</p>
      <button type="button" className="custom__button">Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
