import React from 'react';
import './App.css';
import About from './components/About';
import Intro from './components/Intro';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects2';


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Intro />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
