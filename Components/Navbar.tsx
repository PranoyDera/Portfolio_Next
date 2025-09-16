import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center md:px-10 px-4 py-4 bg-[#111] text-white">
      {/* Logo / Name */}
      <div className="relative font-bold md:text-lg text-sm uppercase whitespace-nowrap md:px-4 px-2 py-1">
        Pranoy Dera
      </div>

      {/* Nav Links */}
      <div className="flex md:gap-8 gap-2 md:text-sm text-xs">
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
