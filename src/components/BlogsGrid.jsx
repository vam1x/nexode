import React from 'react';
import { blogs } from '../data/blogs';
import BlogCard from './BlogCard';

export default function BlogsGrid() {
  return (
    <section className="blogs-section" aria-label="Articles & Insights">
      <div className="blogs-grid container">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>

      <style>{`
        .blogs-section {
          width: 100%;
          background-color: var(--color-bg);
          padding-bottom: 140px;
        }

        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 20px;
          row-gap: 40px;
        }

        @media (max-width: 809px) {
          .blogs-section {
            padding-bottom: 90px;
          }
          .blogs-grid {
            grid-template-columns: 1fr;
            row-gap: 36px;
          }
        }
      `}</style>
    </section>
  );
}
