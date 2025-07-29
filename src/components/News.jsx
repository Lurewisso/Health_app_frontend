import React from 'react';
import { FaBookmark, FaChevronRight } from 'react-icons/fa';

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: "15 июня 2023",
      title: "Новые рекомендации по профилактике сердечных заболеваний",
      description: "Американская кардиологическая ассоциация обновила руководство по профилактике сердечно-сосудистых заболеваний с акцентом на раннюю диагностику.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      saved: false
    },
    {
      id: 2,
      date: "10 июня 2023",
      title: "Прорыв в лечении диабета 2 типа",
      description: "Учёные разработали новый препарат, который показал высокую эффективность в контроле уровня сахара в крови без серьёзных побочных эффектов.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      saved: false
    },
    {
      id: 3,
      date: "5 июня 2023",
      title: "Как стресс влияет на иммунную систему",
      description: "Новое исследование раскрывает механизмы, с помощью которых хронический стресс ослабляет иммунный ответ и увеличивает восприимчивость к болезням.",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      saved: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Медицинские новости</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Актуальные статьи о здоровье и медицине</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(news => (
            <div key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <button className={`${news.saved ? 'text-cyan-600' : 'text-gray-400'} hover:text-cyan-600`}>
                    <FaBookmark />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <button className="text-cyan-600 font-medium flex items-center">
                  Читать далее
                  <FaChevronRight className="ml-1 text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 smooth-transition">
            Показать больше статей
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;