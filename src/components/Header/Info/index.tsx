import React from 'react';

import logo from '../../../assets/menu/logo.png';
import search from '../../../assets/menu/search-icon.svg';
import whatsapp from '../../../assets/menu/whatsapp.png';
import userAvatar from '../../../assets/menu/user-avatar.svg';
import shoppingBag from '../../../assets/menu/shopping-bag.svg';

import style from './style.module.scss';

const Info: React.FC = () => {
  return (
    <div className={style.info}>
      <a href="/">
        <img src={logo} alt="Ninja Som" className={style.logo} />
      </a>

      <div className={`input ${style.input}`}>
        <input type="text" placeholder="BUSQUE AQUI..." />

        <img src={search} alt="search icon" className={style.icon} />
      </div>

      <div className={style.whatsapp}>
        <img src={whatsapp} alt="whatsapp" className={style['whatsapp-icon']} />
        <strong>(11) 99999-9999</strong>
      </div>

      <div className={style.user}>
        <img
          src={userAvatar}
          alt="user-avatar"
          className={style['user-avatar']}
        />
        <div className={style['user-text']}>
          <strong className={`${style['user-text-greet']} dropdown`}>
            OLÁ, VISITANTE
          </strong>
          <a href="/">
            <small>MINHA CONTA</small>
          </a>
        </div>
      </div>

      <div className={style.cart}>
        <img src={shoppingBag} alt="shopping-bag" />
        <small>SEU CARRINHO</small>
        <strong>0 item (s)</strong>
      </div>
    </div>
  );
};

export default Info;
