import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

const variantClasses = {
  primary: 'bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]',
  secondary: 'bg-background text-foreground hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]',
  outline: 'border border-solid border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent',
};

const sizeClasses = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-lg',
};

export const Button = ({ 
  children,
  className,
  variant = 'outline',
  size = 'md',
  href,
  onClick,
  target,
  rel
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 hover:scale-105';
  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};