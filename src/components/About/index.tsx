import React from 'react';
import './style.scss';

import Fade from 'react-reveal/Fade';

const About: React.FC = () => {
  return (
    <Fade bottom>
      <div id="about">
        <h1 className="section-title">SOBRE NÓS</h1>
        <p className="section-paragraph">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using ‘Content here, content here’, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for ‘lorem ipsum’ will uncover many web sites still in their
          infancy. Lorem Ipsum as their default model text, and a search for
          ‘lorem ipsum’ will uncover many web sites still in their infancy.
          Lorem Ipsum as their default model text, and a search for ‘lorem
          ipsum’ will uncover many web sites still in their infancy.
        </p>
      </div>
    </Fade>
  );
};

export default About;
