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
            about__text__1='здійснює діяльність в сфері розробки комплексних рішень щодо 
            автоматизації технологічних процесів установ, підприємств та організацій, 
            технічної модернізації будівель, споруд та територій'
            about__text__2="Висококваліфіковані спеціалісти з багаторічним досвідом, 
            власний штат досвідченних інсталяторів та iнженерiв.  
            Виготовлення власної продукції, гарантійне обслуговування, додатковi 
            послуги та сервiси, вигідні та зручні умови cпiвпpaцi"
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