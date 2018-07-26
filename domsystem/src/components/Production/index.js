import React, { Component } from 'react';
import '../../parallax.js';
import '../../index.css';
import './style.css';


class Production extends Component {
  
 calcOpen() {
    document.querySelector(".top-nav .menu-open").addEventListener("click", () => {
    document.querySelector(".top-nav .menu-wrapper").classList.add("is-opened");
    });
  }

  calcClose() {   
    document.querySelector(".top-nav .menu-close").addEventListener("click", () => {
    document.querySelector(".top-nav .menu-wrapper").classList.remove("is-opened");
    });
  }
  
  render() {
    return (
      <section className="production parallax parallax-production section" id="4">
        <section className="top-banner">
  <div className="top-banner-overlay">
    <h2>Виготовлення антенно-щоглових конструкцій</h2>
    <p>
    </p>
  </div>
</section>
<nav className="top-nav">
  <div className="menu-wrapper">
    <br />
    <br />
    <br />
    <br />
    <br />
    <h3>Калькулятор</h3>
    <form>
      <fieldset>
        <input type="text" />
      </fieldset>
    </form>
    <button 
      className="menu-close" 
      aria-label="close menu"
      onClick={this.calcClose.bind(this)}      
      >
        ✕
    </button>
  </div>
  <div className="fixed-menu">
    <button 
      className="menu-open" 
      aria-label="open menu"
      onClick={this.calcOpen.bind(this)}

      >
        ☰
    </button>
  </div>
</nav>        
      </section>
    );
  }
}

export default Production;