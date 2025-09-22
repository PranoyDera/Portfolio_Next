"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden w-full bg-black">
      {/* Animated Gradient Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-40 blur-3xl"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-gray-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand / Name */}
          <div className="text-lg font-bold tracking-wide text-white">
            © {new Date().getFullYear()} Pranoy Dera
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex gap-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-white transition"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
