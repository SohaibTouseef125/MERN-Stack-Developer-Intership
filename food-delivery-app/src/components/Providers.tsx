'use client';

import { ReactNode } from 'react';
import { ToastProvider } from './ToastProvider';
import { CartProvider } from './CartProvider';
import { AuthProvider } from './AuthProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ToastProvider>
      <CartProvider>
        <AuthProvider>{children}</AuthProvider>
      </CartProvider>
    </ToastProvider>
  );
}
