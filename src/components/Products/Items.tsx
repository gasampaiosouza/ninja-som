import React, { useState, memo } from 'react';
import dataType, { modalType } from '../../interfaces';

import './style.scss';
import './modal.scss';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import fixPrice from './fixPrice';

import ModalContent from './ModalContent';
import Product from './Product';

interface itemsType {
  data: dataType[];
}

const Items = ({ data }: itemsType) => {
  const [info, setInfo] = useState<modalType>({ open: false });

  const openInfo = (data: modalType) =>
    setInfo({
      /* i think it's better without destructuring, for reading purposes */
      open: data.open,
      photo: data.photo,
      productName: data.productName,
      price: data.price,
      descriptionShort: data.descriptionShort,
    });

  const closeInfo = () => setInfo({ open: false });

  if (!data) return <h1>loading...</h1>;

  return (
    <div id="products">
      {data.map(({ photo, productName, price, descriptionShort }, index) => {
        const priceWithComma = fixPrice(price!.toString());

        return (
          <Product
            key={index}
            openInfo={openInfo}
            data={{
              open: true,
              photo,
              productName,
              price: priceWithComma,
              descriptionShort,
            }}
          />
        );
      })}

      <Modal
        onClose={closeInfo}
        open={info.open}
        center={true}
        animationDuration={250}
      >
        <ModalContent data={info} />
      </Modal>
    </div>
  );
};

export default memo(Items);
