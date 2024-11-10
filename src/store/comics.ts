import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Comic } from "@/types/comic";

interface ComicsState {
  recentComics: Comic[];
  clearRecentComics: () => void;
}

export const useComicsStore = create<ComicsState>()(
  persist(
    (set) => ({
      recentComics: [],
      clearRecentComics: () => set({ recentComics: [] }),
    }),
    {
      name: "comics-storage",
    },
  ),
);
