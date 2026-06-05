import React from 'react';

export function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="aurora-container">
          <div className="aurora-wave-layer"></div>
        </div>
        
        <div className="hero-content">
          <p className="hero-kicker">Sound, completely reimagined...</p>
          <h1 className="hero-title">
            Sculpted <br /> Perfection.
          </h1>
          <p className="hero-subtitle">
            Immerse your senses in pure, uncompressed high-fidelity audio enclosed within an iconic matte titanium framework.
          </p>
          <div className="hero-cta-group">
            <button className="primary-btn">Pre-order Master Edition</button>
            <button className="secondary-btn">Watch Narrative</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Headphones" 
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8%;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background-color: #0d0e12;
          padding-top: 80px;
        }

        .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .aurora-wave-layer {
          position: absolute;
          inset: -10px;
          opacity: 0.25;
          filter: blur(15px);
          will-change: transform;
          --aurora: repeating-linear-gradient(100deg, #10b981 10%, #34d399 15%, #6ee7b7 20%, #2dd4bf 25%, #14b8a6 30%);
          --dark-gradient: repeating-linear-gradient(100deg, #0d0e12 0%, #0d0e12 7%, transparent 10%, transparent 12%, #0d0e12 16%);
          background-image: var(--dark-gradient), var(--aurora);
          background-size: 300% 200%;
          background-position: 50% 50%;
          mask-image: radial-gradient(ellipse at 100% 0%, #000 10%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, #000 10%, transparent 70%);
        }
        
        .aurora-wave-layer::after {
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

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 600px;
        }
        .hero-kicker {
          color: #6c7281;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 0.75rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        .hero-title {
          color: #ffffff;
          font-size: 5.5rem;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -3px;
          margin: 0 0 2rem 0;
        }
        .hero-subtitle {
          color: #9aa0b0;
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 460px;
          font-weight: 300;
        }
        .hero-cta-group {
          display: flex;
          gap: 1.5rem;
        }
        .primary-btn {
          background: #ffffff;
          color: #0d0e12;
          border: none;
          padding: 1.2rem 2.5rem;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,255,255,0.12);
        }
        .secondary-btn {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 1.2rem 2.5rem;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .secondary-btn:hover {
          background: rgba(255,255,255,0.05);
        }
        .hero-visual {
          z-index: 3;
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        .hero-image-wrapper {
          width: 480px;
          height: 540px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.05);
          animation: gentleFloat 8s ease-in-out infinite;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @media (max-width: 1100px) {
          .hero-section { flex-direction: column; justify-content: center; text-align: center; gap: 4rem; padding: 120px 5% 5% 5%; }
          .hero-title { font-size: 4rem; }
          .hero-subtitle { margin: 0 auto 3rem auto; }
          .hero-cta-group { justify-content: center; }
          .hero-visual { justify-content: center; }
          .hero-image-wrapper { width: 100%; max-width: 400px; height: 450px; }
        }
      `}</style>
    </>
  );
}