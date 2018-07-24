import React, { Component } from 'react';
import Linkedin from './Linkedin';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Vimeo from './Vimeo';
import './style.css'

class Footer_socialicon extends Component {
  render() {
    return (
      <ul className="social-networks square spin-icon socialicon_list">
        <Linkedin />
        <Twitter />
        <Facebook />
        <Instagram />
        <Vimeo />
      </ul>
    );
  }
}

export default Footer_socialicon;