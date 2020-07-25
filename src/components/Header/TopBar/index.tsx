import React from 'react';

import lock from '../../../assets/menu/lock.svg';
import arrow from '../../../assets/menu/two-arrows.svg';
import percentage from '../../../assets/menu/percentage.svg';
import truck from '../../../assets/menu/delivery-truck.svg';

import style from './style.module.scss';

const TopBar: React.FC = () => {
  const items = [
    {
      icon: lock,
      text: (
        <p>
          compra <b>100% segura</b>
        </p>
      ),
    },
    {
      icon: arrow,
      text: <b>1º troca grátis</b>,
    },
    {
      icon: percentage,
      text: <b>5x sem juros</b>,
    },
    {
      icon: truck,
      text: (
        <p>
          entregas em <b>todo o brasil</b>
        </p>
      ),
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
