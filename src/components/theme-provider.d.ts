declare module '@/components/theme-provider' {
  import { ReactNode } from 'react';
  import { ThemeProviderProps } from 'next-themes/dist/types';

  export function ThemeProvider(props: ThemeProviderProps): ReactNode;
}
