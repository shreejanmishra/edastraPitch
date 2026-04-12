import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={`border-t border-primary/20 text-[#103A5A] py-8 relative z-40 w-full transition-all duration-300 shadow-[0_-10px_15px_-3px_var(--tw-shadow-color)] shadow-primary/10 ${
        location.pathname === "/" ? "bg-white" : "bg-white"
      }`}
    >
      <div className="section-container text-center">
        <p>&copy; 2026 Edastra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
