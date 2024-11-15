import React from "react";
import { motion } from "framer-motion";
import { BlurImage } from "@/components/ui/BlurImage";
import type { Comic } from "@/types/comic";
import { Link } from "react-router-dom";
import { ShoppingCart, Star, Users } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { useUIStore } from "@/store/ui";

interface ComicCardProps {
  comic: Comic;
  index: number;
  variant?: "default" | "compact";
}

const ComicCard = React.memo(
  ({ comic, index, variant = "default" }: ComicCardProps) => {
    const addToCart = useCartStore((state) => state.addItem);
    const showCartAlert = useUIStore((state) => state.showCartAlert);

    if (!comic) {
      return null;
    }

    const price = comic.prices.find((p) => p.type === "printPrice")?.price || 0;
    const isPopular = index < 5;
    const stockLeft = Math.floor(Math.random() * 10) + 1;
    const rating = (4 + Math.random()).toFixed(1);

    const handleAddToCart = (e: React.MouseEvent) => {
      e.preventDefault();
      addToCart(comic);
      showCartAlert("¡Cómic agregado al carrito!");
    };

    if (variant === "compact") {
      return (
        <Link to={`/comics/${comic.id}`} className="block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg bg-white shadow-md dark:bg-marvel-blue"
          >
            <BlurImage
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-2">
              <h3 className="truncate text-sm font-medium text-gray-900 dark:text-gray-50">
                {comic.title}
              </h3>
            </div>
          </motion.div>
        </Link>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-marvel-blue"
        layout
      >
        <Link to={`/comics/${comic.id}`} className="block">
          {/* Popularity Badge */}
          {isPopular && (
            <div className="absolute left-0 top-4 z-10 rounded-r-lg bg-marvel-red px-3 py-1 text-sm font-semibold text-white shadow-md">
              Elección Popular 🔥
            </div>
          )}

          {/* Stock Warning */}
          {stockLeft <= 5 && (
            <div className="absolute right-0 top-4 z-10 rounded-l-lg bg-yellow-500 px-3 py-1 text-sm font-semibold text-white shadow-md">
              ¡Solo quedan {stockLeft}!
            </div>
          )}

          <BlurImage
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
            className="h-[400px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute bottom-0 w-full p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h3 className="mb-2 text-lg font-bold">{comic.title}</h3>

            {/* Social Proof */}
            <div className="mb-3 flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 text-yellow-400" />
                <span>{rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4 text-blue-400" />
                <span>{Math.floor(Math.random() * 1000) + 100} lectores</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-lg font-bold">${price}</p>
                <p className="text-sm text-green-400">
                  Digital: ${(price * 0.8).toFixed(2)}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-marvel-red p-2 text-white shadow-lg transition-colors hover:bg-red-700"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  },
);

ComicCard.displayName = "ComicCard";
export default ComicCard;
