import React, { Component } from 'react';
import '../../parallax.js';
import '../../index.css';
import './style.css';
import { Route } from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <section 
        id="2"
        className="about parallax parallax-about section"
        >
          <Route path="/#2" component={() => 
            <div className="about_wrap">
              <h1 className="about_title">
                ДОМАШНІ СИСТЕМИ
              </h1>
              <p className="about_info">
                Робота iз кабельними системами будь-якої складностi, оснащення серверних, побудова локальної мережі, доступ до мережі Інтернет
                Широкий спектр виконувальних робiт: системи Wireless, ВОЛ3, СКУД, IP-вiдеоспостереження, супутникове обладнання, автоматизація, сонячне електроживлення, електромонтаж, система "розумний будинок"
                Власний штат досвідченних iнженерiв, висококвалiфiкованих монтажникiв та колл-центр, який працює для Вас без вихідних
                Використання лише надійних та перевiрених матерiалів та обладнання
                Додатковi послуги та сервiси, гарантійне обслуговування
                Виготовлення власної продукції
                Вигідні та зручні для Вас умови cпiвпpaцi
                20 рiчний досвід успішної роботи та безлiч кейсiв!
              </p>
            </div>} 
           />
      </section>
    );
  }
}

export default About;