import React, { Component } from 'react';
import './style.css'

class Facebook extends Component {
  render() {
    return (
      <li>
        <a 
          href="https://www.facebook.com/domashnie.sistemy/" 
          className="icon-facebook"
          target="_blank"
          >
          Facebook
        </a>
      </li>
    );
  }
}

export default Facebook;