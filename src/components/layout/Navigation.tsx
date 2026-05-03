import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { NavLink, Button } from '../shared';
import { Logo } from '../atoms/Logo';
import { focus } from '../../theme/tokens';

type View = 'home' | 'islamic-education-trust' | 'baitul-khair' | 'ebdurahman-foundation' | 'water-well' | 'educational-sponsorships' | 'skills-training' | 'orphan-empowerment' | 'sustainable-development';

interface NavigationProps {
  view: View;
  isScrolled: boolean;
  onNavigate: (view: View) => void;
  onSectionScroll: (sectionId: string) => void;
  isNavigating: boolean;
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function Navigation({
  view,
  isScrolled,
  onNavigate,
  onSectionScroll,
  isNavigating
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [view]);

  // Escape closes the dialog and returns focus to the toggle.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen]);

  // Move focus into the dialog when it opens.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  }, [mobileMenuOpen]);

  // Toggle the `inert` attribute on the dialog so closed state is fully
  // inactive for assistive tech and keyboard users (React 18 has no JSX prop).
  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    if (mobileMenuOpen) {
      node.removeAttribute('inert');
    } else {
      node.setAttribute('inert', '');
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    onSectionScroll(sectionId);
    setMobileMenuOpen(false);
  };

  const handleViewChange = (newView: View) => {
    onNavigate(newView);
    setMobileMenuOpen(false);
  };

  const handleSkipLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const main = document.getElementById('main-content');
    if (main) {
      main.focus();
      main.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    }
  };

  return (
    <>
      <a
        href="#main-content"
        onClick={handleSkipLink}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foundation-primary focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>

      <nav
        aria-label="Main"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
        className={`fixed top-0 left-0 right-0 z-50 w-full ease-in-out border-b transition-[height,background-color,box-shadow,border-color] duration-300 ${
          isScrolled
            ? 'h-16 bg-stone-50/95 backdrop-blur-md shadow-sm border-stone-100'
            : 'h-24 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 h-full">

          {/* THE GRID RULER */}
          <div className="grid grid-cols-2 md:grid-cols-12 h-full">

            <div className="md:col-span-3 flex justify-start items-center h-full gap-3">
              {view !== 'home' && (
                <button
                  type="button"
                  onClick={() => handleViewChange('home')}
                  disabled={isNavigating}
                  className={`md:hidden p-3 -ml-3 min-w-[44px] min-h-[44px] flex items-center justify-center ${isScrolled ? 'text-stone-900' : 'text-stone-100'} hover:bg-stone-100/20 rounded-lg transition-[background-color,transform,color] duration-200 active:scale-95 [touch-action:manipulation] ${focus.ring} ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
                  aria-label="Back to home"
                >
                  <ArrowLeft size={20} strokeWidth={2} aria-hidden="true" />
                </button>
              )}
              <Logo
                onClick={() => handleViewChange('home')}
                variant="full"
                size="sm"
                tone={isScrolled ? 'dark' : 'light'}
                className="hidden md:inline-flex"
                ariaLabel="The Latif Foundation — home"
              />
              <Logo
                onClick={() => handleViewChange('home')}
                variant="mark"
                size="sm"
                tone={isScrolled ? 'dark' : 'light'}
                className="md:hidden"
                ariaLabel="The Latif Foundation — home"
              />
            </div>

            {/* 2. NAVIGATION COLUMN (Perfect Center) */}
            <div className="hidden md:flex md:col-span-6 justify-center items-center h-full">
              <div
                aria-busy={isNavigating}
                className={`flex items-center gap-6 lg:gap-7 xl:gap-8 transition-opacity duration-150 ${isNavigating ? 'opacity-50 pointer-events-none' : ''}`}
              >
                {view !== 'home' ? (
                  <button
                    type="button"
                    onClick={() => handleViewChange('home')}
                    disabled={isNavigating}
                    className={`${isScrolled ? 'text-stone-500 hover:text-foundation-primary' : 'text-stone-100/90 hover:text-white'} text-sm font-medium tracking-wide uppercase flex items-center gap-2 transition-colors duration-200 whitespace-nowrap ${focus.ring} ${isNavigating ? 'cursor-not-allowed' : ''}`}
                  >
                    <ArrowLeft size={16} className="-mt-0.5" aria-hidden="true" />
                    <span>Back to Home</span>
                  </button>
                ) : (
                  <>
                    <NavLink
                      href="#inspiration"
                      tone={isScrolled ? 'default' : 'light'}
                      onClick={() => handleNavClick('inspiration')}
                      className="whitespace-nowrap"
                    >
                      Our Story
                    </NavLink>
                    <NavLink
                      href="#coalition"
                      tone={isScrolled ? 'default' : 'light'}
                      onClick={() => handleNavClick('coalition')}
                      className="whitespace-nowrap"
                    >
                      Coalition
                    </NavLink>
                    <NavLink
                      href="#focus"
                      tone={isScrolled ? 'default' : 'light'}
                      onClick={() => handleNavClick('focus')}
                      className="whitespace-nowrap"
                    >
                      Our Focus
                    </NavLink>
                  </>
                )}
              </div>
            </div>

            {/* 3. ACTIONS COLUMN (Right Aligned) */}
            <div className="flex justify-end items-center md:col-span-3 h-full">
              <div className="hidden md:block">
                <Button
                  variant="primary"
                  className="text-xs font-semibold uppercase tracking-wide px-5 py-2.5 whitespace-nowrap shadow-md hover:shadow-lg"
                  onClick={() => handleNavClick('fundraisers')}
                >
                  Current Fundraisers
                </Button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                ref={menuToggleRef}
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center ${mobileMenuOpen || isScrolled ? 'text-stone-900 hover:bg-stone-100' : 'text-stone-100 hover:bg-white/10'} rounded-lg transition-[background-color,transform,color] duration-200 active:scale-95 [touch-action:manipulation] ${focus.ring}`}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X size={22} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Menu size={22} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
        className={`fixed inset-0 z-40 bg-stone-50 transition-opacity duration-500 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6">
          <nav aria-label="Mobile" className={`flex flex-col space-y-2 transition-opacity duration-150 ${isNavigating ? 'opacity-50 pointer-events-none' : ''}`}>
            {view === 'home' ? (
              <>
                <MobileNavLink onClick={() => handleNavClick('inspiration')} disabled={isNavigating}>Our Story</MobileNavLink>
                <MobileNavLink onClick={() => handleNavClick('coalition')} disabled={isNavigating}>Coalition</MobileNavLink>
                <MobileNavLink onClick={() => handleNavClick('focus')} disabled={isNavigating}>Our Focus</MobileNavLink>
              </>
            ) : (
              <MobileNavLink onClick={() => handleViewChange('home')} disabled={isNavigating}>Back to Home</MobileNavLink>
            )}
          </nav>
          <div className="mt-auto pb-12">
            <Button variant="primary" className="!w-full !py-4" onClick={() => handleNavClick('fundraisers')}>
              Current Fundraisers
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavLink({ onClick, children, disabled }: { onClick: () => void; children: React.ReactNode; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`text-left text-3xl font-serif text-stone-800 py-4 border-b border-stone-100 hover:text-foundation-primary transition-colors duration-200 [touch-action:manipulation] ${focus.ring} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      {children}
    </button>
  );
}
