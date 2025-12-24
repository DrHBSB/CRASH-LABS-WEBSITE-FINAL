import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// Original hero saved as Hero.original.tsx
import MissionVision from './components/MissionVision';
import WhyCrashLab from './components/WhyCrashLab';
import Commitment from './components/Commitment';
import Pillars from './components/Pillars';
import Timeline from './components/Timeline';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import { blogPosts } from './data/blogPosts';
import CustomCursor from './components/CustomCursor';
import PartnershipModal from './components/PartnershipModal';
import BrandKit from './components/BrandKit';
// import Advisors from './components/Advisors';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'blog' | 'brand'>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // Check URL for routing on mount and browser navigation
  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname;
      const params = new URLSearchParams(window.location.search);

      if (path === '/brand' || params.has('brand')) {
        setCurrentView('brand');
        setSelectedPostId(null);
      } else if (path.startsWith('/blog/')) {
        const postId = path.replace('/blog/', '');
        const post = blogPosts.find(p => p.id === postId);

        if (post) {
          setSelectedPostId(postId);
          setCurrentView('blog');
        } else {
          // Invalid blog post ID, redirect to home
          setCurrentView('home');
          setSelectedPostId(null);
          window.history.replaceState({}, '', '/');
        }
      } else {
        // Home route
        setCurrentView('home');
        setSelectedPostId(null);
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  const handleViewPost = (postId: string) => {
    setSelectedPostId(postId);
    setCurrentView('blog');
    window.history.pushState({}, '', `/blog/${postId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPostId(null);
    setCurrentView('home');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedPostId(null);
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-paper selection:bg-brand-blue selection:text-white relative">
      {/* Subtle Film Grain Overlay - Now using static texture instead of SVG filter */}
      <div
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
        style={{
          backgroundImage: 'url("/noise.png")',
          backgroundRepeat: 'repeat',
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
                <WhyCrashLab onReadMore={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })} />
                <Commitment />
                <Pillars />
                <Timeline />
                <Team />
                {/* <Advisors /> */}
                <Blog onViewPost={handleViewPost} />
              </>
            ) : selectedPostId ? (
              <BlogPost
                post={blogPosts.find(p => p.id === selectedPostId)!}
                onBack={handleBackToList}
              />
            ) : null}
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