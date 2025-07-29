import React from 'react';
import { FaMapMarkedAlt, FaStar } from 'react-icons/fa';

const Clinics = () => {
  return (
    <section id="clinics" className="py-20 bg-gray-50 parallax" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}>
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Найдите лучшую клинику</h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-4 py-2 bg-cyan-600 text-white rounded-full text-sm">Терапевты</button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm">Кардиологи</button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm">Неврологи</button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm">Стоматологи</button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm">Офтальмологи</button>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <FaMapMarkedAlt className="text-5xl text-gray-400" />
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Открыто сейчас</span>
              </div>
              <h4 className="font-medium mt-1">Клиника "Здоровье+"</h4>
              <div className="flex items-center mt-1">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-sm">4.8 (124 отзыва)</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Фильтры</h3>
              <div className="flex items-center mt-2">
                <input type="checkbox" id="ratingFilter" className="mr-2" />
                <label htmlFor="ratingFilter" className="text-sm">Рейтинг выше 4.0</label>
              </div>
            </div>
            <button className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 smooth-transition">
              Показать 24 клиники
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinics;