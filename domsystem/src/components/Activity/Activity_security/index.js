import React, { Component } from 'react';
import Security__info from './Security__info';
import Security__img from './Security__img';
import './style.css'

class Activity_security extends Component {
  render() {
    return (
      <div className="security">
        <Security__info />
        <Security__img />
      </div>
    );
  }
}

export default Activity_security;