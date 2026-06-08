import React from 'react';

export function ProductGrid() {
  const products = [
    { id: 1, name: 'Aura Studio Max', price: '₹20,999', desc: 'Architectural dynamic ANC headphones.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Aura Chrono Pro', price: '₹17,499', desc: 'Monolithic titanium slate smartwatch.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Aura Base Hub', price: '₹6,999', desc: 'Satin glass multicharge platform.', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Keyframe Mechanical', price: '₹10,499', desc: 'Muted acoustic luxury core deck.', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80' }
  ];

  function handleBuy(productName) {
    console.log(`[STORE DISPATCH]: Order routing request established for core component: "${productName}"`);
  }

  return (
    <>
      <section className="shop-section" id="Products">
        {/* Dynamic Connected Aurora Neon Wave Grid Layer */}
        <div className="aurora-container">
          <div className="aurora-wave-layer"></div>
        </div>
        
        <div className="section-header">
          <span className="section-tag" style={{ color: '#ffffff', opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', tracking: '2px', letterSpacing: '1px', display: 'block' }}>Collection Tier</span>
          <h2 className="shop-heading">The Inventory.</h2>
        </div>
        
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.img} alt={product.name} className="product-display-img" />
              </div>
              
              <div className="product-meta">
                <div className="text-group">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-description">{product.desc}</p>
                  <span className="product-cost">{product.price}</span>
                </div>
                <button className="buy-pill-btn" onClick={() => handleBuy(product.name)}>Buy</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .shop-section {
          padding: 12rem 8% 6rem 8%;
          background: #0d0e12;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
          min-height: 100vh;
          box-sizing: border-box;
        }
        
        /* Master Fluid Background Layer */
        .shop-section .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .shop-section .aurora-wave-layer {
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
          mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 80%);
        }
        .shop-section .aurora-wave-layer::after {
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
        .shop-heading {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -1.5px;
          margin: 0.5rem 0 0 0;
        }
        .product-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .product-card {
          background: transparent;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .product-image-container {
          aspect-ratio: 1 / 1;
          background: #15171c;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.04);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }
        .product-display-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .product-card:hover .product-display-img {
          transform: scale(1.03);
        }
        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0 0.2rem;
        }
        .text-group { flex: 1; }
        .product-title { color: #fff; font-size: 1.15rem; font-weight: 600; margin: 0 0 0.3rem 0; letter-spacing: -0.3px; }
        .product-description { color: #6c7281; font-size: 0.88rem; margin: 0 0 0.8rem 0; line-height: 1.4; max-width: 85%; }
        .product-cost { color: #ffffff; font-size: 1.1rem; font-weight: 500; font-family: monospace; }
        .buy-pill-btn {
          background: #ffffff;
          color: #0d0e12;
          border: none;
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .buy-pill-btn:hover { background: rgba(255,255,255,0.85); transform: translateY(-1px); }
      `}</style>
    </>
  );
}