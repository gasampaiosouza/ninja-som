import React from 'react';
import './style.scss';

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
      {news.map(({ title, subTitle, independentClass }) => (
        <div className={`news-box ${independentClass}`}>
          <small className="label light">NOVIDADES</small>
          <h1 className="title bold">{title}</h1>
          <h1 className="sub-title regular">{subTitle}</h1>

          <button className="btn outlined">CONFIRA</button>
        </div>
      ))}
    </div>
  );
};

export default News;
