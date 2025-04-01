import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'portfolio/src/App.css';
import Header from 'portfolio/src/components/Header.js';  
import About from 'portfolio/src/components/About.js';  
import Projects from 'portfolio/src/components/Projects.js';  
import Contact from 'portfolio/src/components/Contact.js';  
import Home from 'portfolio/src/components/Home.js'; 
//import Blog from './components/Blog'; 
import Footer from 'portfolio/src/components/Footer.js';




function App() {  
  return (  
      <div className="App">  
          <Header/>  
          <main>  
              <Home />        
              <About />  
              <Projects />
              <Contact />  
          </main>  
          <Footer />  
      </div>  
  );  
}  

export default App;  