import React, { Component } from 'react';
import About_info from './About_info';
import '../../parallax.js';
import '../../index.css';
import './style.css';


class About extends Component {
  render() {
    return (
      <section 
        id="2"
        className="about parallax parallax-about section"
        >
            <About_info />
      </section>
    );
  }
}

export default About;