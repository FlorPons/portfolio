import React from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
//import Header from './components/Header';  
import About from './components/About';  
import Projects from './components/Projects';  
import Contact from './components/Contact';  
import Home from './components/Home'; 
//import Blog from './components/Blog'; 
import Footer from './components/Footer';




function App() {  
    return ( 
    <>
    <canvas id= "starfield"></canvas> 
    <div className="App">  
        { /*<Header/>*/}
        <main>  
            <Home />        
            <About />  
            <Projects />
            <Contact />  
        </main>  
        <Footer />  
    </div> 
    </> 
    );  
}  

export default App;  