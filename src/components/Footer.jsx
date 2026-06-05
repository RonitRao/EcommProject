import React from 'react';

export function Footer() {
  return (
    <>
      <footer className="premium-footer">
        <div className="footer-content">
          <div className="brand-col">
            <div className="massive-logo">AURA.</div>
            <p className="brand-statement">Architecting architectural hardware tools for absolute design perfection.</p>
          </div>
          
          <div className="links-col">
            <h4>Systems</h4>
            <a href="#">Audio Cores</a>
            <a href="#">Wearable Units</a>
            <a href="#">Displays</a>
          </div>
          
          <div className="links-col">
            <h4>Corporate</h4>
            <a href="#">Visionary Blueprint</a>
            <a href="#">Careers</a>
            <a href="#">Stewardship</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aura Systems International. Legacy engineered.</p>
          <div className="legal-links">
            <a href="#">Privacy Protocol</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>

      <style>{`
        .premium-footer {
          background-color: #07080a;
          padding: 8rem 8% 3rem 8%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          border-top: 1px solid rgba(255,255,255,0.03);
          position: relative;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 4rem;
          max-width: 1400px;
          margin: 0 auto;
          margin-bottom: 6rem;
        }
        .brand-col { flex: 2; min-width: 300px; position: relative; z-index: 2; }
        .massive-logo { color: #fff; font-size: 2.8rem; font-weight: 800; letter-spacing: -2px; margin-bottom: 1.2rem; }
        .brand-statement { color: #575e6e; font-size: 1rem; max-width: 320px; line-height: 1.5; }
        .links-col { flex: 1; display: flex; flex-direction: column; gap: 1rem; min-width: 160px; position: relative; z-index: 2; }
        .links-col h4 { color: #fff; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 1rem 0; }
        .links-col a { color: #6c7281; text-decoration: none; font-size: 0.95rem; transition: color 0.2s ease; }
        .links-col a:hover { color: #fff; }
        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.03);
          color: #404654;
          font-size: 0.85rem;
          position: relative;
          z-index: 2;
        }
        .legal-links { display: flex; gap: 2rem; }
        .legal-links a { color: #404654; text-decoration: none; }
        .legal-links a:hover { color: #8e929e; }
        @media (max-width: 768px) { .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; } }
      `}</style>
    </>
  );
}