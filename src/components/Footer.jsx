import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div style={{ transform: 'scale(0.8)', transformOrigin: 'left top' }}>
              <Logo light={true} />
            </div>
            <p className="footer-bio" style={{ marginTop: '0' }}>
              Expert Solutions for All Your Tax & Business Needs! Providing independent financial & compliance consulting.
            </p>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="contact-item">
              <div className="contact-icon bg-secondary">
                <Phone size={20} color="white" />
              </div>
              <div>
                <p className="contact-label">Venu Gopal</p>
                <a href="tel:9848460467" className="contact-value">98484 60467</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon bg-secondary">
                <Mail size={20} color="white" />
              </div>
              <div>
                <p className="contact-label">Email Us</p>
                <a href="mailto:vgsmartfilesolutions@gmail.com" className="contact-value">vgsmartfilesolutions@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} VG SmartFile Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
