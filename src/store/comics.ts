import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Comic } from "@/types/comic";

interface ComicsState {
  recentComics: Comic[];
  // eslint-disable-next-line no-unused-vars
  addRecentComic: (comic: Comic) => void;
  clearRecentComics: () => void;
}

export const useComicsStore = create<ComicsState>()(
  persist(
    (set) => ({
      recentComics: [],
      addRecentComic: (comic) =>
        set((state) => ({
          recentComics: [
            comic,
            ...state.recentComics.filter((c) => c.id !== comic.id),
          ].slice(0, 5),
        })),
      clearRecentComics: () => set({ recentComics: [] }),
    }),
    {
      name: "comics-storage",
    },
  ),
);
