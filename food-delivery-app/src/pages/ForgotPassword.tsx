import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ToastProvider';

export function ForgotPassword() {
  const { toast } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({ title: 'Reset email sent', message: 'Check your inbox for the password reset link.', variant: 'success' });
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
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/70">Forgot password</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Reset your password</h1>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400">
              Enter your email and we’ll send a secure reset link so you can get back to ordering delicious meals.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Email" type="email" placeholder="you@example.com" required />
            <Button type="submit" className="w-full h-14 text-base">
              Send reset link
            </Button>
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-slate-400">
          Remembered your password?{' '}
          <Link to="/login" className="font-semibold text-white hover:text-brand">
            Back to login
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
