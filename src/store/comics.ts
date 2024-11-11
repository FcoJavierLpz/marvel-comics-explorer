import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Comic } from "@/types/comic";

interface ComicsState {
  recentComics: Comic[];
  // eslint-disable-next-line no-unused-vars
  addRecentComic: (comic: Comic) => void;
  // eslint-disable-next-line no-unused-vars
  removeRecentComic: (comicId: number) => void;
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
      removeRecentComic: (comicId) =>
        set((state) => ({
          recentComics: state.recentComics.filter((c) => c.id !== comicId),
        })),
      clearRecentComics: () => set({ recentComics: [] }),
    }),
    {
      name: "comics-storage",
    },
  ),
);
