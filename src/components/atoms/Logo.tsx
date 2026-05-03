import { focus } from '../../theme/tokens';

interface LogoProps {
  onClick?: () => void;
  variant?: 'full' | 'mark';
  orientation?: 'horizontal' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
  tone?: 'dark' | 'light';
  className?: string;
  ariaLabel?: string;
}

const markSize: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'h-7 w-7',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
};

const horizontalText: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'text-[11px]',
  md: 'text-xs',
  lg: 'text-sm',
};

const stackedText: Record<NonNullable<LogoProps['size']>, { the: string; brand: string; foundation: string }> = {
  sm: { the: 'text-[9px]', brand: 'text-base', foundation: 'text-[9px]' },
  md: { the: 'text-[10px]', brand: 'text-2xl', foundation: 'text-[10px]' },
  lg: { the: 'text-xs', brand: 'text-3xl', foundation: 'text-[11px]' },
};

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="currentColor"
    >
      {/* Outer ring */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0Zm0 2.6C15.764 2.6 2.6 15.764 2.6 32S15.764 61.4 32 61.4 61.4 48.236 61.4 32 48.236 2.6 32 2.6Z"
      />
      {/* Foliage (leaf cluster) */}
      <circle cx="32" cy="22" r="9" />
      <circle cx="22" cy="26" r="7" />
      <circle cx="42" cy="26" r="7" />
      <circle cx="26" cy="17" r="6" />
      <circle cx="38" cy="17" r="6" />
      <circle cx="17" cy="32" r="6" />
      <circle cx="47" cy="32" r="6" />
      <circle cx="32" cy="32" r="8" />
      <circle cx="24" cy="36" r="5" />
      <circle cx="40" cy="36" r="5" />
      {/* Trunk */}
      <path d="M30 32 h4 v18 h-4 z" />
      {/* Roots */}
      <path d="M20 53 C25 49 29 50 32 51 C35 50 39 49 44 53 L42 55 C38 52 35 52 32 53 C29 52 26 52 22 55 Z" />
    </svg>
  );
}

export function Logo({
  onClick,
  variant = 'full',
  orientation = 'horizontal',
  size = 'md',
  tone = 'dark',
  className = '',
  ariaLabel = 'The Latif Foundation — home',
}: LogoProps) {
  const markCls = markSize[size];
  const colorCls = tone === 'light' ? 'text-stone-50' : 'text-foundation-primary';

  const wordmark = orientation === 'stacked' ? (
    <span className="leading-none flex flex-col items-start">
      <span className={`${stackedText[size].the} font-semibold tracking-[0.3em] uppercase opacity-80 mb-1`}>
        The
      </span>
      <span className={`font-serif ${stackedText[size].brand} tracking-[0.18em] uppercase leading-none`}>
        Latif
      </span>
      <span className={`${stackedText[size].foundation} font-semibold tracking-[0.28em] uppercase opacity-80 mt-1`}>
        Foundation
      </span>
    </span>
  ) : (
    <span className={`font-serif ${horizontalText[size]} tracking-[0.22em] uppercase whitespace-nowrap`}>
      <span className="font-semibold">Latif</span>
      <span className="opacity-70"> Foundation</span>
    </span>
  );

  const inner = (
    <span className={`inline-flex items-center ${orientation === 'stacked' ? 'gap-4' : 'gap-2.5'} ${colorCls}`}>
      <LogoMark className={`${markCls} flex-shrink-0`} />
      {variant === 'full' && wordmark}
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
