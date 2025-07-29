import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ваш персональный медицинский помощник
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Контролируйте своё здоровье в одном месте. Анализы, лекарства, питание и симптомы — всё под рукой.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-white text-primary hover:bg-white/90 px-8 py-3">
                Начать бесплатно
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Узнать больше
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10 animate-pulse delay-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
              alt="Медицинское приложение" 
              className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;