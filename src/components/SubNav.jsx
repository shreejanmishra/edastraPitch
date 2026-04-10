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
    <>
      {/* Desktop Sidebar — completely unchanged */}
      <div className="hidden lg:block fixed left-0 top-[65px] h-[calc(100vh-65px)] w-64 bg-[#EAF4FB] border-r border-primary/20 overflow-y-auto z-30">
        <nav className="p-6">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`w-full text-left block px-4 py-3 rounded-lg transition-all font-audio-cassette ${
                    activeId === item.id
                      ? 'bg-primary text-white font-semibold shadow-md'
                      : 'text-gray-600 hover:bg-[#D5E9F7] hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Horizontal Pill Bar */}
      <div className="lg:hidden fixed left-0 top-[65px] w-full bg-[#EAF4FB] border-b border-primary/20 z-30 shadow-sm">
        <nav className="overflow-x-auto scrollbar-hide">
          <ul className="flex gap-2 px-3 py-2 min-w-max">
            {items.map((item) => (
              <li key={item.id} className="flex-shrink-0">
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all font-audio-cassette ${
                    activeId === item.id
                      ? 'bg-primary text-white font-semibold shadow-md'
                      : 'text-gray-600 bg-white border border-primary/15 hover:bg-[#D5E9F7] hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SubNav
