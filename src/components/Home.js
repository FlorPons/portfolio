import React from 'react';  
import {motion} from "framer-motion";   

const Home = () => (  
    <motion.section 
        id="home"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
        <div style={{ display: 'flex', alignItems: 'center' }} id="home">  
            <section style={{ flexGrow: 1 }}>   
                <h1>Bienvenido a mi Portfolio</h1>  
                <p>Aquí encontrarás información sobre mí, algunos proyectos y formas de contactarme. <br/>¡Explora y conóceme mejor!</p>  
                <h2>Me llamo Florencia Pons</h2>  
                <p>👩‍💻  
                Soy una desarrolladora frontend junior, apasionada por crear apps y sitios web atractivos, estéticos e innovadores. <br/>   
                Desde 2022, he experimentado con varios lenguajes de programación y tecnologías, actualmente me he enfocado en el desarrollo web de interfaces intuitivas y receptivas.</p>  
            </section>   
            <div className="profile-image" >  
            <img src={`${process.env.PUBLIC_URL}/images/yo.png`} alt="Foto de perfil" />  
            </div>  
        </div> 
    </motion.section> 
);

export default Home;    