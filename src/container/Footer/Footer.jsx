import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">677 E New York,NY 10019, USA</p>
        <p className="p__opensans">+1 213-344-1300</p>
        <p className="p__opensans">+1 213-344-1399</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"If you want to become the greatest, you should serve those around you."</p>
        <img src={images.spoon} alt="spoon image" className="spoon__img" style={{ marginTop: 15 }}/>
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">3:30 pm - 02:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Luis Rodriguez. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
