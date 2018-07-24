import React, { Component } from 'react';
import Automation__info from './Automation__info';
import Automation__img from './Automation__img';
import './style.css'

class Activity_Automation extends Component {
  render() {
    return (
      <div className="automation">
        <Automation__img />
        <Automation__info />
      </div>
    );
  }
}

export default Activity_Automation;