import React from 'react';
import { FaHeartbeat, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = [
    {
      title: "Возможности",
      links: ["Карта клиник", "Медицинские записи", "Дневник питания", "Трекер лекарств", "Журнал симптомов"]
    },
    {
      title: "Компания",
      links: ["О нас", "Карьера", "Блог", "Партнёры", "Контакты"]
    },
    {
      title: "Поддержка",
      links: ["Центр помощи", "Сообщество", "Безопасность", "FAQ", "Связаться с нами"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <FaHeartbeat className="text-xl" />
              </div>
              <span className="text-xl font-bold">МедПомощник</span>
            </div>
            <p className="text-gray-400 mb-6">
              Ваш персональный медицинский помощник для контроля здоровья и благополучия.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} МедПомощник. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Настройки cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;