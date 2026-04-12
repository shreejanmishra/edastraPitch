import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'

// Lazy-load route-level components — each becomes its own JS chunk
const OurApproach = React.lazy(() => import('./pages/OurApproach'))
const ProductSection = React.lazy(() => import('./pages/ProductSection'))
const FinancialsSection = React.lazy(() => import('./pages/FinancialsSection'))
const TeamSection = React.lazy(() => import('./pages/TeamSection'))

const RouteSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col min-h-0">
          <Suspense fallback={<RouteSpinner />}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/our-approach/*" element={<OurApproach />} />
              <Route path="/product/*" element={<ProductSection />} />
              <Route path="/financials/*" element={<FinancialsSection />} />
              <Route path="/team/*" element={<TeamSection />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
