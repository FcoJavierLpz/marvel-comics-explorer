import React from "react";
import { motion } from "framer-motion";
import { Heart, Share2, Star } from "lucide-react";
import type { Comic } from "@/types/comic";

interface ComicInfoProps {
  comic: Comic;
  price: number;
  digitalPrice: number;
  onAddToCart: () => void;
  onReadNow: () => void;
}

const ComicInfo: React.FC<ComicInfoProps> = ({
  comic,
  price,
  digitalPrice,
  onAddToCart,
  onReadNow,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50">
        {comic.title}
      </h1>

      <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
        <Star className="text-yellow-500" />
        <span>4.8/5 de más de 120 lectores</span>
        <span>•</span>
        <span>¡Últimas 3 copias disponibles!</span>
      </div>

      <div className="text-gray-900 dark:text-gray-50">
        <p>{comic.description || "No description available."}</p>
      </div>

      <PriceSection
        price={price}
        digitalPrice={digitalPrice}
        onAddToCart={onAddToCart}
        onReadNow={onReadNow}
      />

      <div className="flex space-x-4">
        <button className="inline-flex items-center text-gray-600 transition-colors hover:text-red-500 dark:text-gray-50 dark:hover:text-red-400">
          <Heart className="mr-1" /> Guardar
        </button>
        <button className="inline-flex items-center text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400">
          <Share2 className="mr-1" /> Compartir
        </button>
      </div>

      <CreatorsList creators={comic.creators.items} />
    </motion.div>
  );
};

const PriceSection: React.FC<{
  price: number;
  digitalPrice: number;
  onAddToCart: () => void;
  onReadNow: () => void;
}> = ({ price, digitalPrice, onAddToCart, onReadNow }) => (
  <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
      <div className="space-y-1">
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
          Edición Impresa
        </p>
        <p className="text-2xl font-bold text-marvel-red dark:text-red-400">
          ${price}
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex min-w-[140px] items-center justify-center rounded-lg bg-marvel-red px-4 py-3 font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
        onClick={onAddToCart}
      >
        Agregar
      </motion.button>
    </div>

    <div className="mt-4 space-y-1">
      <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Edición Digital
      </p>
      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
        ${digitalPrice.toFixed(2)}{" "}
        <span className="text-sm text-green-500 dark:text-green-400">
          ¡Ahorra un 20%!
        </span>
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
        onClick={onReadNow}
      >
        Leer Ahora
      </motion.button>
    </div>
  </div>
);

const CreatorsList: React.FC<{
  creators: Array<{ name: string; role: string }>;
}> = ({ creators }) => (
  <div className="border-t pt-4 dark:border-gray-700">
    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
      Creadores
    </h3>
    <div className="flex flex-wrap gap-2">
      {creators.map((creator) => (
        <span
          key={creator.name}
          className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200"
        >
          {creator.name} • {creator.role}
        </span>
      ))}
    </div>
  </div>
);

export default ComicInfo;
