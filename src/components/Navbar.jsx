import React from 'react';

export function Navbar() {
  return (
    <>
      <nav className="premium-nav">
        <div className="nav-container">
          <div className="brand-logo">
            AURA<span className="dot">.</span>
          </div>
          
          <ul className="nav-links">
            <li><a href="#vision" className="nav-item">Vision</a></li>
            <li><a href="#audio" className="nav-item">Audio</a></li>
            <li><a href="#wearables" className="nav-item">Wearables</a></li>
            <li><a href="#support" className="nav-item">Support</a></li>
          </ul>

          <div className="nav-actions">
            <button className="bag-btn">Bag (0)</button>
          </div>
        </div>
      </nav>

      <style>{`
        .premium-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(10, 11, 14, 0.35);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          z-index: 1000;
          padding: 1.2rem 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand-logo {
          color: #fff;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 2px;
        }
        .dot {
          color: #a1a1aa;
        }
        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-item {
          color: #8e929e;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .nav-item:hover {
          color: #ffffff;
        }
        .bag-btn {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.5rem 1.4rem;
          border-radius: 20px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .bag-btn:hover {
          background: #ffffff;
          color: #0d0e12;
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}</style>
    </>
  );
}