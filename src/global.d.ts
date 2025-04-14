declare module '@/components/mode-toggle' {
  import { ReactElement } from 'react';
  export function ModeToggle(): ReactElement;
}

declare module '@/components/theme-provider' {
  import { ReactNode } from 'react';
  import { ThemeProviderProps } from 'next-themes/dist/types';
  export function ThemeProvider(props: ThemeProviderProps): ReactNode;
}

declare module '@/components/ui/LoadingSpinner' {
  import { ReactElement } from 'react';
  
  interface LoadingSpinnerProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
  }

  const LoadingSpinner: (props: LoadingSpinnerProps) => ReactElement;
  export default LoadingSpinner;
}
