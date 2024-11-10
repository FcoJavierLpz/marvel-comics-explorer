import { useParams, Link } from "react-router-dom";
import { useComic } from "@/hooks/useComic";
import { BlurImage } from "@/components/ui/BlurImage";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Heart,
  Share2,
  BookOpen,
  ArrowLeft,
  Star,
} from "lucide-react";
import { useComicsStore } from "@/store/comics";
import { useCartStore } from "@/store/cart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ComicDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: comic, isLoading } = useComic(id!);
  const addRecentComic = useComicsStore((state) => state.addRecentComic);
  const addToCart = useCartStore((state) => state.addItem);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  if (!comic) return null;

  const price = comic.prices.find((p) => p.type === "printPrice")?.price || 0;
  const digitalPrice = price * 0.8;

  const handleAddToCart = () => {
    addToCart(comic);
    setShowSocialProof(true);

    setTimeout(() => {
      setShowSocialProof(false);
    }, 4000);
  };

  const handleReadNow = () => {
    addToCart({
      ...comic,
      prices: [{ type: "digitalPrice", price: digitalPrice }],
    });
    navigate("/checkout");
  };

  addRecentComic(comic);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-marvel-blue">
      <div className="fixed top-[4.5rem] left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center text-marvel-red hover:text-red-700 dark:hover:text-red-400"
          >
            <ArrowLeft className="mr-2" /> Regresar a la Tienda
          </Link>
        </div>
      </div>

      {showSocialProof && (
        <motion.div
          className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md p-4 mb-4 text-white bg-green-500 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingCart className="mr-2" />
              <span className="font-semibold">¡Cómic agregado al carrito!</span>
            </div>
            <button
              className="ml-2 text-white hover:text-gray-200"
              onClick={() => setShowSocialProof(false)}
            >
              &times;
            </button>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlurImage
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="rounded-lg shadow-xl"
            />
          </motion.div>

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
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2" />
                  <span className="whitespace-nowrap">Agregar</span>
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
                  onClick={handleReadNow}
                >
                  <BookOpen className="mr-2" />
                  <span className="whitespace-nowrap">Leer Ahora</span>
                </motion.button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="inline-flex items-center text-gray-600 transition-colors hover:text-red-500 dark:text-gray-50 dark:hover:text-red-400">
                <Heart className="mr-1" /> Guardar
              </button>
              <button className="inline-flex items-center text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400">
                <Share2 className="mr-1" /> Compartir
              </button>
            </div>

            <div className="border-t pt-4 dark:border-gray-700">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
                Creadores
              </h3>
              <div className="flex flex-wrap gap-2">
                {comic.creators.items.map((creator) => (
                  <span
                    key={creator.name}
                    className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {creator.name} • {creator.role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
