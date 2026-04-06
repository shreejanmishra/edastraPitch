import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import OurApproach from './pages/OurApproach'
import Product from './pages/Product'
import Financials from './pages/Financials'
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
            <Route path="/product" element={<Product />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/team/*" element={<TeamSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
