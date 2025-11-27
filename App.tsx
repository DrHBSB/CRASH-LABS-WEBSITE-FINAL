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
import CTA from './components/CTA';
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
    <div className="w-full min-h-screen flex flex-col font-sans bg-paper selection:bg-brand-blue selection:text-white relative">
      {/* Subtle Film Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <CustomCursor />
      <Navbar onNavigateHome={navigateToHome} />
      
      <main className="flex-grow pt-16">
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
            <CTA />
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