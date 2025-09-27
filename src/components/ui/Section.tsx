import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl';
}

export const Section = ({ 
  children, 
  className,
  containerClassName,
  id,
  maxWidth = '4xl'
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn('py-16 sm:py-20 lg:py-24', className)}
    >
      <Container maxWidth={maxWidth} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};