import React from 'react';
import { FaDownload, FaShareAlt, FaCheck, FaChartLine, FaBell } from 'react-icons/fa';

const Records = () => {
  return (
    <section id="records" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 className="text-3xl font-bold mb-6">Ваши анализы всегда под рукой</h2>
            <p className="text-gray-600 mb-8">Загружайте результаты анализов в формате PDF или изображений. Наш ИИ анализирует данные, выявляет тенденции и предупреждает о возможных проблемах.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 mt-1">
                  <FaCheck />
                </div>
                <div>
                  <h4 className="font-medium">Автоматический анализ</h4>
                  <p className="text-sm text-gray-500">ИИ проверяет ваши показатели на соответствие нормам</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">
                  <FaChartLine />
                </div>
                <div>
                  <h4 className="font-medium">Динамика показателей</h4>
                  <p className="text-sm text-gray-500">Наглядные графики изменений с течением времени</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3 mt-1">
                  <FaBell />
                </div>
                <div>
                  <h4 className="font-medium">Уведомления</h4>
                  <p className="text-sm text-gray-500">Оповещения при критических изменениях показателей</p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 smooth-transition">
              Загрузить анализы
            </button>
          </div>
          
          <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 border-b flex justify-between items-center">
                <div>
                  <span className="font-medium">Общий анализ крови</span>
                  <span className="text-sm text-gray-500 ml-2">12.06.2023</span>
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaDownload />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-green-600 font-medium">Гемоглобин</div>
                    <div className="text-2xl font-bold">135</div>
                    <div className="text-xs text-green-600">г/л (норма)</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <div className="text-yellow-600 font-medium">Лейкоциты</div>
                    <div className="text-2xl font-bold">10.2</div>
                    <div className="text-xs text-yellow-600">↑ выше нормы</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-green-600 font-medium">Эритроциты</div>
                    <div className="text-2xl font-bold">4.5</div>
                    <div className="text-xs text-green-600">в норме</div>
                  </div>
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
                      <p className="text-sm">Повышенный уровень лейкоцитов может указывать на воспалительный процесс. Рекомендуем проконсультироваться с врачом.</p>
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