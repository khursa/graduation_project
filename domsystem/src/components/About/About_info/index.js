import React, { Component } from 'react';
import '../../../menu.js';
import './style.css'

class About_info extends Component {

  render() {
    return (
      <div 
      className="about__about section" 
      id="2"
      >
        <div className="about__wrap">
          <div className="about__info">
            <About__text  
            about__text__1='здійснює роботу iз кабельними системами будь-якої складностi, оздоблює серверні, 
            проектує локальної мережі, надає доступ до мережі Інтернет.
            Здійснюємо широкий спектр виконувальних робiт: системи Wireless, ВОЛ3, СКУД, IP-вiдеоспостереження, 
            супутникове обладнання, автоматизація, 
            сонячне електроживлення, електромонтаж, система "розумний будинок".
            В наявності власний штат досвідченних iнженерiв, висококвалiфiкованих монтажникiв та колл-центр, 
            який працює для Вас без вихідних'
            about__text__2="Використання лише надійних та перевiрених матерiалів та обладнання, 
            додатковi послуги та сервiси, гарантійне обслуговування,
            виготовлення власної продукції, вигідні та зручні умови cпiвпpaцi."
            />          
          </div>
        </div>
      </div>
    );
  }
}

const About__title = (props) => {
  return (
     <span className="about__title">
        { props.about__title }     
    </span>
  )
}

const About__text = (props) => {
  return (
    <div>
      <p className="about__text">
        <span className="letter"> 
          Д
        </span>
        <About__title about__title='омашні системи'/>
          { props.about__text__1 }     
      </p>
      <p className="about__text">
          { props.about__text__2 }     
      </p>
    </div>  
  )
}

export default About_info;