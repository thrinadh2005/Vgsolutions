import React from 'react';
import { CheckCircle, Lock, Clock, IndianRupee } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: <CheckCircle size={40} />,
    title: "Expert Guidance",
    description: "Years of experience in tax and financial consulting to ensure accuracy."
  },
  {
    icon: <Lock size={40} />,
    title: "100% Confidential",
    description: "Your business and personal data is secure and handled with utmost privacy."
  },
  {
    icon: <Clock size={40} />,
    title: "Fast & Timely Service",
    description: "We understand the value of time and guarantee prompt turnaround on all filings."
  },
  {
    icon: <IndianRupee size={40} />,
    title: "Affordable Pricing",
    description: "Premium services and consultation at competitive and transparent prices."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <div className="why-header text-center">
          <h2 className="section-title text-inverse">WHY CHOOSE US?</h2>
          <p className="text-inverse-light">We are committed to delivering the best value and peace of mind.</p>
        </div>
        
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                {reason.icon}
              </div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
