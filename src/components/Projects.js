import React from 'react';  
import { motion } from "framer-motion";   

const projectsData = [  
    {  
        title: "CapyBanck",  
        description: "Este proyecto es una fintech diseñada y desarrollada mediante la simulación laboral de No Country. En ella trabajé con otro desarrollador frontend, un diseñador UX/UI, tres desarrolladores backend y un PM. Fue una experiencia emocionante, desafiante y enriquecedora. Aprendí a trabajar en equipo, a comunicarme con otros desarrolladores y a resolver problemas de manera eficiente.",  
        technologies: "React, react-hook-form, Zod, zustand,Taillwind, PrimeReact, HTML5,CSS3,TypeScript",  
        image: <img src={process.env.PUBLIC_URL + "/images/CapyBanck.png"} alt="Imagen de la app CapyBanck" className="project-image" />,  
        link: "https://capybank.vercel.app/"  
    },  
    {  
        title: "Plant Disease Detector (Vision Computer)",  
        description: "Este proyecto de Vision Computer busca cumplir la función detección de enfermedades en plantas basado en Inteligencia Artificial mediante redes neuronales convolucionales (CNN). El proyecto cuenta con un backend FastAPI para servir predicciones y una interfaz Streamlit para la interacción del usuario. El modelo, entrenado en un conjunto de datos de imágenes de plantas, está optimizado para la identificación de enfermedades en tiempo real.",  
        technologies: "Python, FastAPI, Streamlit, TensorFlow, Keras",
        image: <img src= {process.env.PUBLIC_URL + "/images/6.png"} alt= "Imagen del proyecto Plant Disease Detector" className="project-image"/>,   
        link: process.env.PUBLIC_URL + "/images/PlantDeseaseDetector.pdf"  
    },  
    {  
        title: "Stylish Steps",  
        description: "Este proyecto fue realizado en el marco del curso FullStack Node.js de Codo a Codo 4.0 durante el primer semestre de 2024. En él realizamos un e-commerce llamado Stylish Steps de venta de zapatillas para hombres, mujeres y niños.",  
        technologies: "HTLM5, CSS3, JavaScript, Boostrap", 
        image: <img src= {process.env.PUBLIC_URL + "/images/StylishSteps.png"} alt= "Imagen de la webapp StylishSteps" className="project-image" />,  
        link: "https://e-commerce-zapatillas-lc7t.vercel.app/"  
    },  
    {  
        title: "Cute Paws",  
        description: "Cute Paws es una página web de una tienda de mascotas creada en el marco del curso Full Stack Python del programa Codo a Codo 4.0.",  
        technologies: "HTLM5, CSS3, JavaScript, Boostrap",
        image: <img src= {process.env.PUBLIC_URL + "/images/CutePaws.png"} alt= "Imagen de la webapp Cute Paws" className="project-image" />,   
        link: "https://github.com/FlorPons/CutePaws"  
    },  
    {  
        title: "Mood Melody",  
        description: "MoodMelody, es un proyecto desarrollado para crear y reproducir playlists de música adaptadas a tu estado de ánimo. Con una interfaz amigable e intuitiva, permite seleccionar tu estado emocional diario y recibir recomendaciones musicales personalizadas.",  
        technologies: "React,Java, HTLM5, CSS3, JavaScript, Boostrap",
        image: <img src= {process.env.PUBLIC_URL + "/images/MoodMelody.png"} alt= "Imagen de la webapp Mood Melody" className="project-image" />,    
        link: "https://github.com/FlorPons/MoodMelody"  
    },  
    {  
        title: "StreaMaster",  
        description: "StreaMaster es una plataforma que permite encontrar peliculas y series de diferentes plataformas en un solo lugar. Con una interfaz amigable e intuitiva, permite buscar y filtrar contenido de diferentes plataformas de streaming. Este proyecto fue desarrollado en el marco del curso de Diseno UX/UI del programa Codo a Codo 4.0.",  
        technologies: "Figma, Canva",
        image: <img src= {process.env.PUBLIC_URL + "/images/StreaMaster.png"} alt= "Imagen de la webapp StreaMaster" className="project-image"/>,   
        link: process.env.PUBLIC_URL + "/images/StreaMasterApp.pdf"  
    },  
    {  
        title: "Análisis de tipo de contenido de Netflix",  
        description: "Este proyecto fue realizado en marco del curso Big Data de Codo a Codo 4.0 durante el segundo semestre de 2022. En él realizamos un análisis de una base de datos de Netflix usando diferentes gráficos, estadísticas y filtros.",  
        technologies: "Looker Studio, fuente de datos en archivo csv", 
        image: <img src= {process.env.PUBLIC_URL + "/images/Netflix.png"} alt= "Imagen" className="project-image" />,  
        link: "https://lookerstudio.google.com/reporting/282aa87d-ac21-487a-b131-7e7962f79321"  
    },
];  
const Projects = () => {  
    return (  
        <section id='projects'>   
            <h2 className="projects-title">Proyectos</h2>  
            <div className='projects-grid'>   
                {projectsData.map((project, index) => ( 
                    <motion.div 
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1, type: "spring" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="project-image-wrapper">
                            {project.image} 
                        </div> 
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech"> {project.technologies} </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Ver Proyecto
                        </a>    
                    </div> 
                    </motion.div> 
                ))}  
            </div>  
        </section>  
    );  
};  

export default Projects;   