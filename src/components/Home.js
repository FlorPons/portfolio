import React from 'react';  
import {motion} from "framer-motion";   

const frases = [
  "👩‍💻 Web developer en crecimiento.",
  "🚀 Aprendiendo y creando en la web desde 2022.",
  "🌱 Explorando nuevas tecnologías cada día.",
  "💻 Me apasiona el desarrollo web, especialmente el frontend y el diseño.",
  "💡 Me encanta aportar ideas creativas.",
];

const Home = () => ( 
    <motion.section 
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport= {{ once: false, amount: 0.5 }}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
        >
        <div className= 'home-content'>
            <div className="home-text">
                <motion.p
                className="saludo"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.1, type: "spring" }}
                viewport={{ once: false, amount: 0.5 }}
                >
                ¡Hola!
                </motion.p>
                <motion.h1
                className="nombre"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.2, type: "spring" }}
                viewport={{ once: false, amount: 0.5 }}
                >
                Soy Florencia Pons
                </motion.h1>

                {frases.map((frase, idx) => (
                <motion.h3
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.4, type: "spring" }}
                viewport={{ once: false, amount: 0.5 }}
                >
                {frase}
                </motion.h3>
                ))}
            </div>
            <motion.div
            className="logo-image"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4, type: "spring" }}
            viewport={{ once: false, amount: 0.5 }}
            >
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" /> 
            </motion.div>    
        </div>
    </motion.section> 
);

export default Home;    