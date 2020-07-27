import React from 'react';
import { modalType } from '../../interfaces';

interface productType {
  data: modalType;
  key: number;
  openInfo: Function;
}

const Product: React.FC<productType> = ({ data, key, openInfo }) => {
  return (
    <div className="products-box" key={key}>
      <img
        className="products-box-image"
        src={data.photo}
        alt={`Foto ${data.productName}`}
      />
      <div
        className="search-overlay"
        onClick={() =>
          openInfo({
            open: true,
            photo: data.photo,
            productName: data.productName,
            price: data.price,
            descriptionShort: data.descriptionShort,
          })
        }
      >
        <i className="fas fa-search search-overlay-icon"></i>
        <small className="search-overlay-description">Quick view</small>
        <div className="overlay"></div>
      </div>
      <h2 className="title">{data.productName}</h2>
      <p className="description light">{data.descriptionShort}</p>
      <h1 className="price">{`R$ ${data.price}`}</h1>
    </div>
  );
};

export default Product;
