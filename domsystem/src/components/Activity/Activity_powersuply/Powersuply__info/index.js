import React, { Component } from 'react';
import './style.css'

class Powersuply__info extends Component {
  render() {
    return (
      <div className="Powersuply__info">
        <Powersuply__title powersuply__title="БЕЗПЕРЕБІЙНЕ ЕЛЕКТРОЖИВЛЕННЯ"/>
        <Powersuply__subtitle__web  subtitle__web ="Аудит"/>
        <Powersuply__text1 powersuply__text__1="Текст про аудит електричних мереж. Текст про проектування електричних мереж."/>
        <Powersuply__subtitle__print  subtitle__print ="Модернізація"/>
        <Powersuply__text2 powersuply__text__2="Текст про модернізацію електричних мереж. 
        Текст про проектування електричних мереж. Текст про проектування електричних мереж."/>
        <Powersuply__subtitle__photo  subtitle__photo ="Проектування"/>
        <Powersuply__text3 powersuply__text__3="Текст про проектування електричних мереж. 
        Текст про проектування електричних мереж. Текст про проектування електричних мереж."/>
      </div>
    );
  }
}

const Powersuply__title = (props) => {
  return (
     <h2 className="Powersuply__title">
        { props.powersuply__title }     
    </h2>
  )
}

const Powersuply__subtitle__web = (props) => {
  return (
    <div>
      <p className="Powersuply__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Powersuply__subtitle__print = (props) => {
  return (
    <div>
      <p className="Powersuply__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Powersuply__subtitle__photo = (props) => {
  return (
    <div>
      <p className="Powersuply__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Powersuply__text1 = (props) => {
  return (
     <p className="Powersuply__text--1">
        { props.powersuply__text__1 }     
    </p>
  )
}

const Powersuply__text2 = (props) => {
  return (
     <p className="Powersuply__text--2">
        { props.powersuply__text__2 }     
    </p>
  )
}

const Powersuply__text3 = (props) => {
  return (
     <p className="Powersuply__text--3">
        { props.powersuply__text__3 }     
    </p>
  )
}

export default Powersuply__info;