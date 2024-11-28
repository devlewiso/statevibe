import React from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'mt-1 block w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2',
          'text-white placeholder-white/50 focus:border-purple-500 focus:ring-purple-500',
          className
        )}
        {...props}
      />
    </div>
  );
}