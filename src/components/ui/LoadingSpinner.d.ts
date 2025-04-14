declare module '@/components/ui/LoadingSpinner' {
  import { ReactElement } from 'react';
  
  interface LoadingSpinnerProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
  }

  const LoadingSpinner: (props: LoadingSpinnerProps) => ReactElement;
  export default LoadingSpinner;
}
