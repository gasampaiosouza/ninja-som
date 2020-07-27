import React from 'react';
import './style.scss';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Fade from 'react-reveal/Fade';

import userImage1 from '../../assets/users/user1-image.jpg';

const Comments: React.FC = () => {
  const users = [
    {
      image: userImage1,
      name: 'Felipe Salmim',
      role: 'Designer',
      comment: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for ‘lorem ipsum’`,
    },
    {
      image: userImage1,
      name: 'Pedro Pereira',
      role: 'Full-stack',
      comment: `Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for ‘lorem ipsum’`,
    },
  ];

  return (
    <section id="comments">
      <div className="wrapper">
        <Slider>
          {users.map((user, index) => (
            <div className="comments-box" key={index}>
              <Fade bottom>
                <div className="user">
                  <img
                    src={user.image}
                    alt="user-image"
                    className="user-image"
                  />
                  <div className="user-content">
                    <span className="user-name bold">{user.name}</span>
                    <small className="user-role">{user.role}</small>
                  </div>
                </div>

                <div className="comment">
                  <p>{user.comment}</p>
                </div>
              </Fade>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Comments;
