import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import WhyCrashLab from './components/WhyCrashLab';
import Commitment from './components/Commitment';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  const navigateToBlog = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-paper selection:bg-brand-blue selection:text-white">
      <CustomCursor />
      <Navbar onNavigateHome={navigateToHome} />
      
      <main className="flex-grow pt-24">
        {currentView === 'home' ? (
          <>
            <Hero />
            <MissionVision />
            <WhyCrashLab onReadMore={navigateToBlog} />
            <Commitment />
            <Pillars />
            <Timeline />
            <Team />
            <Blog />
          </>
        ) : (
          <BlogPost onBack={navigateToHome} />
        )}
      </main>
      
      <Footer onNavigateHome={navigateToHome} />
    </div>
  );
};

export default App;