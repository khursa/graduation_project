import React, { Component } from 'react';
import Footer_socialicon from './Footer_socialicon';
import Footer_copyright from './Footer_copyright';
import '../../smooth_scroll.js';
import './style.css'

class Footer extends Component {
  render() {
    return (
      <section className="main_footer parallax parallax-contact section container">
        <Footer_socialicon />
        <Footer_copyright />
      </section>
    );
  }
}

export default Footer;