import React, { Component } from 'react';
import Blog_categories_security from './Blog_categories_security';
import Blog_categories_communication from './Blog_categories_communication';
import Blog_categories_power from './Blog_categories_power';
import Blog_categories_automation from './Blog_categories_automation';
import './style.css';

class Blog_categories extends Component {

  // textOutput() {
  //   return { __html: this.props.value };
  // }

  render() {
    return (
      <div className="tab catbox">
        <div className="cards" id="flexcat">
        {/* <div InnerHTML={ this.textOutput() }> </div> */}
          <div className="cat_row1">
            <Blog_categories_communication />
            <Blog_categories_security />
          </div>
          <div className="cat_row2">
            <Blog_categories_power />
            <Blog_categories_automation />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog_categories;