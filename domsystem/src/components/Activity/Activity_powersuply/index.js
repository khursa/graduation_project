import React, { Component } from 'react';
import Powersuply__info from './Powersuply__info';
import Powersuply__img from './Powersuply__img';
import './style.css'

class Activity_powersuply extends Component {
  render() {
    return (
      <div className="powersuply">
        <Powersuply__info />
        <Powersuply__img />
      </div>
    );
  }
}

export default Activity_powersuply;