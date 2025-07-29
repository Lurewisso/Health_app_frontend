import React from 'react';
import { FaHeartbeat, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                <FaHeartbeat className="text-xl" />
              </div>
              <span className="text-xl font-bold">МедПомощник</span>
            </div>
            <p className="text-gray-400 mb-4">Ваш персональный медицинский помощник для контроля здоровья и благополучия.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white smooth-transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white smooth-transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white smooth-transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white smooth-transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Возможности</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Карта клиник</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Медицинские записи</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Дневник питания</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Трекер лекарств</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Журнал симптомов</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">О нас</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Карьера</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Партнёры</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Центр помощи</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Сообщество</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Безопасность</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white smooth-transition">Связаться с нами</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 МедПомощник. Все права защищены.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm smooth-transition">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm smooth-transition">Условия использования</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm smooth-transition">Настройки cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;