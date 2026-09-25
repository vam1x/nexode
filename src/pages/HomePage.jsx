import React, { useEffect } from 'react';
import HomeHero from '../components/home/HomeHero';
import WhoWeAre from '../components/home/WhoWeAre';
import HomeWorks from '../components/home/HomeWorks';
import HomeServices from '../components/home/HomeServices';
import HomeTestimonial from '../components/home/HomeTestimonial';
import HomeFAQ from '../components/home/HomeFAQ';
import HomeBlog from '../components/home/HomeBlog';

export default function HomePage() {
  useEffect(() => {
    document.title = "NEXODE — Digital Design & Product Studio";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-page">
      <HomeHero />
      <WhoWeAre />
      <HomeWorks />
      <HomeServices />
      <HomeTestimonial />
      <HomeFAQ />
      <HomeBlog />

      <style>{`
        .home-page {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }
      `}</style>
    </div>
  );
}
