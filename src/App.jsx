import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Problem from './pages/Problem'
import Solution from './pages/Solution'
import Market from './pages/Market'
import Product from './pages/Product'
import BusinessModel from './pages/BusinessModel'
import Traction from './pages/Traction'
import Team from './pages/Team'
import Financials from './pages/Financials'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/market" element={<Market />} />
            <Route path="/product" element={<Product />} />
            <Route path="/business-model" element={<BusinessModel />} />
            <Route path="/traction" element={<Traction />} />
            <Route path="/team" element={<Team />} />
            <Route path="/financials" element={<Financials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
