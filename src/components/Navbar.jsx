import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/problem', label: 'Problem' },
    { to: '/solution', label: 'Solution' },
    { to: '/market', label: 'Market' },
    { to: '/product', label: 'Product' },
    { to: '/business-model', label: 'Business' },
    { to: '/traction', label: 'Traction' },
    { to: '/team', label: 'Team' },
    { to: '/financials', label: 'Financials' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-primary/20 ${
      isScrolled ? 'bg-black shadow-lg shadow-primary/10' : 'bg-black/95'
    }`}>
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-light transition-colors">
            Edastra
          </Link>
          <ul className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`transition-colors ${
                    location.pathname === link.to
                      ? 'text-primary font-semibold'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
