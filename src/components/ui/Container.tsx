import { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: (string | undefined)[]) => twMerge(clsx(inputs.filter(Boolean)));

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
};

export const Container = ({ 
  children, 
  className, 
  maxWidth = '4xl' 
}: ContainerProps) => {
  return (
    <div className={cn(
      'mx-auto px-4 sm:px-6 lg:px-8 w-full',
      maxWidthClasses[maxWidth],
      className
    )}>
      {children}
    </div>
  );
};