import React, { Component } from 'react';
import '../../../menu.js';
import './style.css'

class Activity_title extends Component {
  render() {
    return (
      <div 
      className="activity__wrap section" 
      id="2"
      >
          <div className="activity__info">
            <Activity_header  
            activity__title='НАПРЯМКИ ДIЯЛЬНОСТI'

            />    
            <p className="activity__text">
            Діяльність ТОВ "ДОМАШНІ СИСТЕМИ" охоплює широкий спектр виконуваних робiт, 
            спрямований на створення комплексних рішень в галузі інформаційних технологій, 
            побудову складних взаємопов'язаних масштабованих систем функціонування автоматизованих процесів, 
            та ітнерації їх в одну єдину інформаційно-комунікаційну інфраструктуру
            </p>  
          </div>
      </div>
    );
  }
}

const Activity_header = (props) => {
  return (
     <h2 className="activity__title">
        { props.activity__title }     
    </h2>
  )
}


export default Activity_title;