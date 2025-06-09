import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaBehance } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
    return (
    <motion.section
        id="contact"
        className="contact-section"
        initial= {{ opacity: 0, y: 80 }}
        whileInView= {{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        viewport={{ once: false, amount: 0.4 }}>

        <h2>💬 ¡Trabajemos juntos!</h2>
        <p>Puedes contactarme a través de:</p>
        <ul className="contact-list">
        <li>
        <a href="mailto:ponsmariaflorencia@gmail.com" className="contact-link" title="Email">
            <span className="contact-glass">
            <FaEnvelope className="contact-icon email" />
            </span>
            Email 
        </a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/maria-florencia-pons/" target="_blank" rel="noopener noreferrer" className="contact-link" title="LinkedIn">
            <span className="contact-glass">
            <FaLinkedin className="contact-icon linkedin" /> 
            </span>
            LinkedIn
        </a>
        </li>
        <li>
        <a href="https://github.com/FlorPons" target="_blank" rel="noopener noreferrer" className="contact-link" title="GitHub">
            <span className="contact-glass">
            <FaGithub className="contact-icon github" /> 
            </span>
            GitHub
        </a>
        </li>
        <li>
        <a href="https://www.behance.net/floriponstoloza" target="_blank" rel="noopener noreferrer" className="contact-link" title="Behance">
            <span className="contact-glass">
            <FaBehance className="contact-icon behance" /> 
            </span>
            Behance
        </a>
        </li>
        </ul>
    </motion.section>
    );
};

export default Contact;