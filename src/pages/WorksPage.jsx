import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WorksGrid from '../components/WorksGrid';

export default function WorksPage() {
  useEffect(() => {
    document.title = "Works — Bold Craft";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <WorksGrid />
    </>
  );
}
