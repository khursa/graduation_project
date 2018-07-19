import React, { Component } from 'react';
import '../../parallax.js';
import '../../index.css';
import './style.css'
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import p4 from './p4.jpg';


class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio parallax parallax-portfolio section" id="5">
        <section id="projects">
          <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>Автосалон "Рено"</h3>
                <p>Електромонтаж, контроль доступу, відеоспостереження</p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p1} />
            </div>
          </div>
          <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>СТОВ "Більськ"</h3>
                <p>Канал передачі данних, відеоспостереження, сигналізація</p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p2} />
            </div>
          </div>
          <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>ТОВ "Ковчег-Агро"</h3>
                <p>Електромонтаж, система відеоспостереження</p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p3} />
            </div>
          </div>
          <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>ХПП</h3>
                <p>Локальна мережа, серверна, ВОЛЗ</p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p4} />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default Portfolio;