import React from 'react';

export function Categories() {
  return (
    <>
      <section className="bento-section" id="vision">
        {/* Dynamic Connected Aurora Neon Wave Grid Layer */}
        <div className="aurora-container">
          <div className="aurora-wave-layer"></div>
        </div>
        
        <div className="section-header">
          <span className="section-tag">ecosystem</span>
          <h2 className="section-heading">Curated Archetypes.</h2>
        </div>
        
        <div className="bento-grid">
          <div className="bento-card large">
            <img src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80" alt="Audio Collection" className="bento-bg-img" />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h3>Acoustics</h3>
              <p>True mastering studio outputs.</p>
            </div>
          </div>
          
          <div className="bento-card medium dark">
            <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80" alt="Wearables Collection" className="bento-bg-img" />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h3>Wearables</h3>
              <p>Biometric luxury tracks.</p>
            </div>
          </div>
          
          <div className="bento-card medium glass">
            <img src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80" alt="Power Series" className="bento-bg-img" />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h3>Power Series</h3>
              <p>Intelligent charging bays.</p>
            </div>
          </div>
          
          <div className="bento-card wide">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Architect Systems Workstation" className="bento-bg-img" />
            <div className="card-overlay"></div>
            <div className="card-content">
              <h3>Architect Systems</h3>
              <p>High-compute minimalist desk layouts built for developers and visual artists.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bento-section {
          padding: 8rem 8%;
          background: #0d0e12;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }
        
        /* Master Fluid Background Layer */
        .bento-section .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .bento-section .aurora-wave-layer {
          position: absolute;
          inset: -10px;
          opacity: 0.22;
          filter: blur(20px);
          will-change: transform;
          --aurora: repeating-linear-gradient(100deg, #10b981 10%, #34d399 15%, #6ee7b7 20%, #2dd4bf 25%, #14b8a6 30%);
          --dark-gradient: repeating-linear-gradient(100deg, #0d0e12 0%, #0d0e12 7%, transparent 10%, transparent 12%, #0d0e12 16%);
          background-image: var(--dark-gradient), var(--aurora);
          background-size: 300% 200%;
          background-position: 50% 50%;
          mask-image: radial-gradient(ellipse at 50% 100%, #000 20%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 100%, #000 20%, transparent 75%);
        }
        .bento-section .aurora-wave-layer::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--dark-gradient), var(--aurora);
          background-size: 200% 100%;
          background-attachment: fixed;
          mix-blend-mode: difference;
          animation: auroraAnimation 15s linear infinite;
        }

        @keyframes auroraAnimation {
          0% { background-position: 0% 50%, 0% 50%; }
          100% { background-position: 100% 50%, 100% 50%; }
        }

        .section-header {
          position: relative;
          z-index: 3;
          margin-bottom: 4rem;
        }
        .section-tag {
          color: #6c7281;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .section-heading {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -1.5px;
          margin: 0.5rem 0 0 0;
        }
        .bento-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 280px;
          gap: 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .bento-card {
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255,255,255,0.04);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .bento-card:hover {
          transform: scale(0.99);
        }
        .bento-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
          opacity: 0.75;
          transition: transform 0.6s ease;
        }
        .bento-card:hover .bento-bg-img {
          transform: scale(1.04);
        }
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(13, 14, 18, 0.95) 10%, rgba(0,0,0,0.1) 80%);
          z-index: 1;
        }
        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 2.2rem;
          z-index: 2;
        }
        
        .bento-card h3 {
          color: #ffffff;
          font-size: 1.6rem;
          margin: 0 0 0.4rem 0;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
          
        .bento-card p {
          color: #9aa0b0;
          font-size: 0.95rem;
          margin: 0;
          font-weight: 300;
          line-height: 1.4;
        }
        
        .large { grid-column: span 2; grid-row: span 2; }
        .wide { grid-column: span 3; }
        @media (max-width: 960px) {
          .bento-grid { grid-template-columns: 1fr; grid-auto-rows: 240px; }
          .large, .wide { grid-column: span 1; }
          .large { grid-row: span 1; }
        }
      `}</style>
    </>
  );
}