export const theme = {
  colors: {
    primary: {
      50: 'rgb(var(--c-primary-50))',
      100: 'rgb(var(--c-primary-100))',
      200: 'rgb(var(--c-primary-200))',
      300: 'rgb(var(--c-primary-300))',
      400: 'rgb(var(--c-primary-400))',
      500: 'rgb(var(--c-primary-500))',
      600: 'rgb(var(--c-primary-600))',
      700: 'rgb(var(--c-primary-700))',
      800: 'rgb(var(--c-primary-800))',
      900: 'rgb(var(--c-primary-900))',
    },
    neutral: {
      50: 'rgb(var(--c-neutral-50))',
      100: 'rgb(var(--c-neutral-100))',
      200: 'rgb(var(--c-neutral-200))',
      300: 'rgb(var(--c-neutral-300))',
      400: 'rgb(var(--c-neutral-400))',
      500: 'rgb(var(--c-neutral-500))',
      600: 'rgb(var(--c-neutral-600))',
      700: 'rgb(var(--c-neutral-700))',
      800: 'rgb(var(--c-neutral-800))',
      900: 'rgb(var(--c-neutral-900))',
    },
  },
  typography: {
    fontFamily: {
      sans: ['JetBrains Mono', 'system-ui', 'sans-serif'],
      display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
  },
};

export type Theme = typeof theme;