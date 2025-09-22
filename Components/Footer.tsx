"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative w-full h-[300px] bg-black overflow-hidden">
      {/* Animated Gradient Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-40 blur-3xl pointer-events-none"
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 text-white flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold font-[roboto]">LET'S CONNECT</h1>
          <p>
            Say hello at{" "}
            <span className="border-b-2 border-lime-500 cursor-pointer">
              pranoydera@gmail.com
            </span>
          </p>
          <p>
            For more information, check out my{" "}
            <a
              href="/PranoyDeraResume.pdf"
              download="PranoyDeraResume.pdf"
              className="text-lime-400 hover:underline cursor-pointer"
            >
              resume
            </a>
            .
          </p>
           {/* Social Links */}
        <div className="flex items-center gap-6 text-2xl mt-4 md:mt-0">
          <a
            href="https://github.com/PranoyDera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors cursor-pointer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pranoy-dera-7b338832b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-400 transition-colors cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:pranoydera@gmail.com"
            className="hover:text-lime-400 transition-colors cursor-pointer"
          >
            <IoMdMail />
          </a>
        </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
