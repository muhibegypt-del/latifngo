export const colors = {
  brand: {
    primary: 'teal-950',
    accent: 'teal-900',
    light: 'teal-800',
    muted: 'teal-100',
  },
  neutral: {
    background: 'stone-50',
    surface: 'stone-50/90',
    white: 'white',
    text: {
      primary: 'stone-900',
      secondary: 'stone-600',
      tertiary: 'stone-500',
      muted: 'stone-400',
    },
    border: {
      light: 'stone-100',
      default: 'stone-200',
      dark: 'stone-300',
    },
  },
  selection: {
    bg: 'teal-100',
    text: 'teal-900',
  },
  status: {
    active: 'teal-500',
    success: 'emerald-500',
    warning: 'amber-500',
    error: 'red-500',
  },
} as const;

export const spacing = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '5rem',
  container: {
    mobile: '1.5rem',
    tablet: '2.5rem',
    desktop: '3rem',
    wide: '6rem',
  },
} as const;

export const typography = {
  family: {
    brand: 'font-serif',
    body: 'font-sans',
    label: 'font-sans font-bold tracking-[0.2em] uppercase',
  },
  size: {
    brand: {
      mobile: 'text-3xl',
      desktop: 'text-4xl',
    },
    label: 'text-[10px]',
    nav: 'text-sm',
    body: 'text-sm',
    small: 'text-xs',
  },
} as const;

export const transitions = {
  smooth: 'duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
  fast: 'duration-200 ease-out',
  medium: 'duration-300 ease-out',
  slow: 'duration-500 ease-out',
  reveal: 'duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]',
} as const;

export const elevation = {
  none: '',
  subtle: 'shadow-sm',
  low: 'shadow',
  medium: 'shadow-md',
  high: 'shadow-lg',
  higher: 'shadow-xl',
  highest: 'shadow-2xl',
} as const;

export const radius = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
} as const;

export const focus = {
  ring: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-900 focus-visible:ring-offset-2',
  ringWhite: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
} as const;
