import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

export function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav style={{ 
      display: 'flex', 
      width: '100%',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '24px 40px', 
      background: 'rgba(13, 14, 18, 0.6)', 
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      boxSizing: 'border-box',
      position: 'sticky', // 📌 Pins the navbar to the top during scrolls
      top: 0,
      zIndex: 10000 // Keeps it safely layered above your inventory cards
    }}>
      {/* 1. Brand Logo */}
      <Link to="/" style={{ 
        color: '#ffffff', 
        fontWeight: '800', 
        letterSpacing: '2px', 
        fontSize: '18px', 
        textDecoration: 'none',
        textShadow: '0 0 12px rgba(255, 255, 255, 0.3)'
      }}>
        AURA.
      </Link>
      
      {/* 2. Absolute Centered Titles with Glowing Core */}
      <div style={{ display: 'flex', gap: '32px', fontSize: '11px', letterSpacing: '1.5px', fontWeight: '600' }}>
        <Link to="/" style={{ color: '#ffffff', opacity: 0.9, textDecoration: 'none', textShadow: '0 0 10px rgba(255, 255, 255, 0.4)' }}>VISION</Link>
        <Link to="/products" style={{ color: '#ffffff', opacity: 0.9, textDecoration: 'none', textShadow: '0 0 10px rgba(255, 255, 255, 0.4)' }}>PRODUCTS</Link>
        <Link to="/wearables" style={{ color: '#ffffff', opacity: 0.9, textDecoration: 'none', textShadow: '0 0 10px rgba(255, 255, 255, 0.4)' }}>WEARABLES</Link>
        <Link to="/support" style={{ color: '#ffffff', opacity: 0.9, textDecoration: 'none', textShadow: '0 0 10px rgba(255, 255, 255, 0.4)' }}>SUPPORT</Link>
      </div>

      {/* 3. Action Hub Positioned Perfect To The Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{ 
          background: 'rgba(255, 255, 255, 0.02)', 
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.15)', 
          color: '#ffffff', 
          padding: '8px 20px', 
          borderRadius: '20px', 
          fontSize: '11px', 
          fontWeight: '500', 
          cursor: 'pointer' 
        }}>
          Bag (0)
        </button>

        {user ? (
          <button 
            onClick={() => supabase.auth.signOut()}
            style={{ 
              background: 'rgba(239, 68, 68, 0.05)', 
              border: '1px solid rgba(239, 68, 68, 0.5)', 
              boxShadow: '0 0 15px rgba(239, 68, 68, 0.2)',
              color: '#ef4444', 
              padding: '8px 20px', 
              borderRadius: '20px', 
              fontSize: '11px', 
              fontWeight: '600', 
              cursor: 'pointer',
              letterSpacing: '0.5px',
              textShadow: '0 0 10px rgba(239, 68, 68, 0.5)' // Crimson Neon Glow
            }}
          >
            Logout
          </button>
        ) : (
          <Link 
            to="/login" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)', 
              color: '#ffffff', 
              padding: '8px 20px', 
              borderRadius: '20px', 
              fontSize: '11px', 
              fontWeight: '500', 
              textDecoration: 'none',
              boxShadow: '0 0 10px rgba(255,255,255,0.05)'
            }}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}