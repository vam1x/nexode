import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card-wrapper"
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
      <Link
        to={project.href}
        className="project-card group"
        aria-label={`${project.title} case study - ${project.year}`}
      >
        <div className="card-image-container">
          <img
            src={project.image}
            alt={project.alt || project.title}
            className="card-image"
            loading={index < 2 ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={index < 2 ? "high" : "auto"}
          />
        </div>

        <div className="card-info">
          <h4 className="card-title">{project.title}</h4>
          <h4 className="card-year">{project.year}</h4>
        </div>
      </Link>

      <style>{`
        .project-card-wrapper {
          width: 100%;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          text-decoration: none;
          color: var(--color-text);
        }

        .card-image-container {
          width: 100%;
          height: 744px;
          overflow: hidden;
          background-color: #f2f2f2;
          position: relative;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .project-card:hover .card-image {
          transform: scale(1.035);
        }

        .card-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          height: 40px;
        }

        .card-title {
          font-family: var(--font-host);
          font-size: 20px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.4px;
          text-transform: uppercase;
          color: var(--color-text);
        }

        .card-year {
          font-family: var(--font-host);
          font-size: 20px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.4px;
          color: var(--color-text);
        }

        @media (max-width: 1200px) {
          .card-image-container {
            height: 580px;
          }
        }

        @media (max-width: 809px) {
          .card-image-container {
            height: 420px;
          }
          .card-title,
          .card-year {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .card-image-container {
            height: 380px;
          }
        }
      `}</style>
    </motion.div>
  );
}
