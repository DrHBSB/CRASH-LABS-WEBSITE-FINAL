import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const currentPosRef = useRef({ x: 0, y: 0 });

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

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use RAF to throttle position updates - updates via CSS custom properties (no React re-render)
    const handleMouseMove = (e: MouseEvent) => {
      currentPosRef.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) setIsVisible(true);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!isButton) {
          // Direct DOM manipulation for position - no React re-render
          cursor.style.setProperty('--cursor-x', `${currentPosRef.current.x}px`);
          cursor.style.setProperty('--cursor-y', `${currentPosRef.current.y}px`);
        }
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('a, button, [role="button"]');
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');

      // Check if element or any parent has data-no-cursor attribute
      const hasNoCursor = target.closest('[data-no-cursor]');

      if (interactiveElement && !hasNoCursor) {
        const rect = interactiveElement.getBoundingClientRect();
        setButtonRect(rect);
        setIsButton(true);
      } else {
        setButtonRect(null);
        setIsButton(false);
      }

      setIsHovering(!!isInteractive && !hasNoCursor);
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

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouchDevice, isVisible, isButton]);

  if (isTouchDevice) {
    return null;
  }

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
      // Use CSS custom properties for position (updated via DOM, not React state)
      left: 'var(--cursor-x, 0px)',
      top: 'var(--cursor-y, 0px)',
      width: isHovering ? 56 : 40,
      height: isHovering ? 56 : 40,
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      willChange: 'transform', // GPU acceleration hint
    };
  };

  // Universal cursor colors that work on both light beige and dark navy backgrounds
  const cursorBorder = isButton ? '#456882' : 'rgba(255, 255, 255, 0.9)';
  const cursorBg = isButton ? 'rgba(69, 104, 130, 0.15)' : 'rgba(0, 0, 0, 0.1)';

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[10001] border-2 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          ...getCursorStyle(),
          borderColor: cursorBorder,
          background: cursorBg,
          boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.3)', // Dark outline for contrast on light backgrounds
          transition: isButton
            ? 'left 0.15s ease-out, top 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out, border-radius 0.15s ease-out, opacity 0.2s'
            : 'width 0.15s ease-out, height 0.15s ease-out, opacity 0.2s',
        }}
      />

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
