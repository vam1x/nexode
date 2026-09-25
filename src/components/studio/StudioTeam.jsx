import React from 'react';
import { motion } from 'framer-motion';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "James John",
    role: "Founder & Creative Director",
    image: "https://framerusercontent.com/images/uWtw0H8V4Ms6mVhnU3Qg2Nf5IzE.png?width=928&height=1232"
  },
  {
    id: 2,
    name: "Elena Vance",
    role: "Lead Brand Strategist",
    image: "https://framerusercontent.com/images/1lsvPWSJzVPWZsOOLphOtTQ40c.png?width=928&height=1232"
  },
  {
    id: 3,
    name: "Marcus Reed",
    role: "Lead UX/UI Designer",
    image: "https://framerusercontent.com/images/UDePoV4zCRKlQEYh1eO9QvZjQ0g.png?width=928&height=1232"
  },
  {
    id: 4,
    name: "Sophia Chen",
    role: "Senior Product Designer",
    image: "https://framerusercontent.com/images/ybMp7PpJ1Ej0rnn0VuEviRoP0.png?width=928&height=1232"
  },
  {
    id: 5,
    name: "Liam Gallagher",
    role: "Motion & Visual Designer",
    image: "https://framerusercontent.com/images/GEhMHmuEimkp60kSShkrGzwUY.png?width=928&height=1232"
  },
  {
    id: 6,
    name: "Amara Patel",
    role: "Design Systems Lead",
    image: "https://framerusercontent.com/images/tUDW39lqxOKJRMdbpRuPHkImsC0.png?width=928&height=1232"
  }
];

export default function StudioTeam() {
  return (
    <section className="studio-team-section" id="team">
      <div className="team-inner container">
        {/* Section Header */}
        <div className="team-header">
          <div className="header-meta">
            <span className="team-num">04</span>
            <span className="team-label">TEAM</span>
          </div>
          <h2 className="team-headline">MEET OUR TEAM</h2>
        </div>
      </div>

      {/* Infinite Horizontal Gliding Marquee */}
      <div className="team-marquee-wrap">
        <div className="team-marquee-track">
          {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="member-img-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-img"
                  loading="lazy"
                />
              </div>
              <div className="member-meta">
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .studio-team-section {
          background-color: #000000;
          color: #e6e6e6;
          padding: 120px 0 140px;
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .team-inner {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        .team-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 1px solid rgba(230, 230, 230, 0.12);
          padding-bottom: 30px;
        }

        .header-meta {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .team-num {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(230, 230, 230, 0.5);
        }

        .team-label {
          font-family: var(--font-geist);
          font-size: 16px;
          font-weight: 500;
          color: #e6e6e6;
          text-transform: lowercase;
        }

        .team-headline {
          font-family: var(--font-host);
          font-size: clamp(48px, 7vw, 100px);
          font-weight: 400;
          line-height: 1.1;
          color: #e6e6e6;
          margin: 0;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        /* Marquee */
        .team-marquee-wrap {
          width: 100%;
          overflow: hidden;
          padding-top: 60px;
          position: relative;
        }

        .team-marquee-track {
          display: flex;
          align-items: stretch;
          gap: 24px;
          width: max-content;
          animation: teamScroll 32s linear infinite;
        }

        .team-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes teamScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .team-card {
          width: 427px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-shrink: 0;
        }

        .member-img-wrap {
          width: 100%;
          height: 500px;
          overflow: hidden;
          background-color: #111111;
        }

        .member-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .team-card:hover .member-img {
          transform: scale(1.04);
        }

        .member-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .member-name {
          font-family: var(--font-host);
          font-size: 20px;
          font-weight: 400;
          color: #e6e6e6;
          margin: 0;
        }

        .member-role {
          font-family: var(--font-geist);
          font-size: 16px;
          color: rgba(156, 156, 156, 0.7);
          margin: 0;
        }

        @media (max-width: 768px) {
          .team-card {
            width: 320px;
          }
          .member-img-wrap {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
