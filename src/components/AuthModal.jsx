import React from 'react';
import { FaTimes, FaGoogle, FaApple } from 'react-icons/fa';

const AuthModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl overflow-hidden w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Вход в аккаунт</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <FaTimes />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email или телефон</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
              <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm">Запомнить меня</label>
              </div>
              <a href="#" className="text-sm text-cyan-600 hover:underline">Забыли пароль?</a>
            </div>
            
            <button className="w-full py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 smooth-transition mt-4">
              Войти
            </button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Или войдите через</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="py-2 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 smooth-transition">
                <FaGoogle className="text-red-500 mr-2" />
                <span>Google</span>
              </button>
              <button className="py-2 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 smooth-transition">
                <FaApple className="text-gray-800 mr-2" />
                <span>Apple</span>
              </button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">Нет аккаунта? <a href="#" className="text-cyan-600 font-medium hover:underline">Зарегистрироваться</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;