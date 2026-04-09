import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import OurApproach from './pages/OurApproach'
import ProductSection from './pages/ProductSection'
import FinancialsSection from './pages/FinancialsSection'
import TeamSection from './pages/TeamSection'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col min-h-0">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/our-approach/*" element={<OurApproach />} />
            <Route path="/product/*" element={<ProductSection />} />
            <Route path="/financials/*" element={<FinancialsSection />} />
            <Route path="/team/*" element={<TeamSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
