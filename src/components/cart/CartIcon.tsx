import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, getTotalItems, getTotalPrice, removeItem } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="h-5 w-5" />
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-marvel-red text-xs font-bold text-white"
          >
            {totalItems}
          </motion.span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-full mt-2 w-80 rounded-lg bg-white p-4 shadow-xl dark:bg-gray-800"
          >
            {items.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Tu carrito esta vacio
              </p>
            ) : (
              <>
                <div className="max-h-96 space-y-4 overflow-auto">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 border-b pb-4 dark:border-gray-700"
                    >
                      <img
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt={item.title}
                        className="h-16 w-16 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Qty: {item.quantity} × ${item.prices[0]?.price || 0}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-4">
                  <div className="flex justify-between border-t pt-4 font-semibold dark:text-white">
                    <span>Total:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button className="w-full rounded-lg bg-marvel-red px-4 py-2 font-semibold text-white transition-colors hover:bg-red-700">
                    Checkout
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
