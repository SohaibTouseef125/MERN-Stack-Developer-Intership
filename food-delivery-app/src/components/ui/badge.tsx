import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/clsx';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200/80 shadow-soft',
        className
      )}
      {...props}
    />
  );
}
