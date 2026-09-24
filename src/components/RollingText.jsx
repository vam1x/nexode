import React from 'react';

export default function RollingText({ text, className = "", delayStep = 0.015 }) {
  const chars = text.split("");

  return (
    <span className={`rolling-text-wrap ${className}`}>
      {chars.map((char, index) => (
        <span
          key={index}
          className="rolling-text-char"
          data-char={char}
          style={{
            transitionDelay: `${index * delayStep}s`
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
