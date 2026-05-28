import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import { Providers } from '@/components/Providers';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'FlavorWave | Premium Food Delivery App',
  description: 'FlavorWave combines glassmorphism, motion, and modern layouts to create an elegant food delivery UI that feels like a premium startup product.',
  keywords: ['food delivery', 'premium UI', 'nextjs', 'tailwind css', 'glassmorphism'],
  authors: [{ name: 'FlavorWave Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen bg-[#05070f] text-slate-100 antialiased`}>
        <Providers>
          <div className="min-h-screen bg-[#05070f] text-slate-100 relative">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
