import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev" />
      <ul>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.CTO at @Rocketseat. Passionate
              about education and changing people's lives through programming.
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
        <li>
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt=""
          />
          <footer>
            <strong>Diego Fernandes</strong>
            <p>
              CTO at @Rocketseat. Passionate about education and changing
              people's lives through programming.
            </p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={like} alt="like" />
            </button>
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
