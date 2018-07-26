import React, { Component } from 'react';
import Header__logo from './Header__logo';
import Header__nav from './Header__nav';
import Header__headernav from './Header__headernav';
import '../../parallax.js';
import '../../menu.js';
// import '../../smooth_scroll.js';
import '../../index.css';
import './style.css';
import './media.css';

class Header extends Component {
  render() {
    return (
      <section 
        id="1"
        className="header parallax section"
        >
        <Header__logo />
        <Header__nav />
        <Header__headernav />
        <div className="slideshow">
        <div className="slideshow-image slide_1"></div>
        <div className="slideshow-image slide_2"></div>
        <div className="slideshow-image slide_3"></div>
        <div className="slideshow-image slide_4"></div>
        <div className="slideshow-image slide_5"></div>
      </div>
      </section>
    );
  }
}

export default Header;