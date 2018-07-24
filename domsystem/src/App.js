import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Activity from './components/Activity';
import Production from './components/Production';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <About />
        <Activity />
        <Production />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;