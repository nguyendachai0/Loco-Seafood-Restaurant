import { cn } from '@/lib/utils/format';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  none: '',
};

export default function Card({ 
  children, 
  className,
  hover = false,
  padding = 'md'
}: CardProps) {
  return (
    <div className={cn(
      'bg-white rounded-lg border border-gray-200 shadow-sm',
      hover && 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  );
}