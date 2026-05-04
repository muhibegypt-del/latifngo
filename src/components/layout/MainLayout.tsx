import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

import { View } from '../../hooks/useNavigation';
interface MainLayoutProps {
  children: ReactNode;
  view: View;
  isScrolled: boolean;
  onNavigate: (view: View) => void;
  onSectionScroll: (sectionId: string) => void;
  isNavigating: boolean;
}

export function MainLayout({
  children,
  view,
  isScrolled,
  onNavigate,
  onSectionScroll,
  isNavigating
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-teal-100 selection:text-teal-900 relative">
      <Navigation
        view={view}
        isScrolled={isScrolled}
        onNavigate={onNavigate}
        onSectionScroll={onSectionScroll}
        isNavigating={isNavigating}
      />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer onNavigate={onNavigate} isNavigating={isNavigating} />
    </div>
  );
}
