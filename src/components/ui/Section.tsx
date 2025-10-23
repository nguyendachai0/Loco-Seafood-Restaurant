import { cn } from '@/lib/utils/format';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'white' | 'gray' | 'ocean' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

const bgClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  ocean: 'bg-gradient-ocean text-white',
  none: '',
};

const paddingClasses = {
  sm: 'py-12',
  md: 'py-16 md:py-20',
  lg: 'py-16 md:py-24',
  none: '',
};

export default function Section({ 
  children, 
  className,
  containerSize = 'lg',
  background = 'none',
  padding = 'lg'
}: SectionProps) {
  return (
    <section className={cn(
      paddingClasses[padding],
      bgClasses[background],
      className
    )}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}