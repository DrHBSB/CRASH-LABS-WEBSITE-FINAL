import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);

  // Don't render on touch devices or small screens
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 1024
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      // Check background color at cursor position
      const elementAtCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementAtCursor) {
        const bgColor = getBackgroundColor(elementAtCursor as HTMLElement);
        setIsDarkBackground(isColorDark(bgColor));
      }
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
  }, [isTouchDevice, isVisible]);

  // Get computed background color of element
  const getBackgroundColor = (element: HTMLElement): string => {
    let el: HTMLElement | null = element;
    while (el) {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        return bg;
      }
      el = el.parentElement;
    }
    return 'rgb(255, 255, 255)';
  };

  // Check if color is dark
  const isColorDark = (color: string): boolean => {
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return false;
    const [r, g, b] = rgb.map(Number);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  if (isTouchDevice) {
    return null;
  }

  // Calculate cursor styles based on state
  const getCursorStyle = (): React.CSSProperties => {
    if (isButton && buttonRect) {
      return {
        left: buttonRect.left + buttonRect.width / 2,
        top: buttonRect.top + buttonRect.height / 2,
        width: buttonRect.width + 12,
        height: buttonRect.height + 12,
        borderRadius: buttonRect.height / 2 + 6,
        transform: 'translate(-50%, -50%)',
      };
    }
    
    return {
      left: position.x,
      top: position.y,
      width: isHovering ? 56 : 40,
      height: isHovering ? 56 : 40,
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
    };
  };

  const cursorColor = isDarkBackground ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.6)';

  return (
    <>
      {/* Main cursor ring - no lag, instant position */}
      <div
        className={`fixed pointer-events-none z-[9999] border-2 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          ...getCursorStyle(),
          borderColor: isButton ? '#1a5f4a' : cursorColor,
          background: isButton ? 'rgba(44, 62, 150, 0.08)' : 'transparent',
          transition: isButton 
            ? 'left 0.15s ease-out, top 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out, border-radius 0.15s ease-out, opacity 0.2s' 
            : 'width 0.15s ease-out, height 0.15s ease-out, opacity 0.2s',
        }}
      />

      {/* Global style to hide default cursor */}
      <style>{`
        @media (pointer: fine) and (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
