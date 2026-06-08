import React from 'react';

export function Support() {
  return (
    <>
      <div className="premium-support-wrapper">
        {/* Persistent Aurora Core Matrix Layer */}
        <div className="aurora-container">
          <div className="aurora-wave-layer"></div>
        </div>

        <div className="support-header-block">
          <span className="support-routing-tag">Operations Desk</span>
          <h1 className="support-main-heading">SYSTEM CONCIERGE</h1>
          <p className="support-main-desc">
            Dedicated multi-channel logistics operations handling system configurations, pipeline arrays, and terminal diagnostics.
          </p>
          <div className="support-divider-line"></div>
        </div>

        <div className="central-desk-panel">
          <div className="form-input-group">
            <label className="form-field-label">Serialized Token Index</label>
            <input type="text" placeholder="AUR-9353-2026" className="premium-text-input" />
          </div>

          <div className="form-input-group">
            <label className="form-field-label">Operational Query Matrix</label>
            <textarea rows="5" placeholder="Detail the physical architecture anomalies or core hardware synchronization errors..." className="premium-textarea-input"></textarea>
          </div>

          <button className="initialize-channel-btn">Initialize Routing Channel</button>
        </div>
      </div>

      <style>{`
        .premium-support-wrapper {
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
        .premium-support-wrapper .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .premium-support-wrapper .aurora-wave-layer {
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
        .premium-support-wrapper .aurora-wave-layer::after {
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

        .support-header-block {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 3;
        }
        .support-routing-tag {
          font-family: monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          color: #6c7281;
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .support-main-heading {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -1px;
          color: #ffffff;
          margin: 0;
        }
        .support-main-desc {
          color: #9aa0b0;
          max-width: 480px;
          margin: 1.2rem auto 0 auto;
          font-size: 1.05rem;
          font-weight: 300;
          line-height: 1.6;
        }
        .support-divider-line {
          height: 1px;
          width: 40px;
          background: rgba(255, 255, 255, 0.15);
          margin: 2rem auto 0 auto;
        }
        .central-desk-panel {
          max-width: 580px;
          margin: 0 auto;
          background: rgba(21, 23, 28, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 3rem;
          border-radius: 28px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
          position: relative;
          z-index: 3;
          box-sizing: border-box;
        }
        .form-input-group {
          margin-bottom: 2rem;
        }
        .form-field-label {
          display: block;
          font-family: monospace;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #9ca3af;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        .premium-text-input, .premium-textarea-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 1.1rem;
          font-size: 0.95rem;
          color: #fff;
          font-family: inherit;
          box-sizing: border-box;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-text-input:focus, .premium-textarea-input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.25);
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 20px rgba(255,255,255,0.02);
        }
        .premium-text-input::placeholder, .premium-textarea-input::placeholder {
          color: #4b5563;
        }
        .premium-text-input {
          font-family: monospace;
          letter-spacing: 1px;
        }
        .premium-textarea-input {
          resize: none;
          line-height: 1.6;
          font-weight: 300;
        }
        .initialize-channel-btn {
          width: 100%;
          background: #ffffff;
          color: #0d0e12;
          border: none;
          padding: 1.2rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: all 0.2s ease;
        }
        .initialize-channel-btn:hover {
          background: rgba(255, 255, 255, 0.88);
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
}