// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header({ scrollToSection, homeRef, aboutRef, menuRef, contactRef }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (ref) => {
    scrollToSection(ref);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* ✅ Top contact bar – only visible when not scrolled */}
        {!isScrolled && (
          <div className="justify-between items-center text-sm text-gray-400 mb-4 hidden md:flex">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <MapPin size={16} className="mr-1" />
                Gopalganj, Bihar, IND 841440
              </span>
              <span className="flex items-center">
                <Phone size={16} className="mr-1" />
                +1 123 456 7890
              </span>
              <span className="flex items-center">
                <Mail size={16} className="mr-1" />
                info@alonekitchen.com
              </span>
            </div>
            <Link
              to="/reservation"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-300"
            >
              BOOK A TABLE
            </Link>
          </div>
        )}

        {/* Navbar */}
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-white tracking-wider">
            Alone Kitchen
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => handleLinkClick(homeRef)}
                className="text-white hover:text-orange-500 font-semibold transition"
              >
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick(aboutRef)}
                className="text-white hover:text-orange-500 font-semibold transition"
              >
                ABOUT
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick(menuRef)}
                className="text-white hover:text-orange-500 font-semibold transition"
              >
                MENU
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick(contactRef)}
                className="text-white hover:text-orange-500 font-semibold transition"
              >
                CONTACT
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-800 rounded-md px-4 py-3 shadow-lg">
            <ul className="flex flex-col space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick(homeRef)}
                  className="text-white text-left w-full font-semibold"
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick(aboutRef)}
                  className="text-white text-left w-full font-semibold"
                >
                  ABOUT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick(menuRef)}
                  className="text-white text-left w-full font-semibold"
                >
                  MENU
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick(contactRef)}
                  className="text-white text-left w-full font-semibold"
                >
                  CONTACT
                </button>
              </li>
              <li>
                <Link
                  to="/reservation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-full font-semibold mt-2"
                >
                  BOOK A TABLE
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
