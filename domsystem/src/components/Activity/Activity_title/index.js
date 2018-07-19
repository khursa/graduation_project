import React, { Component } from 'react';
import '../../../menu.js';
import './style.css'

class About__history extends Component {
  render() {
    return (
      <div 
      className="about__history section" 
      id="2"
      >
        <div className="history__wrap">
          <div className="history__info">
            <History__title history__title='ТОВ "ДОМАШНІ СИСТЕМИ"'/>
            <History__text  
            history__text__1='Робота iз кабельними системами будь-якої складностi, оснащення серверних, побудова локальної мережі, доступ до мережі Інтернет
            Широкий спектр виконувальних робiт: системи Wireless, ВОЛ3, СКУД, IP-вiдеоспостереження, супутникове обладнання, автоматизація, сонячне електроживлення, електромонтаж, система "розумний будинок"
            Власний штат досвідченних iнженерiв, висококвалiфiкованих монтажникiв та колл-центр, який працює для Вас без вихідних'
            history__text__2="Використання лише надійних та перевiрених матерiалів та обладнання
            Додатковi послуги та сервiси, гарантійне обслуговування
            Виготовлення власної продукції
            Вигідні та зручні для Вас умови cпiвпpaцi
            20 рiчний досвід успішної роботи та безлiч кейсiв!"
            />          
          </div>
        </div>
      </div>
    );
  }
}

const History__title = (props) => {
  return (
     <h2 className="history__title">
        { props.history__title }     
    </h2>
  )
}

const History__text = (props) => {
  return (
    <div>
      <p className="history__text">
          { props.history__text__1 }     
      </p>
      <p className="history__text">
          { props.history__text__2 }     
      </p>
    </div>  
  )
}

export default About__history;