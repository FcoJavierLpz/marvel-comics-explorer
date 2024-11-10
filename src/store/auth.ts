import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState, User } from "@/types/auth";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email: string) => {
        const user: User = {
          id: Math.random().toString(36).substr(2, 9),
          name: email.split("@")[0],
          email,
        };
        set({ user, isAuthenticated: true });
      },
      register: (name: string, email: string) => {
        const user: User = {
          id: Math.random().toString(36).substr(2, 9),
          name,
          email,
        };
        set({ user, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
