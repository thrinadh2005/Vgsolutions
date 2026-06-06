import React from 'react';
import { FileText, Building2, Calculator, BarChart3, ShieldCheck, FileSpreadsheet, PlusCircle } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    icon: <FileText size={32} />,
    title: "Income Tax Returns Filing",
    description: "(ITR for Individuals, HUF, Firms & Companies)",
    color: "#2563eb"
  },
  {
    icon: <Building2 size={32} />,
    title: "Company Incorporation",
    description: "(Private Ltd, LLP, OPC & More)",
    color: "#f26522"
  },
  {
    icon: <Calculator size={32} />,
    title: "GST Filings",
    description: "(Registration • Returns • Refunds)",
    color: "#059669"
  },
  {
    icon: <BarChart3 size={32} />,
    title: "CMA / Project Works",
    description: "(Costing • Margin • Final Reports)",
    color: "#9333ea"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "PF, ESI & Payroll Compliance",
    description: "(Registration • Returns • Annual Filings)",
    color: "#0f766e"
  },
  {
    icon: <FileSpreadsheet size={32} />,
    title: "TDS & ROC Filings",
    description: "(Quarterly & Annual Compliance)",
    color: "#ca8a04"
  },
  {
    icon: <PlusCircle size={32} />,
    title: "& Many More Services",
    description: "(Business Licenses, MSME, PAN, Digital Signature & More)",
    color: "#475569"
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Professional & Reliable Services</h2>
          <p className="section-subtitle">
            We offer comprehensive tax, compliance, and financial consulting services tailored to your business needs.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index} style={{ '--hover-color': service.color }}>
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
