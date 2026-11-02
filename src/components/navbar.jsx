import 'react'
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navColor = isHomePage ? "text-white" : "text-black";
  const logoSrc = isHomePage ? "./public/images/jaftalogo.png" : "./public/images/jaftalogo2.png";

  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex w-full items-center justify-between px-4 mb-50 sm:px-8 lg:px-12">
      <div>
        <Link to="/">
          <img
            src={logoSrc}
            alt="Jafuta"
            className="h-50 w-50"
          />
        </Link>
      </div>
      <div className="hidden items-center ml-40 gap-5 lg:flex">
        <Link to="/" className={`text-xl ${navColor} hover:border-b`}>Home</Link>
        <Link to="/vision" className={`text-xl ${navColor} hover:border-b`}>Our Vision</Link>
        <div className="relative group">
          <Link to="/projects" className={`text-xl ${navColor} hover:border-b`}>Projects</Link>
          <div className={`absolute right-0 top-full z-50 hidden w-80 py-2 group-hover:block backdrop-blur-xl border shadow-lg ${ isHomePage ? "bg-white/70 border-black/10" : "bg-transparent border-white/20" }`}>
            <a href="https://www.jafutafoundation.org/women-youth-empowerment" className={`block px-4 py-2 hover:bg-white/70 hover:text-[#3b878a] ${navColor}`}>Women and Youth Empowerment</a>
            <a href="https://www.jafutafoundation.org/education-digital-access" className={`block px-4 py-2 hover:bg-white/70 hover:text-[#3b878a] ${navColor}`}>Education & Digital Access</a>
            <a href="https://www.jafutafoundation.org/water-sanitation-wash-health" className={`block px-4 py-2 hover:bg-white/70 hover:text-[#3b878a] ${navColor}`}>Water, Sanitation (WASH) & Health</a>
            <a href="https://www.jafutafoundation.org/water-sanitation-wash-health" className={`block px-4 py-2 hover:bg-white/70 hover:text-[#3b878a] ${navColor}`}>Livelihoods & Food Security</a>
            <a href="https://www.jafutafoundation.org/conservation-community-co-existence" className={`block px-4 py-2 hover:bg-white/70 hover:text-[#3b878a] ${navColor}`}>Conservation & Community Co-Existence</a>
            <a href="https://www.jafutafoundation.org/creativity-arts-culture" className={`block px-4 py-2 hover:bg-white/70 hover:text-[#3b878a] ${navColor}`}>Creativity, Arts & Culture</a>
            </div>
        </div>
        <Link to="/about" className={`text-xl ${navColor} hover:border-b`}>About Us</Link>
          <Link to="/ourteam" className={`text-xl ${navColor} hover:border-b`}>Our Team</Link>
        <Link to="/blog" className={`text-xl ${navColor} hover:border-b`}>Blog</Link>
        <a href="https://www.facebook.com/" className={`mt-1 ml-5 inline-flex items-center ${navColor} hover:text-[#1877F2] transition-colors duration-200`}><TiSocialFacebook className="text-2xl" /></a>
        <a href="https://www.instagram.com/" className={`mt-1 inline-flex items-center ${navColor} hover:text-[#EE2A7B] transition-colors duration-200`}><FaInstagram className="text-2xl" /></a>
      </div>
        <div className="flex items-center gap-3">
         <Link to="/donate" className="hidden items-center justify-center bg-[#39868E] px-5 py-2 text-white hover:bg-[#32816E] sm:inline-flex">Donate</Link>
        </div>
    </nav>
  );
}

export default Navbar;
