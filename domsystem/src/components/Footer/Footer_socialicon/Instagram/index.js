import React, { Component } from 'react';
import './style.css'

class Instagram extends Component {
  render() {
    return (
      <li>
        <a 
          href="https://www.instagram.com/domashni.pro/" 
          className="icon-instagram"
          target="_blank"
          >
          Instagram
        </a>
      </li>
    );
  }
}

export default Instagram;