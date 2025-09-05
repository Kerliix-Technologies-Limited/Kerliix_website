import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-900 to-gray-900 border-b border-white/20 text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
                alt="Kerliix Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-400 transition">
              Products & Services
            </Link>
            <Link to="/blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
            <Link to="/announcements" className="hover:text-blue-400 transition">
              What's New
            </Link>
            <Link to="/help" className="hover:text-blue-400 transition">
              Help Center
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </div>

          {/* Right: Search + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              onClick={() => setShowSearch((prev) => !prev)}
              className="text-white hover:text-blue-400 focus:outline-none"
              aria-label="Search"
            >
              <FiSearch size={22} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-blue-400 focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-gradient-to-br from-blue-900 to-gray-900 border-t border-white/20 px-4 py-3 space-y-3 text-sm font-medium">
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition">
              About
            </Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition">
              Products & Services
            </Link>
            <Link to="/blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
            <Link to="/announcements" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition">
              What's New
            </Link>
            <Link to="/help" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition">
              Help Center
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Search bar (slides down under navbar) */}
      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
    </>
  );
}
