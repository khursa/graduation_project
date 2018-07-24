import React, { Component } from 'react';
import './style.css'

class Solar__info extends Component {
  render() {
    return (
      <div className="Solar__info">
        <Solar__title solar__title="СОНЯЧНА ЕЛЕКТРОЕНЕРГІЯ"/>
        <Solar__subtitle__web  subtitle__web ="СОНЯЧНІ ЕЛЕКТРОСТАНЦІЇ"/>
        <Solar__text1 solar__text__1="Підбір оптимальної комплектації обладнання, монтаж наземних та дахових сонячних електростанцій"/>
        <Solar__subtitle__print  subtitle__print ='МОНТАЖ ПІД "ЗЕЛЕНИЙ ТАРИФ"' />
        <Solar__text2 solar__text__2='Сприяння в підключені "зеленого тарифу", 
        підготовка технічної документації, розробка схем'/>
        <Solar__subtitle__print  subtitle__photo ="АВТОНОМНЕ ЕЛЕКТРОЖИВЛЕННЯ"/>
        <Solar__text2 solar__text__3="Автомне енергоживлення віддалених об'єктів 24/7, 
        розрахунок енергетичного резерву"/>
      </div>
    );
  }
}

const Solar__title = (props) => {
  return (
     <h2 className="solar__title">
        { props.solar__title }     
    </h2>
  )
}

const Solar__subtitle__web = (props) => {
  return (
    <div>
      <p className="solar__subtitle">
          { props.subtitle__web }     
      </p>
    </div>  
  )
}

const Solar__subtitle__print = (props) => {
  return (
    <div>
      <p className="solar__subtitle">
          { props.subtitle__print }     
      </p>
    </div>  
  )
}

const Solar__subtitle__photo = (props) => {
  return (
    <div>
      <p className="solar__subtitle">
          { props.subtitle__photo }     
      </p>
    </div>  
  )
}

const Solar__text1 = (props) => {
  return (
     <p className="solar__text--1">
        { props.solar__text__1 }     
    </p>
  )
}

const Solar__text2 = (props) => {
  return (
     <p className="solar__text--2">
        { props.solar__text__2 }     
    </p>
  )
}

const Solar__text3 = (props) => {
  return (
     <p className="solar__text--3">
        { props.solar__text__3 }     
    </p>
  )
}

export default Solar__info;