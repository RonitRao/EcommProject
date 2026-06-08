import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <style>{`
      html {
        scroll-behavior: smooth;
      }
      body {
        margin: 0;
        padding: 0;
        background-color: #0d0e12; /* Clean deep charcoal base */
      }
      .scroll-reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), 
                    transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        will-change: transform, opacity;
      }
      .scroll-reveal.reveal-active {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
  </StrictMode>,
)