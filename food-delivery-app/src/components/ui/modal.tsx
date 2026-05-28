'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

import type { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, title, description, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-panel w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-soft"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-white">{title}</h2>
                {description ? <p className="mt-2 text-sm text-slate-400">{description}</p> : null}
              </div>
              <button
                onClick={onClose}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-3 text-slate-300 transition hover:text-white"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>
            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
