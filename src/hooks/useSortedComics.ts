import { useMemo } from "react";
import { Comic } from "@/types/comic";

interface UseSortedComicsProps {
  comics: Comic[];
  selectedFilter: "trending" | "popular" | "recent";
}

const useSortedComics = ({ comics, selectedFilter }: UseSortedComicsProps) => {
  return useMemo(() => {
    if (!comics) return [];

    return [...comics].sort((a, b) => {
      switch (selectedFilter) {
        case "trending":
          return Math.random() - 0.5;
        case "popular":
          return (b.prices[0]?.price || 0) - (a.prices[0]?.price || 0);
        case "recent":
          return (
            new Date(b.modified || 0).getTime() -
            new Date(a.modified || 0).getTime()
          );
        default:
          return 0;
      }
    });
  }, [comics, selectedFilter]);
};

export default useSortedComics;
