import { cn } from '@/utils/clsx';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ className, variant = 'primary', ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-3xl px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2 focus:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-60',
        variant === 'primary' && 'bg-gradient-to-r from-brand to-orange-400 text-white shadow-glow hover:scale-[1.01] active:translate-y-0.5',
        variant === 'secondary' && 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10',
        variant === 'ghost' && 'bg-transparent text-slate-100 hover:bg-white/5',
        className
      )}
      {...props}
    />
  );
}
