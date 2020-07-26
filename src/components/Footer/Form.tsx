import React from 'react';

const Form: React.FC = () => {
  return (
    <section className="form-box">
      <span className="regular">
        ASSINE NOSSO <span className="bold">NEWSLETTER</span> E RECEBA NOVIDADES
        E PROMOÇÕES
      </span>

      <form action="#" id="form">
        <input type="text" placeholder="SEU NOME" />
        <input type="email" placeholder="SEU E-MAIL" />

        <button className="btn outlined">ENVIAR</button>
      </form>
    </section>
  );
};

export default Form;
