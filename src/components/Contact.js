import React from 'react';  
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';  

const Contact = () => {  
    return (  
        <section id= 'contact'>  
            <h2>💬 ¡Trabajemos juntos!</h2>  
            <p>Puedes contactarme a través de:</p>  
            <ul>  
                <li>
                    <a href="mailto:ponsmariaflorencia@gmail.com">  
                    <FaEnvelope /> Email </a>
                </li>  
                <li>
                    <a href="linkedin.com/in/maria-florencia-pons" target="_blank" rel="noopener noreferrer">  
                    <FaLinkedin /> LinkedIn </a>
                </li>   
                <li>
                    <a href="https://github.com/FlorPons" target="_blank" rel="noopener noreferrer">  
                    <FaGithub /> GitHub </a>
                </li>
            </ul>    
        </section>  
    );  
};  

export default Contact;   