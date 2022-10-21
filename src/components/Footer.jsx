import React, { Component } from 'react';
import '../style/Footer.scss';

export default class Footer extends Component {
  render() {
    const getDate = new Date().getFullYear();
    return (
      <footer className="Footer">
        <p>
          Made with
          {' '}
          <span>♥</span>
          {' '}
          by:
          {' '}
          <a href="https://www.linkedin.com/in/aysllan-ferreira-61aa58228/" target="_blank" rel="noreferrer">Aysllan Ferreira</a>
          {' '}
          {`${getDate}`}
        </p>
      </footer>
    );
  }
}
