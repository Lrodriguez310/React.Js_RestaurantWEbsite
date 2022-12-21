import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={ images.chef} alt="chef img"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
    
    <div className="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="quote"/>
        <p className="p__opensans">I work hard to give you the best food your mouth has ever tasted. Join us and enjoy my passion.</p>
      </div>
      <p className="p__opensans">Guarantee you will come back for more of my passion or your money back.</p>
    </div>

    <div className="app__chef-sign">
      <p>Kevin Luis</p>
      <p className="p__opensans">Chef & Founder</p>
      <img src={images.sign} alt="sign img" />
    </div>
    </div>
  </div>
);

export default Chef;
