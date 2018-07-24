import React, { Component } from 'react';
import '../style.css';

class Blog_categories_power extends Component {

  render() {
    return (
     <div className="card">
      <div className="card__link">
        <div className="card__img" id="power-bg"></div>  
        <div className="card__container">
          <h2 className="card__header">Енергетика</h2>
          <p className="card__count">3 статті</p>
          <span className="card__more">Переглянути</span>
        </div>
      </div>
    </div>
    );
  }
}

export default Blog_categories_power;