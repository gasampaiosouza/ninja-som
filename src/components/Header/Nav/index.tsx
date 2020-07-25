import React from 'react';
import style from './style.module.scss';

const Nav: React.FC = () => {
  return (
    <nav className={style.nav}>
      <ul className={style['nav-list']}>
        <li>Todas as categorias</li>
        <li className="dropdown">Som profissional</li>
        <li className="dropdown">Instrumentos musicais</li>
        <li>Promoções</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
};

export default Nav;
