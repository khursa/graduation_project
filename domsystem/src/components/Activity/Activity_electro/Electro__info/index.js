import React, { Component } from 'react';
import './style.css'

class Electro__info extends Component {
  render() {
    return (
      <div className="electro__info">
        <Electro__title electro__title="ЕЛЕКТРОМОНТАЖ"/>
        <Electro__subtitle__web  subtitle__web ="Аудит"/>
        <Electro__text1 electro__text__1=""/>
        <Electro__subtitle__print  subtitle__print ="Модернізація"/>
        <Electro__text2 electro__text__2=""/>
        <Electro__subtitle__photo  subtitle__photo ="Проектування"/>
        <Electro__text3 electro__text__3=""/>
      </div>
    );
  }
}

const Electro__title = (props) => {
  return (
     <h2 className="electro__title">
        { props.electro__title }     
    </h2>
  )
}

const Electro__subtitle__web = (props) => {
  return (
    <div>
      <p className="electro__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Electro__subtitle__print = (props) => {
  return (
    <div>
      <p className="electro__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Electro__subtitle__photo = (props) => {
  return (
    <div>
      <p className="electro__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Electro__text1 = (props) => {
  return (
     <p className="electro__text--1">
        { props.electro__text__1 }     
    </p>
  )
}

const Electro__text2 = (props) => {
  return (
     <p className="electro__text--2">
        { props.electro__text__2 }     
    </p>
  )
}

const Electro__text3 = (props) => {
  return (
     <p className="electro__text--3">
        { props.electro__text__3 }     
    </p>
  )
}

export default Electro__info;