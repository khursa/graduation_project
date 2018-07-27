import React, { Component } from 'react';
import './style.css'

class Activity__info extends Component {
  render() {
    return (
      <div className="chanel__info">
        <Activity__titles activity__titles="КАНАЛИ ЗВ'ЯЗКУ"/>
        <Activity__subtitle__web  subtitle__web ="ВОЛЗ ТА ETHERNET"/>
        <Activity__text1 activity__text__1="Прокладання та обслуговування волоконно-оптичних ліній зв'язку"/>
        <Activity__subtitle__print  subtitle__print ="WIMAX"/>
        <Activity__text2 activity__text__2="Текст про модернізацію електричних мереж. 
        Текст про проектування електричних мереж. Текст про проектування електричних мереж."/>
        <Activity__subtitle__photo  subtitle__photo ="Проектування"/>
        <Activity__text3 activity__text__3="Текст про проектування електричних мереж. 
        Текст про проектування електричних мереж. Текст про проектування електричних мереж."/>
      </div>
    );
  }
}

const Activity__titles = (props) => {
  return (
     <h2 className="chanel__titles">
        { props.activity__titles }     
    </h2>
  )
}

const Activity__subtitle__web = (props) => {
  return (
    <div>
      <p className="chanel__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Activity__subtitle__print = (props) => {
  return (
    <div>
      <p className="chanel__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Activity__subtitle__photo = (props) => {
  return (
    <div>
      <p className="chanel__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Activity__text1 = (props) => {
  return (
     <p className="chanel__text--1">
        { props.activity__text__1 }     
    </p>
  )
}

const Activity__text2 = (props) => {
  return (
     <p className="chanel__text--2">
        { props.activity__text__2 }     
    </p>
  )
}

const Activity__text3 = (props) => {
  return (
     <p className="chanel__text--3">
        { props.activity__text__3 }     
    </p>
  )
}

export default Activity__info;