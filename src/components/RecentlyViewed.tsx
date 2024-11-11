import React from "react";
import { motion } from "framer-motion";
import ComicCard from "./ui/ComicCard";
import { Comic } from "@/types/comic";
import { useComicsStore } from "@/store/comics";
import { Trash2 } from "lucide-react";

interface RecentlyViewedProps {
  recentComics: Comic[];
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ recentComics }) => {
  const clearRecentComics = useComicsStore((state) => state.clearRecentComics);
  const removeRecentComic = useComicsStore((state) => state.removeRecentComic);

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Continuar Leyendo
        </h2>
        {recentComics.length > 0 && (
          <button
            onClick={clearRecentComics}
            className="flex items-center gap-2 rounded-lg px-3 py-1 text-sm text-gray-600 transition-colors hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
            <span>Limpiar historial</span>
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {recentComics.map((comic, index) => (
          <motion.div
            key={`${comic.id}-${comic.title}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute -right-2 -top-2 z-10 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeRecentComic(comic.id);
                }}
                className="rounded-full bg-red-500 p-1.5 text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-600"
                title="Eliminar de continuar leyendo"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
            <ComicCard comic={comic} index={index} variant="compact" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
