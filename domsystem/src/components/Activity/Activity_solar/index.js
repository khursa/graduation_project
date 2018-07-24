import React, { Component } from 'react';
import Solar__info from './Solar__info';
import Solar__img from './Solar__img';
import './style.css'

class Activity_Solar extends Component {
  render() {
    return (
      <div className="solar">
        <Solar__img />
        <Solar__info />
      </div>
    );
  }
}

export default Activity_Solar;