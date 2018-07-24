import React, { Component } from 'react';
import './style.css'

class Cable__info extends Component {
  render() {
    return (
      <div className="cable__info">
        <Cable__title cable__title="КАБЕЛЬНІ СИСТЕМИ"/>
        <Cable__subtitle__web  subtitle__web ="Локальні мережі"/>
        <Cable__text1 cable__text__1="Проектування монтаж, ослуговування, 
        аудит та тестування структурованих кабельних систем, побудова 
        локальних мереж підприємств та офісів"/>
        <Cable__subtitle__print  subtitle__print ="Серверні кімнати"/>
        <Cable__text2 cable__text__2="Оснаження серверних кімнат та шаф для обладнання"/>
      </div>
    );
  }
}

const Cable__title = (props) => {
  return (
     <h2 className="cable__title">
        { props.cable__title }     
    </h2>
  )
}

const Cable__subtitle__web = (props) => {
  return (
    <div>
      <p className="cable__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Cable__subtitle__print = (props) => {
  return (
    <div>
      <p className="cable__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Cable__subtitle__photo = (props) => {
  return (
    <div>
      <p className="cable__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Cable__text1 = (props) => {
  return (
     <p className="cable__text--1">
        { props.cable__text__1 }     
    </p>
  )
}

const Cable__text2 = (props) => {
  return (
     <p className="cable__text--2">
        { props.cable__text__2 }     
    </p>
  )
}

const Cable__text3 = (props) => {
  return (
     <p className="cable__text--3">
        { props.cable__text__3 }     
    </p>
  )
}

export default Cable__info;