import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ToastProvider } from './components/ToastProvider';
import { CartProvider } from './components/CartProvider';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  const location = useLocation();

  return (
    <ToastProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#05070f] text-slate-100">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/details/:id"
                element={
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                  >
                    <ProductDetail />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
