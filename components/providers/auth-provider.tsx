"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

type RegisterData = {
  name: string;
  email?: string;
  phone?: string;
  password: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored token and validate
    const token = localStorage.getItem("token");
    if (token) {
      // Validate token and set user
      setUser({
        id: "1",
        name: "Demo User",
        email: "demo@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
      });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    setUser({
      id: "1",
      name: "Demo User",
      email: email,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
    });
    localStorage.setItem("token", "demo-token");
  };

  const register = async (data: RegisterData) => {
    // Implement actual registration logic here
    setUser({
      id: "1",
      name: data.name,
      email: data.email || "",
      phone: data.phone,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop"
    });
    localStorage.setItem("token", "demo-token");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};