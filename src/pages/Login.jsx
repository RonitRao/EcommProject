import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword(form);

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate('/'); 
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '85vh', 
      padding: '20px',
      backgroundColor: '#0d0e12',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 🔮 Embedded CSS Keyframe Animation Core for the Moving Background */}
      <style>{`
        @keyframes driftEmerald {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.15); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes driftCyan {
          0% { transform: translate(0px, 0px) scale(1.1); }
          50% { transform: translate(-50px, 60px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1.1); }
        }
      `}</style>

      {/* Dynamic Background Aurora Blobs */}
      <div style={{ position: 'absolute', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', top: '15%', left: '25%', animation: 'driftEmerald 12s infinite ease-in-out', zIndex: 1 }} />
      <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(60px)', bottom: '15%', right: '25%', animation: 'driftCyan 16s infinite ease-in-out', zIndex: 1 }} />

      {/* Premium Glassmorphism Card */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.01)', 
        backdropFilter: 'blur(30px)', 
        WebkitBackdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.07)', 
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)',
        padding: '40px', 
        borderRadius: '16px', 
        width: '100%', 
        maxWidth: '360px',
        position: 'relative',
        zIndex: 5
      }}>
        <h2 style={{ margin: '0 0 6px 0', fontSize: '24px', fontWeight: '700', color: '#fff' }}>Sign In</h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: '0 0 28px 0' }}>Access your AURA account</p>
        
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>
            EMAIL ADDRESS
            <input name="email" type="email" value={form.email} onChange={handle} required autoFocus style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }} />
          </label>
          
          <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>
            PASSWORD
            <input name="password" type="password" value={form.password} onChange={handle} required style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }} />
          </label>

          {error && <p style={{ color: '#ff4a4a', fontSize: '12px', margin: '0' }}>{error}</p>}

          <button type="submit" disabled={loading} style={{ background: '#ffffff', color: '#0d0e12', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '13px', marginTop: '6px' }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '28px', textAlign: 'center', marginBlockEnd: 0 }}>
          Don't have an account? <Link to="/signup" style={{ color: '#ffffff', fontWeight: '600', textDecoration: 'underline' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}