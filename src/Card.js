import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './img/business-card-img.jpg';
import Email from './img/email.png';
import Linkedin from './img/linkedin.png';
import Instagram from './img/instagram.svg';
import Github from './img/github.svg';
import Discord from './img/discord.svg';
import Telegram from './img/telegram.svg';

export default function Card() {
  return (
    <body>
      <div className="business-card">
        <img src={Photo}></img>
        <h1>Artur Kudyrko</h1>
        <p>Frontend Developer</p>
        <div className="btn-container">
          <button className="email">
            <img src={Email} className="email-img"></img>Email
          </button>
          <button className="linkedin">
            <img src={Linkedin} className="email-img"></img>LinkedIn
          </button>
        </div>
        <div className="about-me">
          <h2>About</h2>
          <p>
            As a passionate and detail-oriented frontend developer, I thrive on
            creating engaging and user-friendly web experiences. With a strong
            foundation in HTML, CSS, and JavaScript, I am dedicated to crafting
            clean and efficient code that brings designs to life.
          </p>
        </div>
        <div className="interests">
          <h2>Interests</h2>
          <p>
            As a frontend developer, I am deeply passionate about crafting
            delightful user experiences and intuitive interfaces. I find joy in
            turning creative designs into interactive and responsive web
            applications.
          </p>
        </div>
        <div className="social-medias">
          <img src={Instagram}></img>
          <img src={Telegram}></img>
          <img src={Discord}></img>
          <img src={Github}></img>
        </div>
      </div>
    </body>
  );
}
