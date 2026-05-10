import { cn } from '@/utils/clsx';
import type { InputHTMLAttributes, PropsWithChildren } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: PropsWithChildren<InputProps>) {
  return (
    <label className="space-y-2 text-sm text-slate-200">
      {label ? <span className="font-medium text-slate-200/90">{label}</span> : null}
      <input
        className={cn(
          'w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white shadow-soft transition duration-300 placeholder:text-slate-400 focus:border-brand focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/20',
          className
        )}
        {...props}
      />
    </label>
  );
}
