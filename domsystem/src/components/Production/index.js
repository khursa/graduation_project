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

      <div className="form_container">
        <h3  className="form_title--prod">Оберіть необхідну комплектацію</h3>
        <div className="items">
          <input id="item1" type="checkbox" checked />
          <label for="item1">Виготовлення щоглової споруди</label>

          <input id="item2" type="checkbox" />
          <label for="item2">Установчий блок під мачту</label>

          <input id="item3" type="checkbox" />
          <label for="item3">Установчий блок під розтяжки</label>

          <input id="item4" type="checkbox" />
          <label for="item4">Момплект метизів</label>

          <input id="item5" type="checkbox" />
          <label for="item5">Транспортування споруди на монтажний майданчик</label>

          <input id="item6" type="checkbox" />
          <label for="item6">Монтаж щоглової споруди</label>

          <h4 className="done" aria-hidden="true">Замовлено</h4>
          <h4 className="undone" aria-hidden="true">Можливо замовити додатково</h4>
        </div>
      </div>

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