import React from 'react';    

const Footer = () => {  
    return (  
        <footer>  
            <img className='logo' src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />
            <h5>&copy; 2025 Florencia Pons. Todos los derechos reservados.</h5>  
        </footer>  
    );  
};  

export default Footer;