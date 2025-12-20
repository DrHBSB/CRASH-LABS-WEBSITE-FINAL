import React, { useState, useEffect } from 'react';
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
import PartnershipModal from './components/PartnershipModal';
import BrandKit from './components/BrandKit';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'brand'>('home');
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // Check URL for private pages on mount
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);
      
      if (path === '/brand' || params.has('brand')) {
        setCurrentView('brand');
      }
    };
    
    checkRoute();
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  const navigateToBlog = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.history.pushState({}, '', '/');
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
      
      {currentView === 'brand' ? (
        <main className="flex-grow">
          <BrandKit />
        </main>
      ) : (
        <>
          <main className="flex-grow pt-16">
            {currentView === 'home' ? (
              <>
                <Hero onPartnerClick={() => setIsPartnerModalOpen(true)} />
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
        </>
      )}
      
      {/* Partnership Modal */}
      <PartnershipModal 
        isOpen={isPartnerModalOpen} 
        onClose={() => setIsPartnerModalOpen(false)} 
      />
    </div>
  );
};

export default App;