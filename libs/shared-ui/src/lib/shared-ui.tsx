
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  // New prop to indicate if this should be interactive
  interactive?: boolean;
}

/**
 * Universal Button Component
 * - Works in Server Components (without onClick/interactive features)
 * - Works in Client Components (with full interactivity)
 * - Automatically detects environment and adjusts behavior
 */
export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  type = 'button',
  interactive = !!onClick // Auto-detect if interactive based on onClick presence
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : interactive ? 'cursor-pointer' : ''
  }`;
  
  // For Server Components: render as non-interactive button or div
  if (!interactive || typeof window === 'undefined') {
    return (
      <button 
        className={classes} 
        disabled={disabled}
        type={type}
        // Only add onClick in client environment
        {...(typeof window !== 'undefined' && onClick ? { onClick } : {})}
      >
        {children}
      </button>
    );
  }
  
  // For Client Components: full interactivity
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

/**
 * Server-Safe Display Component
 * Always safe to use in Server Components
 */
export function DisplayButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false
}: Omit<ButtonProps, 'onClick' | 'interactive'>) {
  return (
    <Button 
      variant={variant} 
      size={size} 
      disabled={disabled}
      interactive={false}
    >
      {children}
    </Button>
  );
}

/**
 * Client-Only Interactive Button
 * Must be used within Client Components
 */
export function InteractiveButton(props: ButtonProps) {
  return <Button {...props} interactive={true} />;
}

// Card Component - Universal (works in both)
export interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Card({ children, title, className = '' }: CardProps) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
      )}
      {children}
    </div>
  );
}

export function AllInOneSharedUi() {
  return (
    <div className=''>
      <h1>Welcome to AllInOneSharedUi!</h1>
    </div>
  );
}

export default AllInOneSharedUi;



