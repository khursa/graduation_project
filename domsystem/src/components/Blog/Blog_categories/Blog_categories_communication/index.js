import React, { Component } from 'react';
import '../style.css';

class Blog_categories_communication extends Component {

  render() {
    return (
     <div className="card">
      <div className="card__link">
        <div className="card__img" id="communication-bg"></div>
        <div className="card__container">
          <h2 className="card__header">Мережеві технології</h2>
          <p className="card__count">2 статті</p>
          <a className="card__more">Переглянути</a>
        </div>
      </div>
    </div>
    );
  }
}

export default Blog_categories_communication;