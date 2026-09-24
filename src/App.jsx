import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import BlogsPage from './pages/BlogsPage';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <CustomCursor />
        <div className="app-layout">
          <Navbar />
          <main id="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
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
    </BrowserRouter>
  );
}
