import React, { useState } from 'react';
import { FaHeartbeat, FaBars, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ setAuthModalOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { href: "#features", text: "Возможности" },
    { href: "#clinics", text: "Клиники" },
    { href: "#records", text: "Анализы" },
    { href: "#diary", text: "Дневник" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
              <FaHeartbeat className="text-xl" />
            </div>
            <span className="text-xl font-bold text-primary dark:text-cyan-400">МедПомощник</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400 transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="hidden sm:flex items-center text-gray-700 dark:text-gray-300"
            >
              {darkMode ? (
                <FaSun className="text-xl" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </button>
            <button 
              onClick={() => setAuthModalOpen(true)}
              className="btn-primary px-4 py-2 hidden sm:block"
            >
              Войти
            </button>
            <button 
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <button 
                onClick={toggleDarkMode}
                className="flex items-center text-gray-700 dark:text-gray-300"
              >
                {darkMode ? (
                  <>
                    <FaSun className="mr-2" /> Светлая тема
                  </>
                ) : (
                  <>
                    <FaMoon className="mr-2" /> Тёмная тема
                  </>
                )}
              </button>
              <button 
                onClick={() => {
                  setAuthModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="btn-primary px-4 py-2"
              >
                Войти
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;