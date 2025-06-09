import React, {useState} from 'react';
import { motion } from "framer-motion";

const images = [
    { src: "/images/13.png", alt: "Imagen 13" },
    { src: "/images/17.png", alt: "Imagen 17" },
    { src: "/images/11.png", alt: "Imagen 11" },
    { src: "/images/8.png", alt: "Imagen 8" },
    { src: "/images/12.png", alt: "Imagen 12" },
    { src: "/images/9.png", alt: "Imagen 9" },
    { src: "/images/15.png", alt: "Imagen 15" },
    { src: "/images/10.png", alt: "Imagen 10" }
];

const capacitaciones = [

    {
    icon: "🧠",
    titulo: "Inteligencia Artificial para Tecnólogas - M1000IA",
    descripcion: "Capacitación teórica y práctica en desarrollo de inteligencia artificial para profesionales tecnológicos sin experiencia previa en el área.Incluyó el desarrollo de habilidades en programación con Python en IA, formación en aspectos éticos e inclusivos, acceso a webinars con especialistas, participación en laboratorios de práctica y trabajo en equipos nivelados. Este programa se llevó a cabo gracias a la colaboración de la UTN, INTEL, Bounty ed Tech, Positivo BGH y al programa Mil mujeres en IA."
    },
    {
    icon: "📊",
    titulo: "Big Data - Codo a Codo 4.0",
    descripcion: "Curso intensivo sobre análisis y procesamiento de grandes volúmenes de datos, uso de herramientas y conceptos de Big Data."
    },
    {
    icon: "✨",
    titulo: "Desarrollo Full Stack Python - Codo a Codo 4.0",
    descripcion: "Formación en desarrollo web full stack con Python, abarcando backend, frontend y bases de datos."
    },
    {
    icon: "🎨",
    titulo: "Diseño UX/UI - Codo a Codo 4.0",
    descripcion: "Capacitación en diseño de experiencia de usuario e interfaces, prototipado y herramientas modernas."
    },
    {
    icon: "✨",
    titulo: "Jornada Internacional de Metodologías Ágiles - Universidad Siglo 21",
    descripcion: "Evento sobre metodologías ágiles, trabajo en equipo y gestión de proyectos innovadores."
    },
    {
    icon: "🎨",
    titulo: "Canva - Coursera",
    descripcion: "Curso sobre creación de productos digitales y diseño gráfico usando Canva."
    },
    {
    icon: "✨",
    titulo: "WordPress - Coursera",
    descripcion: "Curso práctico para crear sitios web gratuitos con WordPress."
    },
    {
    icon: "",
    titulo: "Curso de Visual Studio Code y GitHub Copilot - Código Facilito",
    descripcion: "Curso de ayuda para desarrolladores a fin de maximizar la eficiencia con Visual Studio Code y GitHub Copilot, abarcando desde la configuración básica hasta la asistencia avanzada de codificación impulsada por IA."
    },
    {
    icon: "",
    titulo: "Curso Profesional de Git - Código Facilito",
    descripcion: "Curso de Giten el que aprendí a gestionar mas eficientemente las versiones de código fuente, buenas prácticas y manejo de errores."
    }
];

const About = () => {
    const [modal, setModal] = useState(null);

return (
    <motion.section
    id="about"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, type: "spring" }}
    viewport={{ once: true, amount: 0.2 }}
    className="about-section"
    >
    <div className="about-content">
        <motion.div
        className="about-images"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        viewport={{ once: false, amount: 0.4 }}
        >
        {images.map((img, idx) => (
            <motion.img
            key={idx}
            src={`${process.env.PUBLIC_URL}${img.src}`}
            alt={img.alt}
            className={`about-img about-img${idx + 1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            viewport={{ once: false, amount: 0.3 }}
            />
        ))}
        </motion.div>
        <motion.div
        className="about-text"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
        >
        <h2>Educación y experiencia</h2>
        <p>
            Tengo experiencia en diversos proyectos de desarrollo gracias a capacitaciones, simulaciones laborales y prácticas profesionales, así como también proyectos personales.
        </p>
        <h3>📚 Educación:</h3>
        <div className= "title-about"> <h3>🎓 Tecnicatura Universitaria en Programación - Universidad Tecnológica Nacional.</h3></div>

        <h3>Capacitación complementaria:</h3>
        <div className="capacitaciones-grid">
            {capacitaciones.map((cap, idx) => (
                <button
                key={idx}
                className="cap-btn"
                onClick={() => setModal(cap)}
                type="button"
                >
                <span className="cap-icon">{cap.icon}</span>
                {cap.titulo}
                </button>
            ))}
            </div>

        <p> Esta base me permite abordar proyectos con diferentes enfoques y soluciones.</p>
            <h3>💻 Prácticas profesionales en InKúA.</h3> 
            <h3>💻 Simulaciones laborales en No Country, como Frontend y Team Leader.</h3>
            <p>Estas experiencias fortalecieron mi capacidad para trabajar en equipos colaborativos y dinámicos, y liderar hacia objetivos comunes.</p>
        <p>
            👩‍🏫 Mi experiencia previa es en la docencia (10 años), donde desarrollé habilidades como paciencia, empatía y trabajo en equipo.<br />
            📻 También fui locutora en un programa de radio infantil y varios voluntariados, lo que potenció mi comunicación, creatividad y capacidad de servicio.
        </p>

        </motion.div>
    </div>
          {/* Modal */}
        {modal && (
        <div className="cap-modal-bg" onClick={() => setModal(null)}>
            <div className="cap-modal" onClick={e => e.stopPropagation()}>
            <h4>{modal.icon} {modal.titulo}</h4>
            <p>{modal.descripcion}</p>
            {modal.link && (
                <a href={modal.link} target="_blank" rel="noopener noreferrer" className="cap-link">
                Ver más
                </a>
            )}
            <button className="cap-close" onClick={() => setModal(null)}>Cerrar</button>
            </div>
        </div>
        )}
    </motion.section>
    );
};

export default About;