import React, { useState, useEffect } from 'react';
import Items from './Items';

import './style.scss';
import dataType from '../../interfaces';

const Instruments: React.FC = () => {
  const [data, setData] = useState<dataType[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const URL =
      'http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json';

    const itemsOnScreen = 6;

    fetch(`${corsAnywhere}${URL}`)
      .then((response) => response.json())
      .then((data) => setData(data.products.slice(itemsOnScreen)))
      .catch((error) => {
        throw error;
      });
  }, []);

  if (error) return <h1>something went wrong...</h1>;

  return (
    <section className="instruments" id="instruments">
      <h1 className="section-title">
        INSTRUMENTOS <span className="bold">DESTAQUE</span>
      </h1>
      <p className="section-paragraph">
        It is a long established fact that a reader will be distracted by the
        readable
      </p>

      <Items data={data} />

      <button className="btn outlined">VER MAIS</button>
    </section>
  );
};

export default Instruments;
