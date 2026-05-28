'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ToastProvider';

export default function ResetPasswordPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: 'Validation Error',
        message: 'Passwords do not match. Please verify.',
        variant: 'error'
      });
      return;
    }

    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Password Updated',
      message: 'Your password has been successfully reset. Redirecting you to login...',
      variant: 'success'
    });

    setLoading(false);
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  };

  return (
    <motion.main
      className="flex min-h-[calc(100vh-96px)] items-center justify-center px-4 py-20 sm:px-6"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-3xl">
        <div className="glass-panel overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-2xl sm:p-10">
          <div className="mb-8 space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/70">Secure Account</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Set your new password</h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400">
              Provide a secure password below to regain full access to your FlavorWave profile.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="New password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Input
                label="Confirm new password"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full h-14 text-base" disabled={loading}>
              {loading ? 'Updating password...' : 'Update password'}
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          Remembered your password?{' '}
          <Link href="/login" className="font-semibold text-white hover:text-brand-500">
            Back to login
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
