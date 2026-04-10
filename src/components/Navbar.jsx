import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/our-approach", label: "Our Approach" },
    { to: "/product", label: "Product" },
    { to: "/financials", label: "Financials" },
    { to: "/team", label: "Meet the Team" },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 border-b border-primary/20 bg-white shadow-lg shadow-primary/10">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary-light transition-all group"
          >
            <img
              src="/edastraBrandIcon.png"
              alt="Edastra Logo"
              className="h-8 w-8 transition-all group-hover:drop-shadow-[0_0_20px_rgba(16,58,90,0.9)]"
            />
            <span className="group-hover:drop-shadow-[0_0_15px_rgba(16,58,90,0.6)] font-thesead">
              Edastra
            </span>
          </Link>

          {/* Desktop Nav — unchanged */}
          <ul className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`transition-colors font-audio-cassette ${
                    location.pathname === link.to ||
                    (link.to !== "/" && location.pathname.startsWith(link.to))
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-primary/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary mt-1.5 transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 pb-4 space-y-1 bg-white border-t border-primary/10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all font-audio-cassette ${
                  location.pathname === link.to ||
                  (link.to !== "/" && location.pathname.startsWith(link.to))
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-700 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
