'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock3, ArrowLeft, Heart, Share2, ShoppingCart, Plus, Minus, ZoomIn, ZoomOut } from 'lucide-react';
import { popularItems } from '@/constants/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ToastProvider';
import { useCart } from '@/components/CartProvider';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/utils/clsx';

export default function ProductDetailPage() {
  const params = useParams();
  const id = params && params.id ? (params.id as string) : '';
  const { toast } = useToast();
  const { addItem } = useCart();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [zoom, setZoom] = useState(1);
  const imageRef = useRef<HTMLDivElement>(null);

  const product = popularItems.find((item) => item.id === id);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [product]);

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    const handleWheelEvent = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoom((prev) => Math.min(prev + 0.1, 3));
      } else {
        setZoom((prev) => Math.max(prev - 0.1, 1));
      }
    };

    element.addEventListener('wheel', handleWheelEvent, { passive: false });
    return () => element.removeEventListener('wheel', handleWheelEvent);
  }, [loading]); // re-run if loading state changes, to attach to the rendered element

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-500 border-t-transparent" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Product not found</h2>
        <p className="mt-4 text-slate-400">The product you're looking for doesn't exist or has been removed.</p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const images = (product as any).images || [product.image];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-slate-400 transition hover:text-white mb-6">
        <ArrowLeft size={20} />
        <span>Back to menu</span>
      </Link>

      <div className="grid gap-12 lg:grid-cols-[auto_1fr_1fr]">
        {/* Thumbnails */}
        <div className="flex flex-row gap-4 lg:flex-col lg:gap-5 order-2 lg:order-1">
          {images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedImage(img);
                setZoom(1);
              }}
              className={cn(
                "group relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 sm:h-24 sm:w-24",
                selectedImage === img ? "border-brand-500 ring-2 ring-brand-500/20" : "border-white/10 hover:border-white/30"
              )}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
              <div className={cn(
                "absolute inset-0 bg-brand-500/10 transition-opacity duration-300",
                selectedImage === img ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )} />
            </button>
          ))}
        </div>

        {/* Main Image Container */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative order-1 lg:order-2 overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/50"
        >
          <div 
            className="relative h-[400px] w-full cursor-zoom-in sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt={product.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: zoom }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5, originY: 0.5 }}
                className="h-full w-full object-cover pointer-events-none"
                onError={(event) => {
                  const target = event.currentTarget as HTMLImageElement;
                  target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='720' viewBox='0 0 900 720'%3E%3Crect width='900' height='720' fill='%2316202f'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Inter,ui-sans-serif,system-ui,sans-serif' font-size='36' fill='%23f8fafc'%3EImage unavailable%3C/text%3E%3C/svg%3E";
                }}
              />
            </AnimatePresence>
            
            <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-2xl bg-slate-950/80 px-3 py-2 text-xs font-medium text-white backdrop-blur-xl border border-white/10">
              <ZoomIn size={14} />
              <span>Scroll to zoom</span>
            </div>
          </div>

          <div className="absolute right-6 top-6 flex flex-col gap-3">
            <button 
              onClick={() => toast({ title: 'Added to Favorites', message: `${product.title} saved to favorites.`, variant: 'success' })}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-white backdrop-blur-xl transition hover:bg-slate-900"
            >
              <Heart size={20} />
            </button>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  navigator.clipboard.writeText(window.location.href);
                  toast({ title: 'Link Copied', message: 'Product URL copied to clipboard.', variant: 'success' });
                }
              }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-white backdrop-blur-xl transition hover:bg-slate-900"
            >
              <Share2 size={20} />
            </button>
          </div>
        </motion.div>

        {/* Details Container */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center space-y-8 order-3"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-brand-500/10 text-brand-500">Popular Choice</Badge>
              <div className="flex items-center gap-1 text-sm text-slate-400">
                <Clock3 size={16} />
                <span>{product.time} delivery</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{product.title}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(Number(product.rating)) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-lg font-medium text-white">{product.rating}</span>
              <span className="text-slate-400">(120+ Reviews)</span>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-slate-300">
            {product.description}. Prepared with fresh ingredients and our secret house spices to ensure every bite is a wave of flavor. Perfect for sharing or enjoying as a complete meal.
          </p>

          <div className="glass-card rounded-[2rem] border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-400">Total Price</p>
                <p className="mt-1 text-3xl font-bold text-white">${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-1">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="h-10 w-10 text-white hover:bg-white/5 rounded-xl flex items-center justify-center"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-10 text-center font-medium text-white">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="h-10 w-10 text-white hover:bg-white/5 rounded-xl flex items-center justify-center"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="primary"
              className="h-14 flex-1 gap-2 text-lg"
              onClick={() => addItem(product, quantity)}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </Button>
            <Button 
              variant="secondary" 
              className="h-14 px-8"
              onClick={() => {
                addItem(product, quantity);
                toast({ title: 'Instant Checkout', message: 'Proceeding to checkout preview.', variant: 'success' });
              }}
            >
              Buy Now
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-slate-500">Calories</p>
              <p className="mt-1 font-semibold text-white">450 kcal</p>
            </div>
            <div className="border-x border-white/10 text-center">
              <p className="text-xs uppercase tracking-widest text-slate-500">Protein</p>
              <p className="mt-1 font-semibold text-white">24g</p>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-widest text-slate-500">Fat</p>
              <p className="mt-1 font-semibold text-white">18g</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
