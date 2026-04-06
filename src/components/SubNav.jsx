import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SubNav = ({ items }) => {
  const location = useLocation()

  return (
    <div className="fixed left-0 top-[65px] h-[calc(100vh-65px)] w-64 bg-dark-lighter border-r border-primary/20 overflow-y-auto z-30">
      <nav className="p-6">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`block px-4 py-3 rounded-lg transition-all font-audio-cassette ${
                  location.pathname === item.to
                    ? 'bg-primary text-black font-semibold'
                    : 'text-gray-300 hover:bg-dark-light hover:text-primary'
                }`}
              >
                <span className="text-sm text-gray-500 mr-2">{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SubNav
