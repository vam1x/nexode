import React, { useEffect } from 'react';
import StudioHero from '../components/studio/StudioHero';
import StudioWhoWeAre from '../components/studio/StudioWhoWeAre';
import StudioGoals from '../components/studio/StudioGoals';
import StudioTeam from '../components/studio/StudioTeam';
import HomeFAQ from '../components/home/HomeFAQ';

export default function StudioPage() {
  useEffect(() => {
    document.title = "Studio — Bold Craft";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="studio-page">
      <StudioHero />
      <StudioWhoWeAre />
      <StudioGoals />
      <StudioTeam />
      <HomeFAQ />

      <style>{`
        .studio-page {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }
      `}</style>
    </div>
  );
}
