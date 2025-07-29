import React from 'react';

const Hero = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ваш персональный медицинский помощник</h1>
          <p className="text-xl mb-8 opacity-90">Контролируйте своё здоровье в одном месте. Анализы, лекарства, питание и симптомы — всё под рукой.</p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-white text-cyan-600 rounded-lg font-medium hover:bg-opacity-90 smooth-transition">
              Начать бесплатно
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 smooth-transition">
              Узнать больше
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white bg-opacity-10"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white bg-opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
              alt="Медицинское приложение" 
              className="relative rounded-2xl shadow-2xl floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;