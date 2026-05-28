'use client';

import { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from 'react';
import { useToast } from './ToastProvider';
import { useRouter } from 'next/navigation';

interface User {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  // Load session from localStorage on mount
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('auth_token');
      const storedUser = localStorage.getItem('auth_user');
      
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to load auth state', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Basic client-side validation
    if (!email || !password) {
      toast({
        title: 'Authentication Failed',
        message: 'Please provide both email and password.',
        variant: 'error'
      });
      setLoading(false);
      return false;
    }

    // Mock Login (accepts any email and password matching criteria)
    const mockUser: User = {
      name: email.split('@')[0].replace('.', ' '),
      email: email
    };
    
    // Generate a mock JWT
    const mockToken = `mock-jwt-header.${btoa(JSON.stringify(mockUser))}.mock-signature`;

    try {
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
      
      setToken(mockToken);
      setUser(mockUser);

      toast({
        title: 'Welcome Back!',
        message: `Successfully logged in as ${mockUser.name}.`,
        variant: 'success'
      });
      
      router.push('/');
      return true;
    } catch (e) {
      toast({
        title: 'Error',
        message: 'Failed to write session details.',
        variant: 'error'
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast, router]);

  const signup = useCallback(async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!name || !email || !password) {
      toast({
        title: 'Signup Failed',
        message: 'All fields are required.',
        variant: 'error'
      });
      setLoading(false);
      return false;
    }

    const mockUser: User = { name, email };
    const mockToken = `mock-jwt-header.${btoa(JSON.stringify(mockUser))}.mock-signature`;

    try {
      localStorage.setItem('auth_token', mockToken);
      localStorage.setItem('auth_user', JSON.stringify(mockUser));
      
      setToken(mockToken);
      setUser(mockUser);

      toast({
        title: 'Account Created',
        message: `Successfully registered and logged in as ${name}.`,
        variant: 'success'
      });
      
      router.push('/');
      return true;
    } catch (e) {
      toast({
        title: 'Error',
        message: 'Failed to create your session.',
        variant: 'error'
      });
      return false;
    } finally {
      setLoading(false);
    }
  }, [toast, router]);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      setUser(null);
      setToken(null);
      toast({
        title: 'Logged Out',
        message: 'You have been successfully logged out.',
        variant: 'info'
      });
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  }, [toast, router]);

  const value = useMemo(() => ({
    user,
    token,
    isAuthenticated: !!token,
    loading,
    login,
    signup,
    logout
  }), [user, token, loading, login, signup, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
