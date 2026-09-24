import React from 'react';
import { motion } from 'framer-motion';

export default function BlogCard({ blog, index }) {
  return (
    <motion.article
      className="blog-card-wrapper"
      initial={{ opacity: 0.001, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 80,
        mass: 1,
        delay: (index % 2) * 0.12
      }}
    >
      <a
        href={blog.href}
        className="blog-card group"
        aria-label={`${blog.title} - published on ${blog.date}`}
      >
        <div className="blog-image-container">
          <img
            src={blog.image}
            alt={blog.alt || blog.title}
            className="blog-image"
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={index < 2 ? "high" : "auto"}
          />
        </div>

        <div className="blog-info">
          <time className="blog-date" dateTime={blog.date}>
            {blog.date}
          </time>
          <h4 className="blog-title">{blog.title}</h4>
        </div>
      </a>

      <style>{`
        .blog-card-wrapper {
          width: 100%;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          text-decoration: none;
          color: var(--color-text);
        }

        .blog-image-container {
          width: 100%;
          height: 617px;
          overflow: hidden;
          background-color: #f2f2f2;
          position: relative;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.035);
        }

        .blog-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 20px;
        }

        .blog-date {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          color: var(--color-text-muted);
          margin-bottom: 8px;
        }

        .blog-title {
          font-family: var(--font-host);
          font-size: 24px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.48px;
          color: var(--color-text);
          transition: color 0.2s ease;
        }

        @media (max-width: 1200px) {
          .blog-image-container {
            height: 500px;
          }
        }

        @media (max-width: 809px) {
          .blog-image-container {
            height: 380px;
          }
          .blog-date {
            font-size: 15px;
          }
          .blog-title {
            font-size: 20px;
            line-height: 1.35;
          }
        }

        @media (max-width: 480px) {
          .blog-image-container {
            height: 318px;
          }
        }
      `}</style>
    </motion.article>
  );
}
