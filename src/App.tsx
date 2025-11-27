import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-paper selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <Hero />
        <MissionVision />
        <WhyCrashLab />
        <Commitment />
        <Pillars />
        <Timeline />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;