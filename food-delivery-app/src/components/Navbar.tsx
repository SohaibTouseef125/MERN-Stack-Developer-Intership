import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, SunMedium } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/#menu' },
  { label: 'Features', to: '/#features' },
  { label: 'Testimonials', to: '/#testimonials' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial = storedTheme || 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('light', initial === 'light');
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    window.localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  const themeIcon = useMemo(() => (theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />), [theme]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-orange-400 text-sm shadow-glow">
            F
          </span>
          FlavorWave
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-slate-100 transition hover:border-brand/50 hover:text-white"
            aria-label="Toggle theme"
          >
            {themeIcon}
          </button>
          <Link
            to="/login"
            className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-brand/40 hover:bg-white/5"
          >
            Login
          </Link>
          <Link to="/signup" className="rounded-full bg-gradient-to-r from-brand to-orange-400 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01]">
            Signup
          </Link>
        </div>

        <button
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-slate-100 transition hover:border-brand/40 md:hidden"
          aria-label="Open mobile menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 md:hidden"
          >
            <div className="space-y-3 px-4 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={toggleTheme}
                  className="inline-flex w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition hover:border-brand/40"
                >
                  {themeIcon}
                  <span className="ml-2">Theme</span>
                </button>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-3xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-slate-100 transition hover:bg-white/5"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-3xl bg-gradient-to-r from-brand to-orange-400 px-4 py-3 text-center text-sm font-semibold text-white shadow-glow"
                >
                  Signup
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
