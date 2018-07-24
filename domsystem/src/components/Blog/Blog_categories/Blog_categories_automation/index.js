import React, { Component } from 'react';
import '../style.css';

class Blog_categories_automation extends Component {

  render() {
    return (
     <div className="card">
      <div className="card__link">
        <div className="card__img" id="automation-bg"></div>
        <div className="card__container">
          <h2 className="card__header">Автоматизація</h2>
          <p className="card__count">1 стаття</p>
          <span className="card__more">Переглянути</span>
        </div>
      </div>
    </div>
    );
  }
}

export default Blog_categories_automation;