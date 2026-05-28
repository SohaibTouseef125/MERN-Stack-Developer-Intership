'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/components/AuthProvider';
import { useToast } from '@/components/ToastProvider';

export default function SignupPage() {
  const { signup, loading } = useAuth();
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

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

    if (!agreeTerms) {
      toast({
        title: 'Validation Error',
        message: 'You must agree to the terms and conditions.',
        variant: 'error'
      });
      return;
    }

    const success = await signup(name, email, password);
    if (!success) {
      // Signup failed is handled inside provider
    }
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
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/70">Start your journey</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Create a new FlavorWave account</h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400">
              Simple, polished onboarding with animated inputs, clear validation, and premium form layout.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input 
                label="Full name" 
                type="text" 
                placeholder="Jane Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
              <Input 
                label="Email" 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input 
                label="Password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <Input 
                label="Confirm password" 
                type="password" 
                placeholder="••••••••" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
              />
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="h-4 w-4 rounded border-white/10 bg-slate-900/70 text-brand-500 focus:ring-brand-500 accent-brand-500 cursor-pointer" 
                required 
              />
              <label htmlFor="terms" className="cursor-pointer">I agree to the terms and conditions.</label>
            </div>

            <Button type="submit" className="w-full h-14 text-base" disabled={loading}>
              {loading ? 'Creating your account...' : 'Create account'}
            </Button>

            <div className="relative text-center text-sm text-slate-500">
              <span className="absolute inset-x-10 top-1/2 h-px bg-white/10" />
              <span className="relative bg-slate-950 px-3">Or signup with</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <button 
                type="button" 
                onClick={() => toast({ title: 'Social Sign In', message: 'Google signup is simulated.', variant: 'info' })}
                className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-brand-500/40 hover:bg-white/5"
              >
                Continue with Google
              </button>
              <button 
                type="button" 
                onClick={() => toast({ title: 'Social Sign In', message: 'Apple signup is simulated.', variant: 'info' })}
                className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-brand-500/40 hover:bg-white/5"
              >
                Continue with Apple
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-white hover:text-brand-500">
            Login
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
