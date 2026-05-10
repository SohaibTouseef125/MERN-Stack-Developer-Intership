import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-4 py-14 text-slate-300 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-orange-200/70">FlavorWave</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Premium food delivery UI for modern startups.</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            A polished React-first experience with glassmorphism, motion, responsive layout, and premium UI patterns.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/70">Explore</p>
            <div className="mt-4 space-y-3 text-sm">
              <Link to="/" className="block text-slate-400 transition hover:text-white">Home</Link>
              <Link to="/login" className="block text-slate-400 transition hover:text-white">Login</Link>
              <Link to="/signup" className="block text-slate-400 transition hover:text-white">Signup</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/70">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <p>support@flavorwave.io</p>
              <p>+1 (555) 836-4102</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200/70">Stay updated</p>
          <div className="mt-4 space-y-4">
            <div className="glass-card rounded-[2rem] p-4">
              <p className="text-sm text-slate-300">Sign up for product updates, design inspiration, and early access perks.</p>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Instagram size={18} />
              <Facebook size={18} />
              <Twitter size={18} />
              <Mail size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
        © 2026 FlavorWave. Designed for modern food delivery brands.
      </div>
    </footer>
  );
}
