import React from 'react'; 
import {motion} from "framer-motion";

const About = () => (
    <motion.section
    id = "about"
    initial={{ opacity: 0, y: 100 }} 
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }} 
    viewport={{ once: true }}
    style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            
            <div className="about-container">  
                <img className="image1" src={`${process.env.PUBLIC_URL}/images/6.png`} alt="Imagen 6" />  
                <img className="image2" src={`${process.env.PUBLIC_URL}/images/2.png`} alt="Imagen 2" />  
                <img className="image3" src={`${process.env.PUBLIC_URL}/images/7.png`} alt="Imagen 7" />  
                <img className="image4" src={`${process.env.PUBLIC_URL}/images/2.png`} alt="Imagen 2" />  
                <img className="image5" src={`${process.env.PUBLIC_URL}/images/5.png`} alt="Imagen 5" />   
            </div>
        
            <section style={{ flexGrow: 1 }}>  
                <h2>Sobre Mí</h2>  
                <p>Soy Flor, una developer apasionada por el desarrollo web, en especial el frontend y el diseño. Tengo experiencia en diversos proyectos de desarrollo gracias a capacitaciones, simulaciones laborales y prácticas profesionales. <br/> 
                Me gusta crear soluciones que mejoren la vida de las personas.</p>  
                <p>Estoy siempre lista para aprender y crecer en este emocionante campo.</p> 
                <h3>📚 Educación:</h3>
                <p>🎓 Tecnicatura Universitaria en Programación - Universidad Tecnológica Nacional.</p>
                <h3>Capacitación complementaria en:</h3>
                <p>
                📊 Big Data - Programa Codo a Codo 4.0 de la Agencia de aprendizaje a lo largo de la vida BA<br/>
                ✨ Desarrollo Full Stack Python - Programa Codo a Codo 4.0 de la Agencia de aprendizaje a lo largo de la vida BA<br/>
                🎨Diseño UX/UI - Programa Codo a Codo 4.0 de la Agencia de habilidades para el futuro<br/>
                ✨Jornada Internacional de Metodologías Ágiles - Universidad Siglo 21<br/>
                🎨Crea y diseña productos digitales en Canva - Coursera<br/>
                ✨Build a free website with WordPress - Coursera<br/>
                🧠 Inteligencia Artificial para Tecnólogas sin Experiencia - Programa M1000IA <br/>
                </p>
                <p>Esta base me permite abordar proyectos teniendo en cuenta diferentes enfoques y soluciones. </p>
                <p>💻 Realicé mis prácticas profesionales en InKúa.<br/>
                💻También participé con mucho entusiasmo en simulaciones laborales de No Country, 
                donde desempeñé roles tanto como Desarrolladora Frontend como el rol de Team Leader acompañando dos equipos de desarrollo web.
                Estas experiencias han fortalecido mi capacidad para trabajar en entornos colaborativos y dinámicos, así como para liderar equipos hacia el logro de objetivos comunes.<br/>
                Me encantó trabajar con diferentes roles, con metodologías ágiles, presentaciones y documentación formal. Esto fortaleció mis habilidades blandas, aprendí mucho de mis coequipers e implementé conocimientos técnicos.</p>
                <p>👩‍🏫 Mi experiencia previa al desarrollo web es en la docencia.<br/> 
                Esta etapa que duró 10 años, me permitió desarrollar habilidades valiosas como la paciencia, la empatía y el trabajo en equipo, que considero esenciales en el ámbito del desarrollo web y en cualquier ámbito laboral.<br/> 
                📻También, mi experiencia como locutora en un programa de radio infantil me ha brindado herramientas para la comunicación efectiva y la creatividad, que aplico en mis proyectos.</p>
                <p>🎯 Estoy en constante aprendizaje y me adapto rápidamente a nuevas tecnologías. 
                Mi objetivo profesional es crear aplicaciones web que ofrezcan experiencias interesantes para los usuarios. 
                Actualmente, busco oportunidades en el sector IT donde pueda aplicar mis conocimientos y contribuir a un equipo innovador.</p>
            </section>
        </div>
    </motion.section>  
    );   

export default About;   