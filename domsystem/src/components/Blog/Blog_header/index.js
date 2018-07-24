import React, { Component } from 'react';
import './style.css';

class Blog_header extends Component {

  render() {
    return (
      <header className="blog_header">
        <ul className="tabs blog_header-flex">
          <li className="tabs__item" id="td-n1">Статті</li>
          <li className="tabs__item" id="td-n1">Категорії</li>
        </ul>
      </header>
    );
  }
}

export default Blog_header;