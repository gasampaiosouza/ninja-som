import React from 'react';
import { modalType } from '../../interfaces';

interface modalContentType {
  data: modalType;
}

const ModalContent: React.FC<modalContentType> = ({ data: info }) => {
  return (
    <div className="modal-box">
      <img src={info.photo} alt={info.productName} />
      <div className="content">
        <h1 className="title">{info.productName}</h1>
        <span className="price bold">{`R$ ${info.price}`}</span>
        <p className="description">{info.descriptionShort}</p>
        <a href="#" className="link">
          Veja mais detalhes do produto
        </a>

        <button className="btn solid">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default ModalContent;
