import React from 'react';
import './style.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import table from '../../assets/banner/table.jpg';
import guitarrist from '../../assets/banner/guitarrist.jpeg';
import banner from '../../assets/banner/main-banner.jpeg';
import piano from '../../assets/banner/piano.jpeg';
import guitar from '../../assets/banner/guitar.jpeg';

const banners = [
  {
    small: 'LOREM IPSUM DOLOR',
    title: 'SIT AMET',
    subTitle: 'LIPSUM IS COOL',
    cta: 'CONFIRA',
    image: table,
  },
  {
    small: 'LOREM IPSUM DOLOR',
    title: 'SIT AMET',
    subTitle: 'LIPSUM IS COOL',
    cta: 'CONFIRA',
    image: guitarrist,
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
    subTitle: 'LIPSUM IS COOL',
    cta: 'CONFIRA',
    image: piano,
  },
  {
    small: 'LOREM IPSUM DOLOR',
    title: 'SIT AMET',
    subTitle: 'LIPSUM IS COOL',
    cta: 'CONFIRA',
    image: guitar,
  },
];

const renderBanners = (
  { small, title, subTitle, cta, image },
  index: number
) => (
  <div className="banner-container" key={index}>
    <div className="banner-content">
      <span className="light">{small}</span>
      <h1 className="title bold highlight">{title}</h1>
      <h1 className="light sub-title highlight">{subTitle}</h1>

      <button className="banner-button">{cta}</button>

      <img src={image} alt="banner image" className="banner-image" />
    </div>
  </div>
);

const Banner: React.FC = () => {
  return (
    <section id="banner">
      <Slider infinite={true} autoplay={7500} slideIndex={2}>
        {banners.map(renderBanners)}
      </Slider>
    </section>
  );
};

export default Banner;
