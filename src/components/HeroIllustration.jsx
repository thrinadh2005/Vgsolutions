import React from 'react';
import { Calculator, TrendingUp, ClipboardCheck, Scale, IndianRupee } from 'lucide-react';
import './HeroIllustration.css';

const HeroIllustration = () => {
  return (
    <div className="hero-illustration-container">
      {/* Abstract Glowing Orbs for Depth */}
      <div className="glow-orb orb-primary"></div>
      <div className="glow-orb orb-secondary"></div>
      
      {/* Scale/Legal Card (Behind) */}
      <div className="illustration-card panel-scale floating-subtle-reverse">
         <Scale size={28} color="var(--color-primary)" />
      </div>

      {/* Main Clipboard Card (Center) */}
      <div className="illustration-card panel-main floating-subtle">
        <div className="panel-header">
           <ClipboardCheck size={24} color="var(--color-secondary)" />
           <h3 className="panel-title">TAX & COMPLIANCE</h3>
        </div>
        <div className="panel-content">
          <div className="skeleton-line w-full"></div>
          <div className="skeleton-line w-3-4"></div>
          
          <div className="check-items-list">
            <div className="check-item">
              <div className="check-circle"></div>
              <div className="skeleton-line w-1-2"></div>
            </div>
            <div className="check-item">
              <div className="check-circle"></div>
              <div className="skeleton-line w-2-3"></div>
            </div>
            <div className="check-item">
              <div className="check-circle"></div>
              <div className="skeleton-line w-1-3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Card (Right Top) */}
      <div className="illustration-card panel-chart floating-subtle-delayed">
         <div className="chart-header">
           <TrendingUp size={20} color="var(--color-secondary)" />
           <span className="chart-growth">+24%</span>
         </div>
         <div className="mini-chart">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
         </div>
      </div>

      {/* Pie Chart Card (Right Bottom) */}
      <div className="illustration-card panel-pie floating-subtle-reverse">
         <div className="pie-graphic-3d"></div>
         <div className="pie-legend">
            <div className="legend-item"><span className="dot dot-1"></span> ITR Filing</div>
            <div className="legend-item"><span className="dot dot-2"></span> GST Returns</div>
         </div>
      </div>

      {/* Calculator Card (Left Bottom) */}
      <div className="illustration-card panel-calc floating-subtle-delayed">
         <div className="calc-top">
           <Calculator size={20} color="white" />
         </div>
         <div className="calc-screen">
           ₹ 1,25,000
         </div>
         <div className="calc-keys">
           <div className="calc-key"></div>
           <div className="calc-key"></div>
           <div className="calc-key"></div>
           <div className="calc-key calc-key-accent"></div>
         </div>
      </div>

      {/* Floating Coins */}
      <div className="floating-coin coin-1 floating-subtle"><IndianRupee size={16} color="white" /></div>
      <div className="floating-coin coin-2 floating-subtle-reverse"><IndianRupee size={12} color="white" /></div>
      <div className="floating-coin coin-3 floating-subtle-delayed"><IndianRupee size={20} color="white" /></div>
    </div>
  );
};

export default HeroIllustration;
