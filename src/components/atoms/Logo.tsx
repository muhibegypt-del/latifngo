import { focus } from '../../theme/tokens';

interface LogoProps {
  onClick?: () => void;
  size?: 'default' | 'small';
  className?: string;
  ariaLabel?: string;
}

export function Logo({
  onClick,
  size = 'default',
  className = '',
  ariaLabel = 'The Latif Foundation Home'
}: LogoProps) {
  const textSizes = {
    default: {
      prefix: 'text-[10px]',
      brand: 'text-3xl md:text-4xl',
      suffix: 'text-[10px]',
    },
    small: {
      prefix: 'text-[10px]',
      brand: 'text-2xl',
      suffix: 'text-[10px]',
    },
  };

  const sizes = textSizes[size];

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`
        z-50 flex items-center gap-2 md:gap-3 text-stone-900
        transition-all hover:opacity-70 hover:scale-[1.01] group
        ${focus.ring}
        ${className}
      `}
      aria-label={ariaLabel}
    >
      <span className={`${sizes.prefix} font-bold tracking-[0.2em] uppercase text-stone-900 group-hover:text-teal-900 transition-colors`}>
        The
      </span>
      <span className={`font-serif ${sizes.brand} leading-none text-teal-950 -mt-1`}>
        Latif
      </span>
      <span className={`${sizes.suffix} font-bold tracking-[0.2em] uppercase text-stone-900`}>
        Foundation
      </span>
    </a>
  );
}
