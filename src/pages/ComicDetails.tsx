import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useComic } from "@/hooks/useComic";
import { BlurImage } from "@/components/ui/BlurImage";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useComicsStore } from "@/store/comics";
import { useCartStore } from "@/store/cart";
import { useUIStore } from "@/store/ui";
import ComicInfo from "@/components/comic-details/ComicInfo";

export const ComicDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: comic, isLoading } = useComic(id!);
  const addRecentComic = useComicsStore((state) => state.addRecentComic);
  const addToCart = useCartStore((state) => state.addItem);
  const showCartAlert = useUIStore((state) => state.showCartAlert);
  const navigate = useNavigate();

  useEffect(() => {
    if (comic) {
      addRecentComic(comic);
    }
  }, [comic, addRecentComic]);

  if (isLoading) return <LoadingSpinner />;
  if (!comic) return null;

  const price = comic.prices.find((p) => p.type === "printPrice")?.price || 0;
  const digitalPrice = price * 0.8;

  const handleAddToCart = () => {
    addToCart(comic);
    showCartAlert("¡Cómic agregado al carrito!");
  };

  const handleReadNow = () => {
    addToCart({
      ...comic,
      prices: [{ type: "digitalPrice", price: digitalPrice }],
    });
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-marvel-blue">
      <div className="fixed top-[73px] left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center text-marvel-red hover:text-red-700 dark:hover:text-red-400"
          >
            <ArrowLeft className="mr-2" /> Regresar a la Tienda
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-32">
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

          <ComicInfo
            comic={comic}
            price={price}
            digitalPrice={digitalPrice}
            onAddToCart={handleAddToCart}
            onReadNow={handleReadNow}
          />
        </div>
      </div>
    </div>
  );
};
