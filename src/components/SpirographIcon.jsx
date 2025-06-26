import React from 'react';

// To make this component work, ensure you have Tailwind CSS set up in your project.
// You also might want to link the 'Inter' font if it's not already available.
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" />

// Helper component for the spirograph icon
const SpirographIcon = () => {
  // This SVG creates a geometric flower-like pattern similar to the one in the image.
  // It works by drawing multiple rotated ellipses.
  return (
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#EB8B58] [animation:spin_5s_linear_infinite]">
      <g transform="translate(50,50)">
        {[...Array(20)].map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="0"
            rx="45"
            ry="15"
            stroke="currentColor"
            strokeWidth="1.5"
            transform={`rotate(${i * 18})`}
          />
        ))}
      </g>
    </svg>
  );
};

export default SpirographIcon;