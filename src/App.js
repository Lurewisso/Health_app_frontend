import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Clinics from './components/Clinics';
import Records from './components/Records';
import Symptoms from './components/Symptoms';
import News from './components/News';
import Chatbot from './components/Chatbot';
import Gamification from './components/Gamification';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

function App() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header setAuthModalOpen={setAuthModalOpen} />
      
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-12 space-y-20">
          <Features />
          <Clinics />
          <Records />
          <Symptoms />
          <News />
          <Chatbot />
          <Gamification />
        </div>
      </main>
      
      <Footer />
      <AuthModal isOpen={authModalOpen} setIsOpen={setAuthModalOpen} />
    </div>
  );
}

export default App;