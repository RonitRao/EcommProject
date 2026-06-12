import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Form input state controls
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [img, setImg] = useState('');

  // 1. READ: Fetch data fields from cloud table on component mount
  useEffect(() => {
    fetchInventory();
  }, []);

  async function fetchInventory() {
    const { data, error } = await supabase
      .from('products')
      .select('id, created_at, name, price, description, image') // <-- Explicitly list your columns
      .order('created_at', { ascending: false });
  
    if (error) {
      console.error("Fetch Error details:", error.message);
    } else if (data) {
      setProducts(data);
    }
  }

  // 2. CREATE: Insert raw fields into Supabase matrix matching your exact cloud schema
  async function handleDeployAsset(e) {
    e.preventDefault();
    setLoading(true);

    // FIXED: Maps your local form state variable names to your actual Supabase table columns ('description' and 'image')
    // Just pass the raw numeric price state straight to the database!
    const { data, error } = await supabase
      .from('products')
      .insert([{ name, price: parseFloat(price), description: desc, image: img }])
      .select();

    setLoading(false);
    if (!error && data) {
      setProducts([data[0], ...products]);
      setName('');
      setPrice('');
      setDesc('');
      setImg('');
      setIsModalOpen(false);
    }
  }

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
        
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: '1400px', margin: '0 auto 4rem auto' }}>
          <div>
            <span className="section-tag" style={{ color: '#ffffff', opacity: 0.6, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>Collection Tier</span>
            <h2 className="shop-heading">The Inventory.</h2>
          </div>
          <button className="sell-trigger-btn" onClick={() => setIsModalOpen(true)}>
            Sell Your Item
          </button>
        </div>
        
        <div className="product-grid">
          {products.length === 0 ? (
            <p style={{ color: '#6c7281', gridColumn: '1/-1', textAlign: 'center', fontSize: '1.1rem', marginTop: '2rem' }}>
              No hardware interfaces active in this channel node.
            </p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  {/* FIXED: Reading 'product.image' from database instead of 'product.img' */}
                  <img src={product.image || 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=500&q=80'} alt={product.name} className="product-display-img" />
                </div>
                
                <div className="product-meta">
                  <div className="text-group">
                    <h3 className="product-title">{product.name}</h3>
                    {/* FIXED: Reading 'product.description' from database instead of 'product.desc' */}
                    <p className="product-description">{product.description}</p>
                    <span className="product-cost">₹{Number(product.price).toLocaleString('en-IN')}</span>
                  </div>
                  <button className="buy-pill-btn" onClick={() => handleBuy(product.name)}>Buy</button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Glassmorphic Operation Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content-block">
            <h3 className="modal-title">Initialize Product Asset</h3>
            <form onSubmit={handleDeployAsset}>
              <div className="input-field-group">
                <label>System Component Name</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Aura Studio Max" />
              </div>
              <div className="input-field-group">
                <label>Evaluation Cost (Numerical value only)</label>
                <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="e.g., 20999" />
              </div>
              <div className="input-field-group">
                <label>Architectural Parameter Overview</label>
                <textarea required rows="2" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g., Architectural dynamic ANC headphones." />
              </div>
              <div className="input-field-group">
                <label>Telemetry Photography URL</label>
                <input type="url" value={img} onChange={(e) => setImg(e.target.value)} placeholder="https://images.unsplash.com/..." />
              </div>

              <div className="modal-actions-row">
                <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel Terminal</button>
                <button type="submit" className="btn-submit" disabled={loading}>
                  {loading ? 'Processing Array...' : 'Add to Inventory'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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

        .shop-heading {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -1.5px;
          margin: 0.5rem 0 0 0;
        }

        .sell-trigger-btn {
          position: relative;
          z-index: 3;
          background: transparent;
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.3);
          padding: 0.75rem 1.6rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 20px rgba(52, 211, 153, 0.05);
        }
        .sell-trigger-btn:hover {
          background: #34d399;
          color: #0d0e12;
          border-color: #34d399;
          box-shadow: 0 0 25px rgba(52, 211, 153, 0.25);
          transform: translateY(-1px);
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

        /* Modal Overlay & Styling UI */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 6, 8, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .modal-content-block {
          background: #13151a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 28px;
          width: 90%;
          max-width: 480px;
          box-shadow: 0 30px 60 rgba(0, 0, 0, 0.6);
        }
        .modal-title {
          color: #fff;
          font-size: 1.6rem;
          font-weight: 600;
          margin: 0 0 1.8rem 0;
          letter-spacing: -0.5px;
        }
        .input-field-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
        }
        .input-field-group label {
          color: #6c7281;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .input-field-group input, .input-field-group textarea {
          background: #191b22;
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 0.85rem 1rem;
          color: #fff;
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .input-field-group input:focus, .input-field-group textarea:focus {
          border-color: rgba(52, 211, 153, 0.4);
        }
        .input-field-group textarea { resize: none; }
        
        .modal-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
        }
        .btn-cancel {
          background: transparent;
          border: none;
          color: #6c7281;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .btn-cancel:hover { color: #fff; }
        
        .btn-submit {
          background: #34d399;
          color: #0d0e12;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 14px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .btn-submit:hover { opacity: 0.9; }
        .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>
    </>
  );
}