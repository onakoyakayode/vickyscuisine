import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AuthUser } from "@/types";

interface AuthStore {
  user: AuthUser | null;
  isAuthenticated: boolean;
  lastActivity: number;

  setUser: (user: AuthUser | null) => void;
  updateActivity: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      lastActivity: Date.now(),

      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
          lastActivity: Date.now(),
        }),

      updateActivity: () => set({ lastActivity: Date.now() }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          lastActivity: Date.now(),
        }),
    }),
    {
      name: "vickys-auth-store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),

      onRehydrateStorage: () => (state) => {
        if (state) {
          state.updateActivity();
        }
      },
    },
  ),
);
