import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { ProductGrid } from './components/ProductGrid'
import { Wearables } from './components/Wearables' 
import { Support } from './components/Support'     
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0d0e12' }}>
      {/* Premium Navigation Hub */}
      <Navbar />

      <Routes>
        {/* 1. ARCHITECTURAL LANDING HOME VIEW */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Categories />
              <Footer />
            </>
          } 
        />

        {/* 2. ISOLATED PRODUCT INVENTORY MATRIX */}
        <Route 
          path="/products" 
          element={
            <>
              <ProductGrid />
              <Footer />
            </>
          } 
        />

        {/* 3. PREMIUM BIOMECHANICAL WEARABLES SUITE */}
        <Route 
          path="/wearables" 
          element={
            <>
              <Wearables />
              <Footer />
            </>
          } 
        />

        {/* 4. GLASSMORPHIC SUPPORT OPERATION CENTER */}
        <Route 
          path="/support" 
          element={
            <>
              <Support />
              <Footer />
            </>
          } 
        />
      </Routes>
    </div>
  )
}