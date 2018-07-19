import React, { Component } from 'react';
import Activity_title from './Activity_title';
import Activity_electro from './Activity_electro';
import '../../parallax.js'
import '../../menu.js';
import '../../index.css';
import './style.css';

class Activity extends Component {
  render() {
    return (
      <section 
        id="3"
        className="activity parallax parallax-activity section"
      >
        <Activity_title />
        <Activity_electro />
      </section>
    );
  }
}

export default Activity;