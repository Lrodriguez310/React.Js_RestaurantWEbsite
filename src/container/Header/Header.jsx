import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour"/>
      <h1 className="app__header-h1">The Key To Your Mouth</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>Here at Gericht we will fulfill your mouths deepest desires. We specialize in giving your tastebuds
      the most incredible experience of your life.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
