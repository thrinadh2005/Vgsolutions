import React from 'react';
import { Calculator, TrendingUp, ClipboardCheck, Scale, IndianRupee, PieChart } from 'lucide-react';
import './HeroIllustration.css';

const HeroIllustration = () => {
  return (
    <div className="hero-illustration-container">
      {/* Abstract Glowing Orbs for Depth */}
      <div className="glow-orb orb-primary"></div>
      <div className="glow-orb orb-secondary"></div>
      <div className="glow-orb orb-accent"></div>
      
      {/* Main Clipboard Card */}
      <div className="glass-panel panel-main floating-slow">
        <div className="panel-header">
           <ClipboardCheck size={28} color="var(--color-secondary)" />
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

      {/* Calculator Card */}
      <div className="glass-panel panel-calc floating-medium">
         <div className="calc-top">
           <Calculator size={24} color="white" />
         </div>
         <div className="calc-screen">
           <span className="rupee-sym">₹</span> 1,25,000
         </div>
         <div className="calc-keys">
           <div className="calc-key"></div>
           <div className="calc-key"></div>
           <div className="calc-key"></div>
           <div className="calc-key calc-key-accent"></div>
         </div>
      </div>

      {/* Chart Card */}
      <div className="glass-panel panel-chart floating-fast">
         <div className="chart-header">
           <TrendingUp size={24} color="var(--color-secondary)" />
           <span className="chart-growth">+24%</span>
         </div>
         <div className="mini-chart">
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
         </div>
      </div>

      {/* Pie Chart Card */}
      <div className="glass-panel panel-pie floating-slow-reverse">
         <div className="pie-graphic-3d"></div>
         <div className="pie-legend">
            <div className="legend-item"><span className="dot dot-1"></span> ITR</div>
            <div className="legend-item"><span className="dot dot-2"></span> GST</div>
         </div>
      </div>
      
      {/* Scale/Legal Card */}
      <div className="glass-panel panel-scale floating-medium-reverse">
         <Scale size={32} color="var(--color-accent)" />
      </div>

      {/* Floating Elements */}
      <div className="floating-coin coin-1"><IndianRupee size={18} color="white" /></div>
      <div className="floating-coin coin-2"><IndianRupee size={14} color="white" /></div>
      <div className="floating-coin coin-3"><IndianRupee size={22} color="white" /></div>
    </div>
  );
};

export default HeroIllustration;
