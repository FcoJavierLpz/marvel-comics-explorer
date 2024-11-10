import { useMemo } from "react";
import { Comic } from "@/types/comic";

interface UseFilteredComicsProps {
  comics: Comic[];
  searchTerm: string;
}

const useFilteredComics = ({ comics, searchTerm }: UseFilteredComicsProps) => {
  return useMemo(() => {
    if (!comics) return [];

    if (!searchTerm) return comics;

    const searchLower = searchTerm.toLowerCase();
    return comics.filter(
      (comic) =>
        comic.title.toLowerCase().includes(searchLower) ||
        comic.title?.toLowerCase().includes(searchLower),
    );
  }, [comics, searchTerm]);
};

export default useFilteredComics;
