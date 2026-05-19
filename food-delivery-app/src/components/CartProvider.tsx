import { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';
import { useToast } from './ToastProvider';

export interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (product: any, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addItem = useCallback((product: any, quantity: number = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        toast({
          title: 'Quantity Updated',
          message: `${product.title} quantity increased in your cart.`,
          variant: 'success'
        });
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      toast({
        title: 'Added to Cart',
        message: `${product.title} has been added to your cart.`,
        variant: 'success'
      });
      return [...current, { ...product, quantity }];
    });
  }, [toast]);

  const removeItem = useCallback((id: string) => {
    setItems((current) => {
      const item = current.find((i) => i.id === id);
      if (item) {
        toast({
          title: 'Item Removed',
          message: `${item.title} has been removed from your cart.`,
          variant: 'info'
        });
      }
      return current.filter((item) => item.id !== id);
    });
  }, [toast]);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((current) =>
      current.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const totalPrice = useMemo(() => 
    items.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0), 
  [items]);

  const value = useMemo(() => ({
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  }), [items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
