import React, { Component } from 'react';
import Activity__info from './Activity__info';
import Activity__img from './Activity__img';
import './style.css'

class Activity_chanel extends Component {
  render() {
    return (
      <div className="electro">
        <Activity__info />
        <Activity__img />
      </div>
    );
  }
}

export default Activity_chanel;