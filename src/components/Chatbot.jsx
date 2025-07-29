import React from 'react';
import { FaUser, FaRobot, FaPaperPlane, FaShieldAlt } from 'react-icons/fa';

const Chatbot = () => {
  const popularQuestions = [
    "Какие первые признаки диабета?",
    "Как правильно измерять давление?",
    "Какая нормальная температура тела?",
    "Что делать при пищевом отравлении?",
    "Как укрепить иммунитет?"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Медицинский чат-бот</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Получите ответы на свои вопросы о здоровье в любое время. Наш ИИ-ассистент предоставляет информацию на основе проверенных медицинских источников.
            </p>
            
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mr-3">
                  <FaUser />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                  <p className="text-sm">Какие симптомы у повышенного давления?</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  <FaRobot />
                </div>
                <div className="bg-primary/5 p-3 rounded-lg max-w-xl">
                  <p className="text-sm">
                    Симптомы повышенного давления могут включать головную боль, головокружение, тошноту, помутнение зрения и носовые кровотечения. 
                    Однако часто гипертония протекает бессимптомно, поэтому важно регулярно измерять давление.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Информация не заменяет консультацию врача.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                placeholder="Задайте вопрос о здоровье..." 
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary">
                <FaPaperPlane />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                <h3 className="text-xl font-semibold mb-2">Популярные вопросы</h3>
                <p className="opacity-90">Что чаще всего спрашивают у нашего бота</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  {popularQuestions.map((question, index) => (
                    <button 
                      key={index} 
                      className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <FaShieldAlt />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">
                        Все ответы проверяются медицинскими специалистами и основаны на актуальных клинических рекомендациях.
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

export default Chatbot;