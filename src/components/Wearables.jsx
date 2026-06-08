import React from 'react';

export function Wearables() {
  const customItems = [
    { 
      id: 1, 
      name: 'Aura Ring Core', 
      tech: 'GEN.V', 
      price: '₹19,999', 
      desc: 'Continuous autonomic neural tracking, circadian index logging, and oxygen saturation vector mechanics cast in grade-5 obsidian titanium.', 
      slot: '[ CORE CONFIG ]',
      img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 2, 
      name: 'Aura Glass Prism', 
      tech: 'HUD.X', 
      price: '₹22,000', 
      desc: 'Real-time contextual stereoscopic micro-projection array mapping raw telemetry vectors directly onto user spatial fields natively.', 
      slot: '[ LENS MATRIX ]',
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 3, 
      name: 'Aura Wrist Node', 
      tech: 'NODE.II', 
      price: '₹15,500', 
      desc: 'Tactile haptic nervous feedback motor matrix coupled with real-time muscular micro-strain monitoring arrays.', 
      slot: '[ WRIST COUPLING ]',
      img: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 4, 
      name: 'Aura Audio Inset', 
      tech: 'EAR.III', 
      price: '₹17,999', 
      desc: 'Sub-dermal bone-conduction telemetry transducers providing raw auditory resonance feeds without obstructing ambient sound profiles.', 
      slot: '[ ACOUSTIC INSET ]',
      img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80' 
    }
  ];

  return (
    <>
      <div className="premium-page-wrapper">
        {/* Persistent Aurora Core Matrix Layer */}
        <div className="aurora-container">
          <div className="aurora-wave-layer"></div>
        </div>

        <div className="page-header-block">
          <span className="sub-routing-tag">Biomechanical Telemetry</span>
          <h1 className="main-page-heading">AURA. WEARABLES</h1>
          <p className="main-page-desc">
            Next-generation biological monitoring interfaces engineered within low-profile composite architectures.
          </p>
          <div className="divider-line"></div>
        </div>

        {/* Structured Grid Component */}
        <div className="premium-hardware-grid">
          {customItems.map((item) => (
            <div key={item.id} className="hardware-mesh-card">
              <div className="hardware-slot-display">
                <img src={item.img} alt={item.name} className="hardware-display-image" />
                <div className="hardware-card-overlay">
                  <span className="slot-monotag">{item.slot}</span>
                </div>
              </div>
              
              <div className="hardware-card-meta">
                <div className="meta-row-header">
                  <h3 className="card-item-title">{item.name}</h3>
                  <span className="hardware-tech-pill">{item.tech}</span>
                </div>
                <p className="card-item-desc">{item.desc}</p>
                
                <div className="card-action-row">
                  <span className="card-item-cost">{item.price}</span>
                  <button className="premium-acquire-btn">Acquire</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .premium-page-wrapper {
          padding: 12rem 8% 6rem 8%;
          background: #0d0e12;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #fff;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }
        
        /* Aurora Wave Core Engine */
        .premium-page-wrapper .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .premium-page-wrapper .aurora-wave-layer {
          position: absolute;
          inset: -10px;
          opacity: 0.20;
          filter: blur(20px);
          will-change: transform;
          --aurora: repeating-linear-gradient(100deg, #10b981 10%, #34d399 15%, #6ee7b7 20%, #2dd4bf 25%, #14b8a6 30%);
          --dark-gradient: repeating-linear-gradient(100deg, #0d0e12 0%, #0d0e12 7%, transparent 10%, transparent 12%, #0d0e12 16%);
          background-image: var(--dark-gradient), var(--aurora);
          background-size: 300% 200%;
          background-position: 50% 50%;
          mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 75%);
        }
        .premium-page-wrapper .aurora-wave-layer::after {
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

        .page-header-block {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 3;
        }
        .sub-routing-tag {
          font-family: monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #6c7281;
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .main-page-heading {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -1px;
          color: #ffffff;
          margin: 0;
        }
        .main-page-desc {
          color: #9aa0b0;
          max-width: 520px;
          margin: 1.2rem auto 0 auto;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.6;
        }
        .divider-line {
          height: 1px;
          width: 40px;
          background: rgba(255, 255, 255, 0.15);
          margin: 2rem auto 0 auto;
        }
        
        /* Forced 2x2 Clean Multi-Column Grid Design Mapping */
        .premium-hardware-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 3;
        }
        .hardware-mesh-card {
          background: rgba(21, 23, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 28px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }
        .hardware-mesh-card:hover {
          border-color: rgba(16, 185, 129, 0.3);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(16, 185, 129, 0.03);
          transform: translateY(-4px);
        }
        .hardware-slot-display {
          height: 280px;
          background: #111216;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          margin-bottom: 1.8rem;
          position: relative;
          overflow: hidden;
        }
        
        /* Revamped Vivid Brightness Engine Rules */
        .hardware-display-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.90;
          filter: brightness(0.95);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, filter 0.4s ease;
        }
        .hardware-mesh-card:hover .hardware-display-image {
          transform: scale(1.03);
          opacity: 1;
          filter: brightness(1.1);
        }
        .hardware-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(13,14,18,0) 40%, rgba(13,14,18,0.75) 100%);
          display: flex;
          align-items: flex-start;
          padding: 1.5rem;
        }
        .slot-monotag {
          font-family: monospace;
          font-size: 0.7rem;
          letter-spacing: 2px;
          color: #a1a1aa;
          background: rgba(0, 0, 0, 0.75);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .meta-row-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .card-item-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .hardware-tech-pill {
          font-family: monospace;
          font-size: 0.7rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          color: #ffffff;
          font-weight: 600;
        }
        .card-item-desc {
          color: #9aa0b0;
          font-size: 0.9rem;
          font-weight: 300;
          line-height: 1.6;
          margin: 0 0 2.5rem 0;
          min-height: 4.5rem;
        }
        .card-action-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 1.5rem;
          margin-top: auto;
        }
        .card-item-cost {
          font-size: 1.2rem;
          font-weight: 500;
          color: #ffffff;
        }
        .premium-acquire-btn {
          background: #ffffff;
          color: #0d0e12;
          border: none;
          padding: 0.8rem 1.8rem;
          border-radius: 35px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .premium-acquire-btn:hover {
          background: rgba(255, 255, 255, 0.88);
          transform: translateY(-1px);
        }
        
        /* Mobile System Fallback Adaptations */
        @media (max-width: 900px) {
          .premium-hardware-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  );
}