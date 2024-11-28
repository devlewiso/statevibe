import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-8 py-3 rounded-full font-semibold transition-all duration-200',
        variant === 'primary' 
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90'
          : 'bg-white/10 backdrop-blur text-white hover:bg-white/20',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}