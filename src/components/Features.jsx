import React from 'react';
import { FaMapMarkedAlt, FaFileMedical, FaUtensils, FaPills, FaNotesMedical, FaNewspaper } from 'react-icons/fa';

const Features = () => {
  const features = [
    { icon: <FaMapMarkedAlt className="text-2xl" />, title: "Карта клиник", desc: "Найдите лучшие медицинские учреждения рядом с вами с фильтрами по специализации и рейтингам." },
    { icon: <FaFileMedical className="text-2xl" />, title: "Медицинские записи", desc: "Храните и анализируйте результаты анализов с помощью ИИ, который выявляет тенденции и аномалии." },
    { icon: <FaUtensils className="text-2xl" />, title: "Дневник питания", desc: "Отслеживайте потребление калорий, фотографируйте еду для автоматического распознавания и получайте рекомендации." },
    { icon: <FaPills className="text-2xl" />, title: "Трекер лекарств", desc: "Напоминания о приёме лекарств, журнал дозировок и проверка взаимодействий между препаратами." },
    { icon: <FaNotesMedical className="text-2xl" />, title: "Журнал симптомов", desc: "Отмечайте симптомы, добавляйте заметки и визуализируйте закономерности с течением времени." },
    { icon: <FaNewspaper className="text-2xl" />, title: "Медицинские новости", desc: "Актуальные статьи о здоровье, подобранные специально для вас с возможностью сохранения." }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши возможности</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Все инструменты для контроля вашего здоровья в одном месте</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl card-hover">
              <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;