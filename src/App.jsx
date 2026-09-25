import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import StudioPage from './pages/StudioPage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll Restoration on Route Change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <CustomCursor />
        <div className="app-layout">
          <Navbar />
          <main id="main">
            <Routes>
              {/* Core Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/works" element={<WorksPage />} />
              <Route path="/works/:slug" element={<ProjectDetailPage />} />
              <Route path="/studio" element={<StudioPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:slug" element={<BlogDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Legal Pages */}
              <Route path="/legal/privacy-policy" element={<LegalPage type="privacy" />} />
              <Route path="/legal/terms-of-service" element={<LegalPage type="terms" />} />

              {/* 404 & Catch-All */}
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
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
