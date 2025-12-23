import React from 'react';

/**
 * Shared Logo Component to ensure consistency across the application.
 * Retains the ability to style color via current color (className text-*)
 */
interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", color }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} fill-none stroke-current`} 
      strokeWidth="10" 
      strokeLinecap="square" 
      style={color ? { color } : undefined}
    >
      {/* Outer C */}
      <path d="M 85 28 A 42 42 0 1 0 85 72" />
      {/* Inner Square */}
      <rect x="32" y="32" width="36" height="36" strokeWidth="8" />
      {/* Center Line */}
      <line x1="50" y1="50" x2="92" y2="50" strokeWidth="8" />
      {/* Center Dot (Filled) */}
      <circle cx="50" cy="50" r="8" className="fill-current stroke-none" />
    </svg>
  );
};

export default Logo;
