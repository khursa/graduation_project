import React, { Component } from 'react';
import '../../../../smooth_scroll.js';
import '../../../../menu.js';
import './style.css';

// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Nav__list extends Component {
  render() {
    return (
      <nav className="headernav__list headermenu">
        <Nav__item 
          link_1="ГОЛОВНА"
          link_2="ПРО_НАС"
          link_3="ДІЯЛЬНІСТЬ"
          link_4="ВИРОБНИЦТВО"
          link_5="ПОРТФОЛІО"
          link_6="БЛОГ"
          link_7="КОНТАКТИ"            
        />
      </nav>
    );
  }
}

const Nav__item = (props) => {
  return (
     <ul className="headermenu__list">
        <li className="headermenu__item">
          <a 
            className="headermenu__link headerlink-home headeractive"
            href={ '#1' }
          >
           { props.link_1 }
          </a>
        </li>        
        <li className="headermenu__item">
          <a
            className="headermenu__link headerlink-about"
            href={ '#2' }
          >
           { props.link_2 }
          </a>
        </li>        
        <li className="headermenu__item">
          <a 
            className="headermenu__link headerlink-activity"
            href={ '#3' }
          >
           { props.link_3 }
          </a>
        </li>        
        <li className="headermenu__item">
          <a 
            className="headermenu__link headerlink-production"
            href={ '#4' }
          >
           { props.link_4 }
          </a>
        </li>        
        <li className="headermenu__item">
          <a 
            className="headermenu__link headerlink-portfolio"
            href={ '#5' }
          >
           { props.link_5 }
          </a>
        </li>        
        <li className="headermenu__item">
          <a 
            className="headermenu__link headerlink-blog"
            href={ '#6' }
          >
           { props.link_6 }
          </a>
        </li>
        <li className="headermenu__item">
          <a 
            id="scrollButton"
            className="headermenu__link headerlink-contact"
            href={ '#7' }
          >
           { props.link_7 }
          </a>
        </li>
    </ul>
  )
}

export default Nav__list;