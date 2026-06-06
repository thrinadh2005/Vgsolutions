import React from 'react';
import { ArrowRight, Calculator, Phone, Mail } from 'lucide-react';
import HeroIllustration from './HeroIllustration';
import './Hero.css';
import './Hero-additions.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-slide-up">
          <div className="hero-badge">
            <span className="badge-icon">⭐</span>
            Your Trusted Tax & Business Consultant
          </div>
          <h1 className="hero-title">
            Independent Financial & <br/>
            <span className="text-secondary">Compliance Consultant</span>
          </h1>
          
          <div className="hero-signature">
            Venu Gopal
          </div>
          
          <div className="hero-contact-info">
             <div className="hero-contact-item">
                <div className="hero-contact-icon"><Phone size={16} /></div>
                <span>98484 60467</span>
             </div>
             <div className="hero-contact-item">
                <div className="hero-contact-icon"><Mail size={16} /></div>
                <span>vgsmartfilesolutions@gmail.com</span>
             </div>
          </div>
          
          <p className="hero-subtitle">
            We provide professional and reliable tax & business services. Expert solutions for all your tax & business needs!
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              Our Services
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
           <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;
