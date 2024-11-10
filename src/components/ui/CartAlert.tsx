import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X } from "lucide-react";

interface CartAlertProps {
  show: boolean;
  onClose: () => void;
}

const CartAlert = ({ show, onClose }: CartAlertProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed left-1/2 top-20 z-50 w-[90%] max-w-md -translate-x-1/2 rounded-lg bg-green-500 p-4 text-white shadow-lg md:top-0"
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
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartAlert;
