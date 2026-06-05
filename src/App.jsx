import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adds the class when it rolls onto the screen
            entry.target.classList.add('reveal-active');
          } else {
            // REMOVES the class when it leaves, allowing it to replay!
            entry.target.classList.remove('reveal-active');
          }
        });
      },
      { 
        // rootMargin tells it to wait until the element is 100px past the bottom edge
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1 // Triggers when 10% of the component layout is visible
      }
    );

    const sections = document.querySelectorAll('.scroll-reveal');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div style={{ backgroundColor: '#0a0b0d', minHeight: '100vh', margin: 0, padding: 0 }}>
      <Navbar />
      <div className="scroll-reveal"><Hero /></div>
      <div className="scroll-reveal"><Categories /></div>
      <div className="scroll-reveal"><ProductGrid /></div>
      <Footer />
    </div>
  );
}

export default App;