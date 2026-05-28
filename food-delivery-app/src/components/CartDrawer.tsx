'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from './CartProvider';
import { Button } from './ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-white/10 bg-slate-950 p-6 shadow-2xl"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                  <p className="mt-1 text-sm text-slate-400">{totalItems} items selected</p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-2xl border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 pr-2 custom-scrollbar">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/5 text-slate-500">
                      <ShoppingBag size={40} />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-white">Your cart is empty</p>
                      <p className="mt-1 text-sm text-slate-400">Add some delicious meals to get started!</p>
                    </div>
                    <Button variant="primary" onClick={onClose}>
                      Browse Menu
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between py-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-semibold text-white">{item.title}</h3>
                              <p className="mt-1 text-sm text-brand-500">{item.price}</p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-slate-500 transition hover:text-red-400"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center rounded-xl border border-white/10 bg-white/5 p-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white transition hover:bg-white/5"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="w-8 text-center text-sm font-medium text-white">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-white transition hover:bg-white/5"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <p className="font-semibold text-white">
                              ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Delivery Fee</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xl font-bold text-white">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button variant="primary" className="w-full h-14 text-lg mt-4 shadow-glow">
                    Checkout Now
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
