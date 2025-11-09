import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../public/logo_ss-2.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Scoops & Sips Desserts"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              About
            </Link>

            <Link
              to="/menu"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/menu') ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Menu
            </Link>

            <Link
              to="/catering"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/catering') ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Catering
            </Link>

            <Link
              to="/order"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/order') ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Order
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-pink-600 bg-pink-50' : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/menu', label: 'Menu' },
                { to: '/catering', label: 'Catering' },
                { to: '/order', label: 'Order' },
                { to: '/contact', label: 'Contact' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.to)
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
