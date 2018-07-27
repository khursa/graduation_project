import React, { Component } from 'react';
import '../../parallax.js';
import '../../index.css';
import './style.css'
import p1 from '../../assets/img/portfolio/portfolio_slide_1.jpg';
import p2 from '../../assets/img/portfolio/portfolio_slide_2.jpg';
import p3 from '../../assets/img/portfolio/portfolio_slide_3.jpg';
// import p4 from './p4.jpg';
// import p5 from './p5.jpg';
import p6 from '../../assets/img/portfolio/portfolio_slide_4.jpg';


class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio parallax parallax-portfolio section" id="5">
        <section id="projects">
          <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>ТОВ "СОЛЛІ ПЛЮС ПОЛТАВА"</h3>
                <p>Проектування та прокладка структурованої кабельної системи та локальної мережі,
                   монтаж електромережі та щитової, встановлення опор освітлення,
                  оснащення серверної кімнати, встановлення системи контролю управлінням 
                  доступом та система відеоспостереження, IP-телефонія, автоматичне управління механізмами</p>
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
                <h3>ТОВ "Агрофірма "Маяк"</h3>
                <p>Канал передачі данних, відеоспостереження, сигналізація,
                монтаж електромережі та щитової, встановлення опор освітлення,
                  оснащення серверної кімнати, встановлення системи контролю управлінням 
                  доступом та система відеоспостереження, IP-телефонія, автоматичне управління механізмами
                </p>
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
                <p>Електромонтаж, система відеоспостереження,
                монтаж електромережі та щитової, встановлення опор освітлення,
                  оснащення серверної кімнати, встановлення системи контролю управлінням 
                  доступом та система відеоспостереження, IP-телефонія, автоматичне управління механізмами
                </p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p3} />
            </div>
          </div>
          {/* <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>ТОВ "Агрофірма "Маяк""</h3>
                <p>Локальна мережа, серверна, ВОЛЗ,
                монтаж електромережі та щитової, встановлення опор освітлення,
                  оснащення серверної кімнати, встановлення системи контролю управлінням 
                  доступом та система відеоспостереження, IP-телефонія, автоматичне управління механізмами
                </p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p4} />
            </div>
          </div>
          <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>Кононівський елеватор</h3>
                <p>Локальна мережа, серверна, ВОЛЗ,
                монтаж електромережі та щитової, встановлення опор освітлення,
                  оснащення серверної кімнати, встановлення системи контролю управлінням 
                  доступом та система відеоспостереження, IP-телефонія, автоматичне управління механізмами
                </p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p5} />
            </div>
          </div> */}
          <div class="project">
            <a href="#"></a>
            <div class="infos">
              <div class="text">
                <h3>Кернел Холдинг</h3>
                <p>Локальна мережа, серверна, ВОЛЗ,
                монтаж електромережі та щитової, встановлення опор освітлення,
                  оснащення серверної кімнати, встановлення системи контролю управлінням 
                  доступом та система відеоспостереження, IP-телефонія, автоматичне управління механізмами
                </p>
              </div>
            </div>
            <div class="image">
              <img className="portfolio_slide" src={p6} />
            </div>
            <span className="blog_anchor" id="blog_article_1"></span>
            <span className="blog_anchor" id="blog_article_2"></span>
            <span className="blog_anchor" id="blog_article_3"></span>
            <span className="blog_anchor" id="blog_article_4"></span>
            <span className="blog_anchor" id="blog_article_5"></span>
          </div>
        </section>
      </section>
    );
  }
}

export default Portfolio;