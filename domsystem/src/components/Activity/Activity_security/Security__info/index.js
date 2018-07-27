import React, { Component } from 'react';
import './style.css'

class Security__info extends Component {
  render() {
    return (
      <div className="electro__info">
        <Security__title electro__title="СИСТЕМИ БЕЗПЕКИ"/>
        <Security__subtitle__web  subtitle__web ="Аудит"/>
        <Security__text1 electro__text__1="Текст про аудит електричних мереж. Текст про проектування електричних мереж."/>
        <Security__subtitle__print  subtitle__print ="Модернізація"/>
        <Security__text2 electro__text__2="Текст про модернізацію електричних мереж. 
        Текст про проектування електричних мереж. Текст про проектування електричних мереж."/>
        <Security__subtitle__photo  subtitle__photo ="Проектування"/>
        <Security__text3 electro__text__3="Текст про проектування електричних мереж. 
        Текст про проектування електричних мереж. Текст про проектування електричних мереж."/>
      </div>
    );
  }
}

const Security__title = (props) => {
  return (
     <h2 className="electro__title">
        { props.security__title }     
    </h2>
  )
}

const Security__subtitle__web = (props) => {
  return (
    <div>
      <p className="electro__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Security__subtitle__print = (props) => {
  return (
    <div>
      <p className="electro__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Security__subtitle__photo = (props) => {
  return (
    <div>
      <p className="electro__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Security__text1 = (props) => {
  return (
     <p className="electro__text--1">
        { props.security__text__1 }     
    </p>
  )
}

const Security__text2 = (props) => {
  return (
     <p className="electro__text--2">
        { props.security__text__2 }     
    </p>
  )
}

const Security__text3 = (props) => {
  return (
     <p className="electro__text--3">
        { props.security__text__3 }     
    </p>
  )
}

export default Security__info;