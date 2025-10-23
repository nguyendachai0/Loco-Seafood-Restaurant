import { cn } from '@/lib/utils/format';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const sizeClasses = {
  sm: 'max-w-4xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  full: 'max-w-full',
};

export default function Container({ 
  children, 
  className,
  size = 'lg' 
}: ContainerProps) {
  return (
    <div className={cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
}