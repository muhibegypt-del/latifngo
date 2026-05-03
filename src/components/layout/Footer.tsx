import { Logo } from '../atoms/Logo';
import { focus } from '../../theme/tokens';

type View = 'home';

interface FooterProps {
  onNavigate: (view: View) => void;
  isNavigating: boolean;
}

export function Footer({ onNavigate, isNavigating }: FooterProps) {
  return (
    <footer className="bg-stone-50 pt-20 pb-10 px-6 md:px-10 lg:px-16 border-t border-stone-200 relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 pr-12">
            <div className="mb-8">
              <Logo
                onClick={() => onNavigate('home')}
                variant="full"
                orientation="stacked"
                size="lg"
                tone="dark"
                ariaLabel="Go to top"
              />
            </div>
            <p className="text-stone-600 max-w-sm leading-relaxed text-sm mb-8">
              Transforming short term relief into long term dignity. Partnering with trusted grassroots organisations to create lasting change.
            </p>
          </div>

          <FooterColumn title="Explore">
            <FooterLink onClick={() => onNavigate('home')} disabled={isNavigating}>Home</FooterLink>

          </FooterColumn>

          <FooterColumn title="Contact">
            <li>
              <a
                href="mailto:info@latiffoundation.org"
                className={`text-stone-600 hover:text-foundation-primary transition-colors text-sm ${focus.ring}`}
              >
                info@latiffoundation.org
              </a>
            </li>
            <li className="text-stone-600 text-sm">Website designed by Kin&nbsp;&amp;&nbsp;Copy</li>
          </FooterColumn>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-stone-200 text-stone-500 text-xs tracking-wide">
          <div className="space-y-1">
            <p className="font-serif text-foundation-primary text-xl mb-4">&copy; {new Date().getFullYear()} The Latif Foundation.</p>
            <p>Registered in Nigeria</p>
            <p>CAC Registration Number: 9295995</p>
            <p>Tax Identification Number (TIN): 2620339892575</p>
          </div>
          <p className="mt-4 md:mt-0 uppercase tracking-wide">Restrained Elegance.</p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-8">
        {title}
      </h3>
      <ul className="space-y-4">{children}</ul>
    </div>
  );
}

interface FooterLinkProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

function FooterLink({ onClick, children, disabled }: FooterLinkProps) {
  return (
    <li>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`text-stone-600 hover:text-foundation-primary transition-colors text-sm text-left min-h-[44px] flex items-center ${focus.ring} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {children}
      </button>
    </li>
  );
}
