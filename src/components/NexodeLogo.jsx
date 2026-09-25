import React from 'react';

/**
 * NexodeLogo — Official Brand Mark & Lockup for NEXODE
 * Precision mathematical geometric 'N' monogram with optional Nexus Node accent.
 *
 * Props:
 * - size: number (default: 20) — height/width of mark in px
 * - showText: boolean (default: false) — whether to show 'NEXODE' wordmark
 * - showMark: boolean (default: true) — whether to render the icon mark
 * - accent: boolean (default: true) — whether to render the cyan nexus core node
 * - className: string — optional wrapper class
 * - markClassName: string — optional mark class
 * - textClassName: string — optional wordmark class
 */
export default function NexodeLogo({
  size = 20,
  showText = false,
  showMark = true,
  accent = true,
  className = '',
  markClassName = '',
  textClassName = '',
}) {
  return (
    <span className={`nexode-logo-lockup ${className}`}>
      {showMark && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`nexode-mark-svg ${markClassName}`}
          aria-hidden="true"
        >
          {/* Mathematically Symmetrical Precision Monogram */}
          <path
            d="M15 14C15 12.3431 16.3431 11 18 11H22C22.6 11 23.1 11.3 23.4 11.7L40.6 40.5V14C40.6 12.3431 41.9431 11 43.6 11H46C47.6569 11 49 12.3431 49 14V50C49 51.6569 47.6569 53 46 53H42C41.4 53 40.9 52.7 40.6 52.3L23.4 23.5V50C23.4 51.6569 22.0569 53 20.4 53H18C16.3431 53 15 51.6569 15 50V14Z"
            fill="currentColor"
          />

          {/* Central Nexus Core Node */}
          {accent && (
            <>
              <circle cx="32" cy="32" r="3.2" fill="#000000" className="nexus-node-cutout" />
              <circle cx="32" cy="32" r="1.8" fill="#38BDF8" className="nexus-node-core" />
            </>
          )}
        </svg>
      )}

      {showText && (
        <span className={`nexode-wordmark ${textClassName}`}>
          NEXODE
        </span>
      )}

      <style>{`
        .nexode-logo-lockup {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          user-select: none;
          vertical-align: middle;
        }

        .nexode-mark-svg {
          display: inline-block;
          flex-shrink: 0;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nexode-logo-lockup:hover .nexode-mark-svg {
          transform: scale(1.08);
        }

        .nexode-wordmark {
          font-family: var(--font-inter);
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.01em;
          color: currentColor;
          text-transform: uppercase;
        }
      `}</style>
    </span>
  );
}
