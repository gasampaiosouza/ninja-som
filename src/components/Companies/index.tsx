import React from 'react';
import './style.scss';

import akg from '../../assets/companies/akg-logo.png';
import roland from '../../assets/companies/roland-logo.png';
import boss from '../../assets/companies/boss-logo.png';
import shure from '../../assets/companies/shure-logo.png';
import google from '../../assets/companies/google-logo.png';
import facebook from '../../assets/companies/facebook-logo.png';
import netflix from '../../assets/companies/netflix-logo.png';
import github from '../../assets/companies/github-logo.png';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Companies: React.FC = () => {
  return (
    <div id="companies">
      <h1 className="section-title">
        AS <span className="bold">MELHORES</span> MARCAS
      </h1>
      <p className="section-paragraph">
        It is a long established fact that a reader will be distracted by the
        readable
      </p>

      <Slider infinite={true}>
        <div className="content">
          <img src={akg} alt="akg logo" />
          <img src={roland} alt="roland logo" />
          <img src={boss} alt="boss logo" />
          <img src={shure} alt="shure logo" />
        </div>
        <div className="content">
          <img src={google} alt="akg logo" />
          <img src={facebook} alt="roland logo" />
          <img src={netflix} alt="boss logo" />
          <img src={github} alt="shure logo" />
        </div>
      </Slider>
    </div>
  );
};

export default Companies;
