import { ReactNode, MouseEvent, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  stagger?: number;
  width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, className = "", delay = 0, direction = "up", width = "100%" }: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={className} style={{ width }}>
        {children}
      </div>
    );
  }

  return (
    <div className={className} style={{ width }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
        className={className.includes('h-full') ? 'h-full' : ''}
      >
        {children}
      </motion.div>
    </div>
  );
};

// --- AESTHETIC COMPONENTS ---

export const ZelligeSeparator = ({ className = "" }) => (
  <div className={`flex items-center gap-4 opacity-30 py-10 ${className}`} aria-hidden="true">
    <div className="h-px bg-stone-400 w-12"></div>
    <div className="flex gap-3">
       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-foundation-primary"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" /></svg>
       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-foundation-secondary"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" /></svg>
       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-foundation-primary"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor" /></svg>
    </div>
    <div className="h-px bg-stone-400 w-12"></div>
  </div>
);

export const StainedGlassOverlay = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-foundation-primary/5 blur-[120px] rounded-full"></div>
    <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-foundation-secondary/5 blur-[100px] rounded-full"></div>
    <div className="absolute top-[-5%] left-[20%] w-[40vw] h-[40vw] bg-stone-200/30 blur-[80px] rounded-full"></div>
  </div>
);

export const MoroccanPatternBackground = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    aria-hidden="true"
    style={{
      opacity: 0.15,
      backgroundImage: `url('https://i.ibb.co/QhY4H8L/moody-moroccan-pattern-background-vector.jpg')`,
      backgroundSize: '1200px',
      backgroundPosition: 'right top',
      backgroundRepeat: 'repeat',
      maskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0) 50%)',
      WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0) 50%)'
    }}
  />
);

// --- UI COMPONENTS ---

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'ghost';

interface CommonButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonAsButton = CommonButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
  href?: undefined;
};

type ButtonAsAnchor = CommonButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseButtonStyles = "inline-flex items-center justify-center px-8 py-4 min-h-[44px] text-xs uppercase tracking-[0.15em] font-medium ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foundation-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-[background-color,color,box-shadow,border-color,transform] duration-300 [touch-action:manipulation]";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-foundation-primary text-stone-50 hover:bg-foundation-dark hover:shadow-xl hover:-translate-y-0.5 ring-foundation-primary active:translate-y-0 active:shadow-none",
  secondary: "bg-stone-100 text-foundation-dark hover:bg-stone-200 ring-stone-200 hover:-translate-y-0.5",
  outline: "border border-stone-300 text-stone-600 hover:border-foundation-primary hover:text-foundation-primary hover:bg-stone-50",
  outlineLight: "border border-white/30 text-stone-100 hover:border-white hover:text-white hover:bg-white/10",
  ghost: "text-stone-500 hover:text-foundation-primary hover:bg-stone-50/50",
};

export const Button = (props: ButtonProps) => {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseButtonStyles} ${buttonVariants[variant]} ${className}`;

  if (props.href !== undefined) {
    const { href, target, ...rest } = props as ButtonAsAnchor;
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  delete (rest as Partial<ButtonAsAnchor>).href;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id = "" }: SectionProps) => (
  <section id={id} className={`w-full px-6 md:px-10 lg:px-16 ${className.includes('py-') ? '' : 'py-section'} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

interface NavLinkProps {
  href: string;
  children: ReactNode;
  mobile?: boolean;
  tone?: 'default' | 'light';
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

const isModifiedClick = (e: MouseEvent<HTMLAnchorElement>) =>
  e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;

export const NavLink = ({ href, children, mobile = false, tone = 'default', onClick, active = false, className = "" }: NavLinkProps) => {
  const desktopColor =
    active
      ? 'text-foundation-primary'
      : tone === 'light'
        ? 'text-stone-100/90 hover:text-white hover:scale-[1.02]'
        : 'text-stone-500 hover:text-foundation-primary hover:scale-[1.02]';

  const underlineColor = tone === 'light' ? 'bg-white' : 'bg-foundation-primary';

  return (
    <a
      href={href}
      onClick={(e) => {
        if (isModifiedClick(e)) return;
        e.preventDefault();
        if (onClick) onClick();
      }}
      aria-current={active ? 'page' : undefined}
      className={`
        relative group text-[13px] font-medium tracking-wide uppercase
        transition-[color,transform] duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foundation-primary focus-visible:ring-offset-2 rounded-sm
        ${mobile
          ? "text-3xl font-serif italic normal-case py-6 text-stone-800 border-b border-stone-100 block"
          : desktopColor
        }
        ${className}
      `}
    >
      {children}
      {!mobile && (
        <span className={`absolute -bottom-2 left-0 h-px ${underlineColor} transition-[width,opacity] duration-300 ease-out ${active ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
      )}
    </a>
  );
};
