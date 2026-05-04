import { focus } from '../../theme/tokens';

interface LogoProps {
  onClick?: () => void;
  variant?: 'full' | 'mark'; // Keeping variant for compatibility, but both will render text now
  orientation?: 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
  tone?: 'dark' | 'light';
  className?: string;
  ariaLabel?: string;
}

const horizontalText: Record<NonNullable<LogoProps['size']>, { the: string; main: string }> = {
  sm: { the: 'text-[9px]', main: 'text-sm' },
  md: { the: 'text-[10px]', main: 'text-base' },
  lg: { the: 'text-xs', main: 'text-xl' },
};

const stackedText: Record<NonNullable<LogoProps['size']>, { the: string; brand: string; foundation: string }> = {
  sm: { the: 'text-[9px]', brand: 'text-base', foundation: 'text-[9px]' },
  md: { the: 'text-[10px]', brand: 'text-2xl', foundation: 'text-[10px]' },
  lg: { the: 'text-xs', brand: 'text-3xl', foundation: 'text-[11px]' },
};

export function Logo({
  onClick,
  orientation = 'horizontal',
  size = 'md',
  tone = 'dark',
  className = '',
  ariaLabel = 'The Latif Foundation — home',
}: LogoProps) {
  const colorCls = tone === 'light' ? 'text-stone-50' : 'text-foundation-primary';

  const wordmark = orientation === 'stacked' ? (
    <span className="leading-none flex flex-col items-start">
      <span className={`${stackedText[size].the} font-sans font-semibold tracking-[0.3em] uppercase opacity-80 mb-1`}>
        The
      </span>
      <span className={`font-serif ${stackedText[size].brand} tracking-[0.18em] uppercase leading-none`}>
        Latif
      </span>
      <span className={`${stackedText[size].foundation} font-sans font-medium tracking-[0.28em] uppercase opacity-80 mt-1`}>
        Foundation
      </span>
    </span>
  ) : (
    <span className={`flex items-baseline gap-2 uppercase whitespace-nowrap`}>
      <span className={`${horizontalText[size].the} font-sans font-bold tracking-[0.3em] opacity-80`}>
        The
      </span>
      <span className={`font-serif ${horizontalText[size].main} tracking-[0.22em]`}>
        <span className="font-semibold">Latif</span>
        <span className="opacity-90"> Foundation</span>
      </span>
    </span>
  );

  const inner = (
    <span className={`inline-flex items-center ${colorCls}`}>
      {wordmark}
    </span>
  );

  if (!onClick) {
    return (
      <span aria-label={ariaLabel} className={className}>
        {inner}
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex items-center transition-opacity duration-200 hover:opacity-80 ${focus.ring} rounded-sm ${className}`}
    >
      {inner}
    </button>
  );
}
