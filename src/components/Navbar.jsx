import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/our-approach", label: "Our Approach" },
    { to: "/product", label: "Product" },
    { to: "/financials", label: "Financials" },
    { to: "/team", label: "Meet the Team" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-primary/20 ${
        isScrolled || location.pathname === "/" ? "bg-black shadow-lg shadow-primary/10" : "bg-black/95"
      }`}
    >
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-primary hover:text-primary-light transition-all group"
          >
            <img
              src="/edastraBrandIcon.png"
              alt="Edastra Logo"
              className="h-8 w-8 transition-all group-hover:drop-shadow-[0_0_20px_rgba(229,195,2,0.9)]"
            />
            <span className="group-hover:drop-shadow-[0_0_15px_rgba(229,195,2,0.6)] font-thesead">
              Edastra
            </span>
          </Link>
          <ul className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`transition-colors font-audio-cassette ${
                    location.pathname === link.to ||
                    (link.to !== "/" && location.pathname.startsWith(link.to))
                      ? "text-primary font-semibold"
                      : "text-white hover:text-primary"
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
  );
};

export default Navbar;
