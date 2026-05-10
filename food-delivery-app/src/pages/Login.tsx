import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ToastProvider';

export function Login() {
  const { toast } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({ title: 'Login submitted', message: 'This is a UI-only login experience.', variant: 'success' });
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
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/70">Welcome back</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Login to your FlavorWave account</h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400">
              Beautiful glassmorphism with polished inputs, social access, and premium feedback.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Email" type="email" placeholder="you@example.com" required />
              <Input label="Password" type="password" placeholder="••••••••" required />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-slate-900/70 text-brand focus:ring-brand" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-sm font-semibold text-brand hover:text-orange-300">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full h-14 text-base">
              Continue to login
            </Button>

            <div className="relative text-center text-sm text-slate-500">
              <span className="absolute inset-x-10 top-1/2 h-px bg-white/10" />
              <span className="relative bg-slate-950 px-3">Or continue with</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <button type="button" className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-brand/40 hover:bg-white/5">
                Sign in with Google
              </button>
              <button type="button" className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:border-brand/40 hover:bg-white/5">
                Sign in with Apple
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          Don’t have an account?{' '}
          <Link to="/signup" className="font-semibold text-white hover:text-brand">
            Create one
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
