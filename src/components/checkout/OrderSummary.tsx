import React from "react";
import { motion } from "framer-motion";
import type { CartItem } from "@/types/cart";

interface OrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  items,
  subtotal,
  tax,
  total,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Resumen de la orden</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 bg-white p-4 rounded-lg shadow-sm dark:bg-gray-800"
          >
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cantidad: {item.quantity}
              </p>
              <p className="font-medium">
                ${(item.prices[0]?.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-sm dark:bg-gray-800">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Impuestos (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
