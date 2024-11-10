import React, { useState } from "react";
import { useCartStore } from "@/store/cart";
import { useAuthStore } from "@/store/auth";
import { motion } from "framer-motion";
import { CreditCard, Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthModal } from "@/components/auth/AuthModal";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(!isAuthenticated);
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    clearCart();
    alert("¡Gracias por tu compra!");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <Link
          to="/"
          className="text-marvel-red hover:text-red-700 flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />

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

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid gap-8 lg:grid-cols-2">
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

          <div>
            <h2 className="text-2xl font-bold mb-6">Información de pago</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm space-y-4 dark:bg-gray-800">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre en la tarjeta
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-marvel-red focus:border-marvel-red dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Número de tarjeta
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      pattern="[0-9]{16}"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-marvel-red focus:border-marvel-red dark:bg-gray-700 dark:border-gray-600"
                    />
                    <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Fecha de expiración
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM/YY"
                      pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-marvel-red focus:border-marvel-red dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      pattern="[0-9]{3,4}"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-marvel-red focus:border-marvel-red dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Tus datos están seguros y encriptados</span>
              </div>

              <button
                type="submit"
                className="w-full bg-marvel-red text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                {isAuthenticated
                  ? `Pagar $${total.toFixed(2)}`
                  : "Iniciar sesión para continuar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
