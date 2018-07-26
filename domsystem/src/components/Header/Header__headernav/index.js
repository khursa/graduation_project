import React, { Component } from 'react';
import Nav__list from './Nav__list';
import '../../../menu.js';
import './style.css'
import './media.css'

class Header__headernav extends Component {
  render() {
    return (
      <nav 
        className="headerheader__nav"
        >
          <Nav__list />
      </nav>
    );
  }
}

export default Header__headernav;