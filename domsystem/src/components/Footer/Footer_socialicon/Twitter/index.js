import React, { Component } from 'react';
import './style.css'

class Twitter extends Component {
  render() {
    return (
      <li>
        <a 
          href="https://twitter.com/domashnisystemi" 
          className="icon-twitter"
          target="_blank"
          >
          Twitter
        </a>
      </li>
    );
  }
}

export default Twitter;