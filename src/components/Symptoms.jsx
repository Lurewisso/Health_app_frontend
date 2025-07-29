import React from 'react';
import { FaPlus, FaTimes, FaInfoCircle, FaExclamationTriangle, FaChevronDown } from 'react-icons/fa';

const Symptoms = () => {
  const symptomsHistory = [
    {
      date: "Сегодня, 14:30",
      symptoms: ["Головная боль", "Усталость"],
      intensity: 5,
      notes: "Сильная головная боль после обеда, чувство усталости. Принял ибупрофен."
    },
    {
      date: "Вчера, 18:45",
      symptoms: ["Головная боль"],
      intensity: 7,
      notes: "Головная боль началась вечером, усиливается при движении."
    },
    {
      date: "2 дня назад, 09:15",
      symptoms: ["Тошнота"],
      intensity: 8,
      notes: "Сильная тошнота утром, не мог завтракать. Прошла после приёма омепразола."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Журнал симптомов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Отслеживайте симптомы, выявляйте закономерности и делитесь информацией с врачом</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="p-6 border-r">
              <h3 className="font-semibold mb-6">Добавить запись</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Симптомы</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                    Головная боль
                    <button className="ml-1 text-blue-500 hover:text-blue-700">
                      <FaTimes className="text-xs" />
                    </button>
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center">
                    Усталость
                    <button className="ml-1 text-green-500 hover:text-green-700">
                      <FaTimes className="text-xs" />
                    </button>
                  </span>
                </div>
                <div className="relative">
                  <input type="text" placeholder="Добавить симптом" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <FaPlus className="text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Интенсивность</label>
                <div className="flex items-center">
                  <div className="w-full">
                    <input type="range" min="1" max="10" value="5" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  </div>
                  <span className="ml-3 text-sm font-medium">5/10</span>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Дата и время</label>
                <div className="flex items-center">
                  <input type="date" className="px-4 py-2 border border-gray-300 rounded-lg mr-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                  <input type="time" className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Заметки</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" rows="3" placeholder="Опишите ваше состояние..."></textarea>
              </div>
              
              <button className="w-full py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 smooth-transition">
                Сохранить запись
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">История симптомов</h3>
                <div className="relative">
                  <select className="appearance-none bg-gray-100 border-0 rounded-lg pl-3 pr-8 py-1 text-sm focus:ring-2 focus:ring-cyan-500">
                    <option>Последние 7 дней</option>
                    <option>Последние 30 дней</option>
                    <option>Все время</option>
                  </select>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FaChevronDown className="text-xs text-gray-500" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {symptomsHistory.map((entry, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex flex-wrap gap-1 mb-1">
                          {entry.symptoms.map((symptom, i) => (
                            <span key={i} className={`px-2 py-0.5 ${i % 3 === 0 ? 'bg-blue-100 text-blue-800' : i % 3 === 1 ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'} rounded-full text-xs`}>
                              {symptom}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">{entry.date}</span>
                      </div>
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full ${entry.intensity < 4 ? 'bg-green-500' : entry.intensity < 7 ? 'bg-yellow-500' : entry.intensity < 9 ? 'bg-orange-500' : 'bg-red-500'} mr-1`}></div>
                        <span className="text-xs font-medium">{entry.intensity}/10</span>
                      </div>
                    </div>
                    <p className="text-sm mt-1">{entry.notes}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-sm text-cyan-600 font-medium">Показать все записи</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;