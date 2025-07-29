import React from 'react';
import { FaTrophy, FaCheck, FaLock, FaUtensils, FaPills } from 'react-icons/fa';

const Gamification = () => {
  const badges = [
    { icon: <FaCheck />, title: "Последователь", desc: "3 дня подряд записей", color: "green", locked: false },
    { icon: <FaPills />, title: "Ответственный", desc: "5 принятых лекарств", color: "blue", locked: false },
    { icon: <FaUtensils />, title: "Здоровое питание", desc: "10 записей в дневнике", color: "purple", locked: false },
    { icon: <FaLock />, title: "Секретное достижение", desc: "???", color: "gray", locked: true }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Достижения</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Зарабатывайте награды за заботу о своём здоровье
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-gray-800">Ваш прогресс</h3>
              <p className="text-sm text-gray-500">Вы на 65% пути к следующему уровню</p>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-sm font-medium text-gray-800">Уровень 2</span>
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                <FaTrophy />
              </div>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-10">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full" 
              style={{ width: '65%' }}
            ></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-4 rounded-xl text-center border ${
                  badge.locked ? 'border-gray-200 opacity-70' : 'border-transparent hover:border-primary/50'
                } transition-all`}
              >
                <div className={`w-16 h-16 rounded-full ${
                  badge.locked 
                    ? 'bg-gray-200 text-gray-400' 
                    : `bg-${badge.color}-100 text-${badge.color}-600`
                } flex items-center justify-center mx-auto mb-3 text-2xl`}
                >
                  {badge.locked ? <FaLock className="text-sm" /> : badge.icon}
                </div>
                <h4 className="font-medium mb-1 text-gray-800">{badge.title}</h4>
                <p className="text-xs text-gray-500">{badge.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <button className="btn-primary px-8 py-3">
              Показать все достижения
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;