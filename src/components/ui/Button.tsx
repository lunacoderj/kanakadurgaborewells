import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  ariaLabel,
}) => {
  const baseStyles = 'font-bold rounded-lg transition-all duration-300 inline-block text-center no-underline';
  
  const variants = {
    primary: 'bg-yellow-400 text-blue-900 hover:bg-yellow-300 hover:shadow-lg',
    secondary: 'bg-blue-900 text-white hover:bg-blue-800 hover:shadow-lg',
    success: 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg',
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
