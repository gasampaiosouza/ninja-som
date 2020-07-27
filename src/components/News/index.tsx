import React from 'react';
import './style.scss';

import Fade from 'react-reveal/Fade';

const News: React.FC = () => {
  const news = [
    { title: 'ÁUDIO', subTitle: 'PROFISSIONAL', independentClass: 'audio-box' },
    {
      title: 'INSTRUMENTOS',
      subTitle: 'MÚSICAIS',
      independentClass: 'instruments-box',
    },
  ];

  return (
    <div id="news">
      <Fade top cascade>
        {news.map(({ title, subTitle, independentClass }, index) => (
          <div className={`news-box ${independentClass}`} key={index}>
            <small className="label light">NOVIDADES</small>
            <h1 className="title bold">{title}</h1>
            <h1 className="sub-title regular">{subTitle}</h1>

            <button className="btn outlined">CONFIRA</button>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default News;
