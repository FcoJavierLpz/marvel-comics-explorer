import { useMemo } from "react";

export interface Comic {
  id: number;
  title: string;
  description: string;
  modified?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  prices: Array<{
    type: string;
    price: number;
  }>;
  pageCount: number;
  urls: Array<{
    type: string;
    url: string;
  }>;
  creators: {
    items: Array<{
      name: string;
      role: string;
    }>;
  };
  series: {
    name: string;
  };
}

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
