import React from 'react';
import './style.scss';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import userImage from '../../assets/user-image.png';

const Comments: React.FC = () => {
  const users = [
    {
      image: userImage,
      name: 'Felipe Salmim',
      role: 'Designer',
      comment: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for ‘lorem ipsum’`,
    },
    {
      image: userImage,
      name: 'Felipe Salmim',
      role: 'Designer',
      comment: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for ‘lorem ipsum’`,
    },
  ];

  return (
    <section id="comments">
      <div className="wrapper">
        <Slider>
          {users.map((user) => (
            <div className="comments-box">
              <div className="user">
                <img src={user.image} alt="user-image" className="user-image" />
                <div className="user-content">
                  <span className="user-name bold">{user.name}</span>
                  <small className="user-role">{user.role}</small>
                </div>
              </div>
              <div className="comment">
                <p>{user.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Comments;
