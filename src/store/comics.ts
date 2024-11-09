import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

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
