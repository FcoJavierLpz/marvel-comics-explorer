import React from "react";
import { motion } from "framer-motion";
import ComicCard from "./ui/ComicCard";

interface Comic {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface RecentlyViewedProps {
  recentComics: Comic[];
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ recentComics }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Continuar Leyendo
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {recentComics.map((comic, index) => (
          <motion.div
            key={`${comic.id}-${comic.title}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ComicCard comic={comic} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
