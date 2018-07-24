import React, { Component } from 'react';
import Cable__info from './Cable__info';
import Cable__img from './Cable__img';
import './style.css'

class Activity_Cable extends Component {
  render() {
    return (
      <div className="cable">
        <Cable__img />
        <Cable__info />
      </div>
    );
  }
}

export default Activity_Cable;