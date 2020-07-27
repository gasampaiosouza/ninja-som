import React, { useState, memo } from 'react';
import dataType from '../../interfaces';

import Fade from 'react-reveal/Fade';
import './style.scss';
import './modal.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import fixPrice from './fixPrice';

interface itemsType {
  data: dataType[];
}

interface modalType extends dataType {
  open: boolean;
}

const Items = ({ data }: itemsType) => {
  const [info, setInfo] = useState<modalType>({ open: false });

  const openInfo = ({
    open,
    photo,
    productName,
    price,
    descriptionShort,
  }: modalType) =>
    setInfo({
      open,
      photo,
      productName,
      price,
      descriptionShort,
    });

  const closeInfo = () => setInfo({ open: false });

  if (!data) return <p>loading...</p>;

  return (
    <Fade right cascade>
      <div id="products">
        {data.map(({ photo, productName, price, descriptionShort }, index) => {
          const priceWithComma = fixPrice(price!.toString());

          return (
            <div className="products-box" key={index}>
              <img className="image" src={photo} alt={`Foto ${productName}`} />
              <div
                className="search-overlay"
                onClick={() =>
                  openInfo({
                    open: true,
                    photo,
                    productName,
                    price: priceWithComma,
                    descriptionShort,
                  })
                }
              >
                <i className="fas fa-search search-overlay-icon"></i>
                <small className="search-overlay-description">Quick view</small>
                <div className="overlay"></div>
              </div>
              <h2 className="title">{productName}</h2>
              <p className="description light">{descriptionShort}</p>
              <h1 className="price">{`R$ ${priceWithComma}`}</h1>
            </div>
          );
        })}

        <Modal
          onClose={closeInfo}
          open={info.open}
          center={true}
          animationDuration={250}
        >
          <div className="modal-box">
            <img src={info.photo} alt={info.productName} />
            <div className="content">
              <h1 className="title">{info.productName}</h1>
              <span className="price bold">{info.price}</span>
              <p className="description">{info.descriptionShort}</p>
              <a href="#" className="link">
                Veja mais detalhes do produto
              </a>

              <button className="btn solid">Adicionar ao carrinho</button>
            </div>
          </div>
        </Modal>
      </div>
    </Fade>
  );
};

export default memo(Items);
