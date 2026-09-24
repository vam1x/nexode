import React, { useEffect } from 'react';
import BlogHero from '../components/BlogHero';
import BlogsGrid from '../components/BlogsGrid';

export default function BlogsPage() {
  useEffect(() => {
    document.title = "Blogs — Bold Craft";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BlogHero />
      <BlogsGrid />
    </>
  );
}
