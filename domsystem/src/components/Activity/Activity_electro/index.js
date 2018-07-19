import React, { Component } from 'react';
import Electro__info from './Electro__info';
import Electro__img from './Electro__img';
import './style.css'

class Activity_electro extends Component {
  render() {
    return (
      <div className="electro">
        <Electro__info />
        <Electro__img />
      </div>
    );
  }
}

export default Activity_electro;