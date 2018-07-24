import React, { Component } from 'react';
import '../../../../smooth_scroll.js';
import '../../../../menu.js';
import minilogo from '../../../../assets/img/header/minilogo.png';
import './style.css';

class Nav__list extends Component {
  render() {
    return (
      <nav className="nav__list menu">
        <Nav__item 
          link_1="ГОЛОВНА"
          link_2="ПРО НАС"
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
     <ul className="menu__list">
        <li className="menu__item">
          <img 
            className="menu__link minilogo"
            src={ minilogo }
          />
        </li> 
        <li className="menu__item">
          <a 
            className="menu__link link-home active_link"
            href={ '#1' }
          >
           { props.link_1 }
          </a>
        </li>        
        <li className="menu__item">
          <a 
            className="menu__link link-about"
            href={ '#2' }
          >
           { props.link_2 }
          </a>
        </li>               
        <li className="menu__item">
          <a 
            className="menu__link link-activity"
            href={ '#3' }
          >
           { props.link_3 }
          </a>
        </li>        
        <li className="menu__item">
          <a 
            className="menu__link link-production"
            href={ '#4' }
          >
           { props.link_4 }
          </a>
        </li>        
        <li className="menu__item">
          <a 
            className="menu__link link-portfolio"
            href={ '#5' }
          >
           { props.link_5 }
          </a>
        </li>        
        <li className="menu__item">
          <a 
            className="menu__link link-blog"
            href={ '#6' }
          >
           { props.link_6 }
          </a>
        </li>
        <li className="menu__item">
          <a 
            className="menu__link link-contact scroll"
            href={ "#7" }
          >
           { props.link_7 }
          </a>
        </li>
    </ul>
  )
}

export default Nav__list;