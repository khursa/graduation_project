import React, { Component } from 'react';
import Activity_title from './Activity_title';
import Activity_electro from './Activity_electro';
import Activity_cable from './Activity_cable';
import Activity_chanel from './Activity_chanel';
import Activity_automation from './Activity_automation';
import Activity_security from './Activity_security';
import Activity_solar from './Activity_solar';
import Activity_powersuply from './Activity_powersuply';
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
        <Activity_cable />
        <Activity_chanel />
        <Activity_automation />
        <Activity_security />
        <Activity_solar />
        <Activity_powersuply />
      </section>
    );
  }
}

export default Activity;