import { useState, useEffect, useCallback, useRef } from 'react';

type View = 'home' | 'islamic-education-trust' | 'baitul-khair' | 'ebdurahman-foundation' | 'water-well' | 'educational-sponsorships' | 'skills-training' | 'orphan-empowerment' | 'sustainable-development';

interface NavigationState {
  view: View;
  navigateTo: (newView: View) => void;
  scrollToSection: (sectionId: string) => void;
  isNavigating: boolean;
}

export function useNavigation(): NavigationState {
  const [view, setView] = useState<View>('home');
  const [isNavigating, setIsNavigating] = useState(false);
  const navigationLockRef = useRef(false);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const validViews: View[] = ['islamic-education-trust', 'baitul-khair', 'ebdurahman-foundation', 'water-well', 'educational-sponsorships', 'skills-training', 'orphan-empowerment', 'sustainable-development'];
    if (validViews.includes(hash as View)) {
      setView(hash as View);
    }
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      window.scrollTo({ top: 0 });
      if (event.state?.view) {
        setView(event.state.view);
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((newView: View) => {
    if (navigationLockRef.current) return;

    navigationLockRef.current = true;
    setIsNavigating(true);

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 });
      setView(newView);
      window.history.pushState(
        { view: newView },
        '',
        newView === 'home' ? '#' : `#${newView}`
      );

      setTimeout(() => {
        setIsNavigating(false);
        navigationLockRef.current = false;
      }, 100);
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return { view, navigateTo, scrollToSection, isNavigating };
}
