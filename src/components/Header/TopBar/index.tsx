import React from 'react';

import lock from '../../../assets/menu/lock.svg';
import arrow from '../../../assets/menu/two-arrows.svg';
import percentage from '../../../assets/menu/percentage.svg';
import truck from '../../../assets/menu/delivery-truck.svg';

import style from './style.module.scss';

const TopBar: React.FC = () => {
  const items = [
    {
      text: (
        <p>
          compra <span className="bold">100% segura</span>
        </p>
      ),
      icon: lock,
    },
    {
      text: <span className="bold">1º troca grátis</span>,
      icon: arrow,
    },
    {
      text: <span className="bold">5x sem juros</span>,
      icon: percentage,
    },
    {
      text: (
        <p>
          entregas em <span className="bold">todo o brasil</span>
        </p>
      ),
      icon: truck,
    },
  ];

  return (
    <div className={style['top-bar']}>
      {items.map(({ icon, text }, index) => (
        <div className={style['top-bar-item']} key={index}>
          <img
            src={icon}
            alt={`${icon}`}
            className={style['top-bar-icon']}
            draggable={false}
          />
          <span className={style['top-bar-text']}>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default TopBar;
