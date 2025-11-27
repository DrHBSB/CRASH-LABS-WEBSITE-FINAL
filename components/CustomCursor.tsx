import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Handle hover states
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive elements
      const interactiveElement = target.closest('a, button, [role="button"]');
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      
      if (interactiveElement) {
        const rect = interactiveElement.getBoundingClientRect();
        setButtonRect(rect);
        setIsButton(true);
      } else {
        setButtonRect(null);
        setIsButton(false);
      }
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const relatedTarget = e.relatedTarget as HTMLElement;
      
      // Check if we're leaving an interactive element
      const leavingInteractive = target.closest('a, button, [role="button"]');
      const enteringInteractive = relatedTarget?.closest?.('a, button, [role="button"]');
      
      if (leavingInteractive && !enteringInteractive) {
        setButtonRect(null);
        setIsButton(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  // Calculate cursor styles based on state
  const getCursorStyle = (): React.CSSProperties => {
    if (isButton && buttonRect) {
      // Merge with button - position at button center, match button size
      return {
        left: buttonRect.left + buttonRect.width / 2,
        top: buttonRect.top + buttonRect.height / 2,
        width: buttonRect.width + 8,
        height: buttonRect.height + 8,
        borderRadius: buttonRect.height / 2 + 4,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.15s ease-out',
      };
    }
    
    // Default circular cursor
    return {
      left: position.x,
      top: position.y,
      width: isHovering ? 48 : 32,
      height: isHovering ? 48 : 32,
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.15s ease-out, height 0.15s ease-out, border-radius 0.15s ease-out',
    };
  };

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] border-2 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${
          isButton 
            ? 'border-brand-blue bg-brand-blue/10' 
            : isHovering 
              ? 'border-navy-900 bg-white mix-blend-difference' 
              : 'border-navy-900/60'
        }`}
        style={getCursorStyle()}
      />

      {/* Center dot - only show when not on button */}
      {!isButton && (
        <div
          className={`fixed pointer-events-none z-[9999] rounded-full transition-all duration-100 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } ${
            isHovering 
              ? 'w-1.5 h-1.5 bg-white mix-blend-difference' 
              : 'w-1 h-1 bg-navy-900'
          }`}
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* Global style to hide default cursor */}
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
