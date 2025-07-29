import React, { useState } from 'react';
import { FaHeartbeat, FaBars } from 'react-icons/fa';

const Header = ({ setAuthModalOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
            <FaHeartbeat className="text-xl" />
          </div>
          <span className="text-xl font-bold text-cyan-600 dark:text-cyan-400">МедПомощник</span>
        </div>
        
        <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex space-x-8`}>
          <a href="#features" className="font-medium hover:text-cyan-600 dark:hover:text-cyan-400 smooth-transition">Возможности</a>
          <a href="#clinics" className="font-medium hover:text-cyan-600 dark:hover:text-cyan-400 smooth-transition">Клиники</a>
          <a href="#records" className="font-medium hover:text-cyan-600 dark:hover:text-cyan-400 smooth-transition">Анализы</a>
          <a href="#diary" className="font-medium hover:text-cyan-600 dark:hover:text-cyan-400 smooth-transition">Дневник</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2 text-sm hidden sm:inline">Тёмный режим</span>
            <button 
              onClick={toggleDarkMode}
              className="relative inline-block w-12 mr-2 align-middle select-none"
            >
              <div className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer">
                <div className={`absolute top-0 ${darkMode ? 'right-0' : 'left-0'} block w-6 h-6 rounded-full bg-white border-4 border-transparent transform transition-transform duration-300 ease-in-out`}></div>
              </div>
            </button>
          </div>
          <button 
            onClick={() => setAuthModalOpen(true)}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 smooth-transition"
          >
            Войти
          </button>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;