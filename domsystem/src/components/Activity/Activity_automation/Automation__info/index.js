import React, { Component } from 'react';
import './style.css'

class Automation__info extends Component {
  render() {
    return (
      <div className="Automation__info">
        <Automation__title automation__title="АВТОМАТИЗАЦІЯ"/>
        <Automation__subtitle__web  subtitle__web ="АВТОМАТИЗАЦІЯ ПІДПРИЄМСТВ"/>
        <Automation__text1 automation__text__1="Системи автоматизації на підприємствах, 
        автоматичне управління механізмами та інженерними системами"/>
        <Automation__subtitle__print  subtitle__print ="АВТОМАТИЗАЦІЯ ВИРОБНИЦТВА"/>
        <Automation__text2 automation__text__2="Механізація основних операцій виробничого процесу"/>
        <Automation__subtitle__print  subtitle__photo ="СИСТЕМА РОЗУМНИЙ БУДИНОК"/>
        <Automation__text2 automation__text__3="Керування освітленням, кондиціонуванням, вентиляцією, системами опалення, 
        системами безпеки, системою контролю доступу, відеоспостереженням, побутовими приладами"/>
      </div>
    );
  }
}

const Automation__title = (props) => {
  return (
     <h2 className="automation__title">
        { props.automation__title }     
    </h2>
  )
}

const Automation__subtitle__web = (props) => {
  return (
    <div>
      <p className="automation__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Automation__subtitle__print = (props) => {
  return (
    <div>
      <p className="automation__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Automation__subtitle__photo = (props) => {
  return (
    <div>
      <p className="automation__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Automation__text1 = (props) => {
  return (
     <p className="automation__text--1">
        { props.automation__text__1 }     
    </p>
  )
}

const Automation__text2 = (props) => {
  return (
     <p className="automation__text--2">
        { props.automation__text__2 }     
    </p>
  )
}

const Automation__text3 = (props) => {
  return (
     <p className="automation__text--3">
        { props.automation__text__3 }     
    </p>
  )
}

export default Automation__info;