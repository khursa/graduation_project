import React, { Component } from 'react';
import './style.css'

class Vimeo extends Component {
  render() {
    return (
      <li>
        <a 
          href="https://www.vimeo.com/domsystem/" 
          className="icon-vimeo"
          target="_blank"
          >
          Vimeo
        </a>
      </li>
    );
  }
}

export default Vimeo;