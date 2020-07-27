import React from 'react';
import './style.scss';

import Fade from 'react-reveal/Fade';

import guitarrist from '../../assets/categories/guitarrist.png';
import microphone from '../../assets/categories/microphone.png';
import soundTable from '../../assets/categories/sound-table.png';
import keyboard from '../../assets/categories/keyboard.png';
import guitar from '../../assets/categories/guitar.png';
import drum from '../../assets/categories/drum.png';

const Categories: React.FC = () => {
  const boxes = [
    { image: guitarrist, label: 'GUITARRAS' },
    { image: microphone, label: 'MICROFONES' },
    { image: soundTable, label: 'MESA DE SOM' },
    { image: keyboard, label: 'TECLADOS' },
    { image: guitar, label: 'VIOLÃO' },
    { image: drum, label: 'BATERIAS' },
  ];

  return (
    <div id="categories">
      <Fade bottom cascade>
        {boxes.map(({ image, label }, index) => (
          <div className="box" key={index}>
            <img src={image} alt={label} className="box-image" />
            <span className="box-label bold">{label}</span>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Categories;
