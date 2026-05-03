import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollState {
  isScrolled: boolean;
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
}

export function useScrollPosition(threshold = 50): ScrollState {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const updateScrollState = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > threshold);
    setScrollY(currentScrollY);

    if (currentScrollY > lastScrollY.current) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection('up');
    }

    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, [threshold]);

  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(updateScrollState);
      ticking.current = true;
    }
  }, [updateScrollState]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollState();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, updateScrollState]);

  return { isScrolled, scrollY, scrollDirection };
}
