import React from 'react';
import { FaDownload, FaShareAlt, FaCheck, FaChartLine, FaBell } from 'react-icons/fa';

const Records = () => {
  const features = [
    {
      icon: <FaCheck />,
      title: "Автоматический анализ",
      description: "ИИ проверяет ваши показатели на соответствие нормам",
      color: "green"
    },
    {
      icon: <FaChartLine />,
      title: "Динамика показателей",
      description: "Наглядные графики изменений с течением времени",
      color: "blue"
    },
    {
      icon: <FaBell />,
      title: "Уведомления",
      description: "Оповещения при критических изменениях показателей",
      color: "purple"
    }
  ];

  return (
    <section id="records" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ваши анализы всегда под рукой</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Загружайте результаты анализов в формате PDF или изображений. Наш ИИ анализирует данные, выявляет тенденции и предупреждает о возможных проблемах.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-10 h-10 rounded-full bg-${feature.color}-100 flex items-center justify-center text-${feature.color}-600 mr-4`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="btn-primary mt-8 px-8 py-3">
              Загрузить анализы
            </button>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 border-b flex justify-between items-center">
                <div>
                  <span className="font-medium text-gray-800">Общий анализ крови</span>
                  <span className="text-sm text-gray-500 ml-2">12.06.2023</span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-primary transition-colors">
                    <FaDownload />
                  </button>
                  <button className="text-gray-500 hover:text-primary transition-colors">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    { name: "Гемоглобин", value: "135", status: "normal", unit: "г/л" },
                    { name: "Лейкоциты", value: "10.2", status: "high", unit: "↑ выше нормы" },
                    { name: "Эритроциты", value: "4.5", status: "normal", unit: "в норме" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg ${
                        item.status === "normal" 
                          ? "bg-green-50 text-green-600" 
                          : "bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-2xl font-bold">{item.value}</div>
                      <div className="text-xs">{item.unit}</div>
                    </div>
                  ))}
                </div>
                
                <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <FaChartLine className="text-3xl text-gray-400 mb-2 mx-auto" />
                    <p className="text-gray-500">График динамики показателей</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-2 mt-1">
                      <FaCheck />
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">
                        Повышенный уровень лейкоцитов может указывать на воспалительный процесс. Рекомендуем проконсультироваться с врачом.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Records;