import React, { useState, useEffect } from 'react'

const SubNav = ({ items }) => {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    // If no ids passed, return early
    if (!items || items.length === 0 || !items[0].id) return;
    
    // Set first item active initially
    setActiveId(items[0].id)

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px', // Trigger exactly when element passes middle of viewport
      threshold: 0,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed left-0 top-[65px] h-[calc(100vh-65px)] w-64 bg-dark-lighter border-r border-primary/20 overflow-y-auto z-30">
      <nav className="p-6">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className={`w-full text-left block px-4 py-3 rounded-lg transition-all font-audio-cassette ${
                  activeId === item.id
                    ? 'bg-primary text-black font-semibold'
                    : 'text-gray-300 hover:bg-dark-light hover:text-primary'
                }`}
              >
                <span className="text-sm text-gray-500 mr-2">{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SubNav
