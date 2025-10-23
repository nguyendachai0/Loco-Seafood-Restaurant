import { cn } from '@/lib/utils/format';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const variantClasses = {
  primary: 'bg-gold hover:bg-gold-dark text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-coral hover:bg-coral-dark text-white',
  outline: 'border-2 border-ocean text-ocean hover:bg-ocean hover:text-white',
  ghost: 'text-ocean hover:bg-ocean/10',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const classes = cn(
    'inline-block font-semibold rounded-lg transition-all duration-300 hover:scale-105 text-center',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}