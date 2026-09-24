import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorksGrid from './components/WorksGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="app-layout">
        <Navbar />
        <main id="main">
          <Hero />
          <WorksGrid />
        </main>
        <Footer />
      </div>

      <style>{`
        .app-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: var(--color-bg);
          position: relative;
        }

        #main {
          flex: 1;
        }
      `}</style>
    </SmoothScroll>
  );
}
