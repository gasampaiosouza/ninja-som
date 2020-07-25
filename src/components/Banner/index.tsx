import React from 'react';
import './style.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import banner from '../../assets/main-banner.png';

const banners = [
  {
    small: 'LOREM IPSUM DOLOR',
    title: 'SIT AMET',
    subTitle: 'PROFISSIONAIS',
    cta: 'CONFIRA',
    image: banner,
  },
  {
    small: 'LOREM IPSUM DOLOR',
    title: 'SIT AMET',
    subTitle: 'PROFISSIONAIS',
    cta: 'CONFIRA',
    image: banner,
  },
  {
    small: 'NOVOS PRODUTOS',
    title: 'INSTRUMENTOS',
    subTitle: 'PROFISSIONAIS',
    cta: 'CONFIRA',
    image: banner,
  },
  {
    small: 'LOREM IPSUM DOLOR',
    title: 'SIT AMET',
    subTitle: 'PROFISSIONAIS',
    cta: 'CONFIRA',
    image: banner,
  },
  {
    small: 'LOREM IPSUM DOLOR',
    title: 'SIT AMET',
    subTitle: 'PROFISSIONAIS',
    cta: 'CONFIRA',
    image: banner,
  },
];

const renderBanners = ({ small, title, subTitle, cta, image }) => (
  <div className="banner">
    <div className="banner-content">
      <span className="light">{small}</span>
      <h1 className="title highlight">{title}</h1>
      <h1 className="light sub-title highlight">{subTitle}</h1>

      <button className="button">{cta}</button>

      <img src={image} alt="banner" className="banner-image" />
    </div>
  </div>
);

const Banner: React.FC = () => {
  return (
    <section className="banner-container">
      <Slider slideIndex={2}>{banners.map(renderBanners)}</Slider>
    </section>
  );
};

export default Banner;
