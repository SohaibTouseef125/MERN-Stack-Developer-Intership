'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Heart, MapPin, MessageSquare, Star, Truck, Wallet, Wifi } from 'lucide-react';
import Link from 'next/link';
import { categories, features, popularItems, testimonials } from '@/constants/data';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { useToast } from '@/components/ToastProvider';
import { useCart } from '@/components/CartProvider';

export default function Home() {
  const progress = useScrollProgress();
  const [search, setSearch] = useState('Burgers, pizza, desserts');
  const [showDownload, setShowDownload] = useState(false);
  const { toast } = useToast();
  const { addItem } = useCart();

  return (
    <main className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-white/5 backdrop-blur-xl">
        <div 
          className="h-full bg-gradient-to-r from-brand-500 via-orange-400 to-slate-100 transition-all duration-100" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      <section className="relative mx-auto max-w-7xl py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white/5 px-4 py-2 text-sm text-slate-100 shadow-soft backdrop-blur-xl">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow">🔥</span>
              <span>Fast, premium delivery from your favorite kitchens.</span>
            </div>
            <div>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Discover flavorful meals with a premium food delivery experience.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                FlavorWave combines glassmorphism, motion, and modern layout to create an elegant food delivery UI that feels like a billion-dollar startup product.
              </p>
            </div>

            <div className="grid gap-4 sm:max-w-xl sm:grid-cols-[1fr_auto]">
              <div className="glass-card rounded-[2rem] border-white/10 p-5 shadow-glow">
                <label className="block text-sm font-medium text-slate-200">Search for your next meal</label>
                <div className="mt-3 flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-3">
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    className="flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                    placeholder="Search cuisines, items or restaurants"
                    aria-label="Search food items"
                  />
                  <button
                    onClick={() => toast({ title: 'Search started', message: 'Dummy search is ready for you.', variant: 'info' })}
                    className="inline-flex h-12 items-center rounded-2xl bg-gradient-to-r from-brand-500 to-orange-400 px-5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
                  >
                    Search
                  </button>
                </div>
              </div>
              <Link href="/#menu">
                <Button variant="secondary" className="h-full px-6 w-full sm:w-auto">
                  Explore menu
                </Button>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="glass-card rounded-[2rem] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Trusted by</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-200">
                  <span className="rounded-full bg-white/5 px-3 py-2">Zopa</span>
                  <span className="rounded-full bg-white/5 px-3 py-2">DineVerse</span>
                  <span className="rounded-full bg-white/5 px-3 py-2">Platea</span>
                </div>
              </div>
              <div className="glass-card rounded-[2rem] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Average delivery</p>
                <p className="mt-3 text-3xl font-semibold text-white">25 min</p>
              </div>
              <div className="glass-card rounded-[2rem] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Satisfaction</p>
                <p className="mt-3 text-3xl font-semibold text-white">98%</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-glow backdrop-blur-2xl"
          >
            <div className="absolute -top-10 left-0 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />
            <div className="absolute -bottom-10 right-4 h-32 w-32 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="flex items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-slate-950/90 p-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Featured</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Sunrise Sizzle Burger</h2>
                <p className="mt-2 text-sm text-slate-400">A premium burger with smoky bacon, soft brioche, and spicy aioli.</p>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-orange-400 to-brand-500 text-white shadow-glow flex-shrink-0">
                <span className="text-3xl">🍔</span>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-soft">
                <p className="text-sm text-slate-400">Live tracking</p>
                <div className="mt-3 flex items-center gap-3 text-white">
                  <MapPin size={18} />
                  <span className="text-sm">Track every order in real-time.</span>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-soft">
                <p className="text-sm text-slate-400">Premium routes</p>
                <div className="mt-3 flex items-center gap-3 text-white">
                  <Truck size={18} />
                  <span className="text-sm">Designed for fast, hot deliveries.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/80">Food categories</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Fresh categories for every craving.</h2>
          </div>
          <Button variant="ghost" className="h-12 px-5 text-white/80 hover:text-white" onClick={() => toast({ title: 'Menu Navigation', message: 'Full menu is currently mocked in this view.', variant: 'info' })}>
            View full menu
          </Button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 220, damping: 16 }}
              className="glass-card rounded-[2rem] border-white/10 p-6 shadow-soft"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-2xl shadow-glow">
                {item.emoji}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/80">Popular now</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Top-rated dishes people can’t stop ordering.</h2>
          </div>
          <Link href="/#menu">
            <Button variant="secondary" className="h-12 px-6">
              Order now
            </Button>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {popularItems.map((item) => (
            <motion.article
              key={item.id}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-soft transition duration-300"
            >
              <Link href={`/details/${item.id}`}>
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      const target = event.currentTarget as HTMLImageElement;
                      target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='720' viewBox='0 0 900 720'%3E%3Crect width='900' height='720' fill='%2316202f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,ui-sans-serif,system-ui,sans-serif' font-size='36' fill='%23f8fafc'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                    }}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 rounded-b-[2rem] bg-gradient-to-t from-slate-950/90 to-transparent p-5">
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2">
                        <Star size={14} /> {item.rating}
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-2">{item.time}</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-4">
                  <Link href={`/details/${item.id}`} className="hover:underline">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                    </div>
                  </Link>
                  <span className="text-xl font-semibold text-brand-500">{item.price}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    className="h-12 w-full border-white/10 text-slate-100"
                    onClick={() => addItem(item)}
                  >
                    Add to cart
                  </Button>
                  <button className="inline-flex h-12 w-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/80">Core features</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Everything for a reliable delivery experience.</h2>
          </div>
          <Button variant="ghost" className="h-12 px-5 text-white/80 hover:text-white" onClick={() => toast({ title: 'Features Details', message: 'Features list is descriptive in this prototype.', variant: 'info' })}>
            Explore features
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[2rem] border-white/10 p-7 shadow-soft"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-500/10 text-brand-500">
                {feature.accent === 'speed' ? <Truck size={24} /> : null}
                {feature.accent === 'map' ? <MapPin size={24} /> : null}
                {feature.accent === 'lock' ? <Wallet size={24} /> : null}
                {feature.accent === 'star' ? <Star size={24} /> : null}
                {feature.accent === 'headset' ? <MessageSquare size={24} /> : null}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-orange-200/80">Testimonials</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Loved by food lovers and partners alike.</h2>
          </div>
          <Button variant="secondary" className="h-12 px-6" onClick={() => toast({ title: 'Waitlist', message: 'You have been registered for our launch details.', variant: 'success' })}>
            Join the waitlist
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -7 }}
              className="glass-card rounded-[2rem] border-white/10 p-6 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <img className="h-14 w-14 rounded-3xl object-cover bg-slate-800" src={item.avatar} alt={item.name} />
                <div>
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">“{item.quote}”</p>
              <div className="mt-5 flex items-center gap-2 text-brand-500">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 p-10 shadow-glow">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-brand-500/10 via-transparent to-transparent" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <Badge>App download</Badge>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Get the FlavorWave app for your daily cravings.</h2>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                Enjoy fast delivery, live order tracking, and curated restaurant collections—right from your phone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setShowDownload(true)} variant="primary">
                  Download app
                </Button>
                <Button variant="secondary" className="h-12 px-6" onClick={() => toast({ title: 'Download saved', message: 'Your app link has been copied to clipboard.', variant: 'success' })}>
                  Email me link
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-soft">
              <div className="absolute -right-10 top-4 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl" />
              <div className="h-[420px] rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_45%)] p-6 sm:h-[500px]">
                <div className="relative mx-auto h-full w-full max-w-xs rounded-[2rem] bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-glow">
                  <div className="h-12 w-12 rounded-3xl bg-gradient-to-r from-brand-500 to-orange-400" />
                  <div className="mt-8 space-y-4">
                    <div className="h-4 w-3/4 rounded-full bg-white/10" />
                    <div className="h-4 w-full rounded-full bg-white/10" />
                    <div className="h-4 w-5/6 rounded-full bg-white/10" />
                    <div className="grid gap-3 pt-6 sm:grid-cols-2">
                      <div className="h-4 rounded-full bg-white/10" />
                      <div className="h-4 rounded-full bg-white/10" />
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-orange-400/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={showDownload}
        title="Download FlavorWave"
        description="Choose your platform to get the app experience with premium motion and modern design."
        onClose={() => setShowDownload(false)}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <button className="rounded-3xl bg-slate-900/90 px-5 py-4 text-left text-white transition hover:bg-slate-800 border border-white/5" onClick={() => { setShowDownload(false); toast({ title: 'Download Started', message: 'Downloading package for iOS.', variant: 'success' }); }}>
            <p className="text-sm text-slate-400">App Store</p>
            <p className="mt-2 text-lg font-semibold">Download for iOS</p>
          </button>
          <button className="rounded-3xl bg-slate-900/90 px-5 py-4 text-left text-white transition hover:bg-slate-800 border border-white/5" onClick={() => { setShowDownload(false); toast({ title: 'Download Started', message: 'Downloading package for Android.', variant: 'success' }); }}>
            <p className="text-sm text-slate-400">Google Play</p>
            <p className="mt-2 text-lg font-semibold">Download for Android</p>
          </button>
        </div>
      </Modal>
    </main>
  );
}
