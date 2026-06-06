import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand-wrapper" style={{ flexShrink: 0 }}>
          <Logo />
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Choose Us</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="tel:9848460467" className="btn btn-primary contact-btn">
            <Phone size={18} style={{ marginRight: '8px' }} />
            98484 60467
          </a>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
