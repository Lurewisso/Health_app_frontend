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
import './App.css'; 

function App() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header setAuthModalOpen={setAuthModalOpen} />
      <Hero />
      <Features />
      <Clinics />
      <Records />

      <Symptoms />
      <News />
      <Chatbot />
      <Gamification />
      <Footer />
      
      <AuthModal isOpen={authModalOpen} setIsOpen={setAuthModalOpen} />
    </div>
  );
}

export default App;