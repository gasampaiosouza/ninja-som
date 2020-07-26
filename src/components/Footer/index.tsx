import React from 'react';
import './style.scss';

import Form from './Form';

import visa from '../../assets/footer/visa.png';
import mastercard from '../../assets/footer/mastercard.png';
import americanExpress from '../../assets/footer/american-express.png';
import dinersClub from '../../assets/footer/diners-club.png';
import boleto from '../../assets/footer/boleto.png';
import rapidssl from '../../assets/footer/rapidssl.png';
import certified from '../../assets/footer/certified.png';

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="first-content">
        <div className="section institutional">
          <h1 className="title">INSTITUCIONAL</h1>
          <ul>
            <a href="#">
              <li>QUEM SOMOS</li>
            </a>
            <a href="#">
              <li>NOSSAS LOJAS</li>
            </a>
          </ul>
        </div>

        <div className="section attendance">
          <h1 className="title">ATENDIMENTO</h1>

          <ul>
            <a href="#">
              <li>FALE CONOSCO</li>
            </a>
            <a href="#">
              <li>VENDAS@NINJASOM.COM.BR</li>
            </a>
          </ul>
        </div>
      </div>

      <div className="second-content">
        <div className="section support">
          <h1 className="title">ATENDIMENTO</h1>

          <ul>
            <a href="#">
              <li>POLÍTICA DE PRIVACIDADE</li>
            </a>
            <a href="#">
              <li>POLÍTICA DE TROCAS</li>
            </a>
            <a href="#">
              <li>PRAZOS DE ENTREGA</li>
            </a>
            <a href="#">
              <li>TERMOS DE USO</li>
            </a>
          </ul>
        </div>

        <div className="section media">
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-facebook icon"></i>
        </div>
      </div>

      <div className="third-content">
        <div className="section payment">
          <h1 className="title">FORMAS DE PAGAMENTO</h1>
          <div className="cards">
            <img className="card" src={visa} alt="visa" />
            <img className="card" src={mastercard} alt="mastercard" />
            <img
              className="card"
              src={americanExpress}
              alt="american-express"
            />

            <img className="card" src={dinersClub} alt="diners-club" />
            <img className="card" src={boleto} alt="boleto" />
          </div>
        </div>

        <div className="section security">
          <h1 className="title">SEGURANÇA</h1>

          <img src={rapidssl} alt="rapid ssl" />
          <img src={certified} alt="vtex certified" />
        </div>
      </div>

      <Form />
    </footer>
  );
};

export default Footer;
