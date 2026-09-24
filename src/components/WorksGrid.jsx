import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function WorksGrid() {
  return (
    <section className="works-section" aria-label="Selected Works">
      <div className="works-grid container">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <style>{`
        .works-section {
          width: 100%;
          background-color: var(--color-bg);
          padding-bottom: 140px;
        }

        .works-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: 20px;
          row-gap: 30px;
        }

        @media (max-width: 809px) {
          .works-section {
            padding-bottom: 90px;
          }
          .works-grid {
            grid-template-columns: 1fr;
            row-gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}
