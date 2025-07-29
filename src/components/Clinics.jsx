import React from 'react';
import { FaMapMarkedAlt, FaStar } from 'react-icons/fa';

const Clinics = () => {
  return (
    <section id="clinics" className="relative py-20 bg-gray-50">
      {/* Фоновое изображение с overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Найдите лучшую клинику</h2>
          
          {/* Фильтры */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="px-4 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-colors">
              Терапевты
            </button>
            {['Кардиологи', 'Неврологи', 'Стоматологи', 'Офтальмологи'].map((specialty) => (
              <button 
                key={specialty}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-sm transition-colors"
              >
                {specialty}
              </button>
            ))}
          </div>
          
          {/* Карта */}
          <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <FaMapMarkedAlt className="text-5xl text-gray-400" />
            </div>
            
            {/* Маркер клиники */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md w-64">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Открыто сейчас</span>
              </div>
              <h4 className="font-medium mt-1 text-gray-800">Клиника "Здоровье+"</h4>
              <div className="flex items-center mt-1">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600">4.8 (124 отзыва)</span>
              </div>
            </div>
          </div>
          
          {/* Дополнительные фильтры */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Фильтры</h3>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="ratingFilter" 
                  className="mr-2 h-4 w-4 text-primary rounded focus:ring-primary border-gray-300"
                />
                <label htmlFor="ratingFilter" className="text-sm text-gray-700">
                  Рейтинг выше 4.0
                </label>
              </div>
            </div>
            
            <button className="btn-primary w-full sm:w-auto">
              Показать 24 клиники
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clinics;