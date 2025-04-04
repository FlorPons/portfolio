import React, { useEffect, useState } from 'react';   
import { motion } from 'framer-motion';

const Header = () => {  
    const [isSticky, setIsSticky] = useState(false);  

    const handleScroll = () => {  
        const bannerHeight = document.querySelector('.banner').offsetHeight;  
        const scrollTop = window.scrollY;  
        setIsSticky(scrollTop >= bannerHeight);  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  

        return () => {  
            window.removeEventListener('scroll', handleScroll);  
        };  
    }, []);  

    return (  
        <div className="banner-container">  
            <motion.div  
                className="banner"  
                initial={{ opacity: 0 }}  
                animate={{ opacity: 1 }}  
                transition={{ duration: 0.5 }}  
                style={{  
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner.png)`,  
                    backgroundSize: 'cover',  
                    backgroundPosition: 'center',  
                }}>  
            </motion.div>  
            <nav className={isSticky ? 'sticky' : ''}>  
                <ul>  
                    <li>  
                        <a href="#home">Home</a>  
                    </li>  
                    <li>  
                        <a href="#about">Sobre mí</a>  
                    </li>  
                    <li>  
                        <a href="#projects">Mis proyectos</a>  
                    </li>    
                    <li>  
                        <a href="#contact">Conectémos</a>  
                    </li>  
                </ul>  
            </nav>      
        </div>  
    );  
};  

export default Header;  