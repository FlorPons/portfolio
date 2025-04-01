import React from 'react';     

const projectsData = [  
    {  
        title: "CapyBanck",  
        description: "Este proyecto es una fintech diseñada y desarrollada mediante la simulación laboral de No Country. En ella trabajé con otro desarrollador frontend, un diseñador UX/UI, tres desarrolladores backend y un PM. Fue una experiencia emocionante, desafiante y enriquecedora. Aprendí a trabajar en equipo, a comunicarme con otros desarrolladores y a resolver problemas de manera eficiente.",  
        technologies: "React, react-hook-form, Zod, zustand,Taillwind, PrimeReact, HTML5,CSS3,TypeScript",  
        image: <img src= "/images/CapyBanck.png" alt="Imagen de la app CapyBanck" />,  
        link: "https://capybank.vercel.app/"  
    },  
    {  
        title: "Plant Disease Detector (Vision Computer)",  
        description: "Este proyecto busca cumplir la función detección de enfermedades en plantas basado en Inteligencia Artificial mediante redes neuronales convolucionales (CNN). El proyecto cuenta con un backend FastAPI para servir predicciones y una interfaz Streamlit para la interacción del usuario. El modelo, entrenado en un conjunto de datos de imágenes de plantas, está optimizado para la identificación de enfermedades en tiempo real.",  
        technologies: "Python, FastAPI, Streamlit, TensorFlow, Keras",
        image: <img src= "/images/6.png" alt= "Imagen del proyecto Plant Disease Detector"/>,   
        link: ""   
    },  
    {  
        title: "Stylish Steps",  
        description: "Este proyecto fue realizado en marco del curso FullStack Node.js de Codo a Codo 4.0 durante el primer semestre de 2024. En él realizamos un e-commerce llamado Stylish Steps de venta de zapatillas para hombres, mujeres y niños.",  
        technologies: "HTLM5, CSS3, JavaScript, Boostrap", 
        image: <img src= "/images/StylishSteps.png" alt= "Imagen de la webapp StylishSteps" />,  
        link: ""  
    },  
    {  
        title: "Cute Paws",  
        description: "Cute Paws es una página web de una tienda de mascotas creada en el marco del curso Full Stack Python del programa Codo a Codo 4.0.",  
        technologies: "HTLM5, CSS3, JavaScript, Boostrap",
        image: <img src= "/images/CutePaws.png" alt= "Imagen de la webapp Cute Paws" />,   
        link: ""  
    },  
    {  
        title: "Mood Melody",  
        description: "MoodMelody, es un proyecto desarrollado para crear y reproducir playlists de música adaptadas a tu estado de ánimo. Con una interfaz amigable e intuitiva, permite seleccionar tu estado emocional diario y recibir recomendaciones musicales personalizadas.",  
        technologies: "React,Java, HTLM5, CSS3, JavaScript, Boostrap",
        image: <img src= "/images/MoodMelody.png" alt= "Imagen de la webapp Mood Melody" />,    
        link: ""  
    },  
    {  
        title: "StreaMaster",  
        description: "StreaMaster es una plataforma que permite encontrar peliculas y series de diferentes plataformas en un solo lugar. Con una interfaz amigable e intuitiva, permite buscar y filtrar contenido de diferentes plataformas de streaming.Este proyecto fue desarrollado en el marco del curso de Diseno UX/UI del programa Codo a Codo 4.0.",  
        technologies: "Figma, Canva",
        image: <img src= "/images/StreaMaster.png"alt= "Imagen de la webapp StreaMaster" />,   
        link: ""  
    }  
];  
const Projects = () => {  
    return (  
        <section id='projects'>   
            <h2>Proyectos</h2>  
            <div className='projects'>   
                {projectsData.map((project, index) => (  
                    <div className="project-container" key={index}>  
                        <article>  
                            <h3>{project.title}</h3>  
                            <p>{project.description}</p>  
                            <h4>{project.technologies} Tecnologías empleadas</h4>   
                            <a href={project.link} target="_blank" rel="noopener noreferrer">  
                                <img src={project.image} alt={`Imagen de ${project.title}`} className="project-image" />  
                                <br/> Ver Proyecto  
                            </a>  
                        </article>  
                    </div>  
                ))}  
            </div>  
        </section>  
    );  
};  

export default Projects;   