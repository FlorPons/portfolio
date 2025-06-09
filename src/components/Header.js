import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

  // Sticky navbar al hacer scroll
    useEffect(() => {
    const handleScroll = () => {
        setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  // Cierra el menú al navegar
    const handleNavClick = () => setMenuOpen(false);

    return (
    <header>
        <nav className={`${isSticky ? 'sticky' : ''} ${menuOpen ? 'open' : ''}`}>
        <button
            className="nav-toggle"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
        >
            ☰
        </button>
        <ul onClick={handleNavClick}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Mis proyectos</a></li>
            <li><a href="#contact">Conectemos</a></li>
        </ul>
        </nav>
    </header>
    );
};

export default Header;