import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-[#111] text-white">
      {/* Logo / Name */}
      <div className="relative font-bold text-lg uppercase px-4 py-1">
        Pranoy Dera
      </div>

      {/* Nav Links */}
      <div className="flex gap-8 text-sm">
        <a href="#work" className="hover:text-sky-500 transition-colors">
          Work
        </a>
        <a href="#about" className="hover:text-sky-500 transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-sky-500 transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
