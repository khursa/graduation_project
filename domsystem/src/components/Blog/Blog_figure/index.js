import React, { Component } from 'react';
import './style.css';

class Blog_figure extends Component {

  render() {
    return (
      <div className="figurebox">
        <figure className="absolute-bg preview__img"></figure>
        <figure className="absolute-bg preview__img"></figure>
        <figure className="absolute-bg preview__img"></figure>
        <figure className="absolute-bg preview__img"></figure>
        <figure className="absolute-bg preview__img"></figure>    
      </div>
    );
  }
}

export default Blog_figure;