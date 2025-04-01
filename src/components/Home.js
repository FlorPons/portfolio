import React from 'react';     

const Home = () => {  
    return (  
        <section style={{ display: 'flex', alignItems: 'center' }} id="home">  
            <section id="home" style={{ flexGrow: 1 }}>   
                <h1>Bienvenido a mi Portfolio</h1>  
                <p>Aquí encontrarás información sobre mí, algunos proyectos y formas de contactarme. <br/>¡Explora y conóceme mejor!</p>  
                <h2>Me llamo Florencia Pons</h2>  
                <p>👩‍💻  
                Soy una desarrolladora frontend junior, apasionada por crear apps y sitios web atractivos, estéticos e innovadores. <br/>   
                Desde 2022, he experimentado con varios lenguajes de programación y tecnologías, actualmente me he enfocado en el desarrollo web de interfaces intuitivas y receptivas.</p>  
            </section>  
            <div className="image-container">  
                <img src= "/images/yo.png" alt="Foto de perfil" />  
            </div> 
        </section> 
    );  
};  

export default Home;    