import React, { useState } from "react";
import { useCartStore } from "@/store/cart";
import { useAuthStore } from "@/store/auth";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

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
          <OrderSummary
            items={items}
            subtotal={subtotal}
            tax={tax}
            total={total}
          />
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de pago</h2>
            <CheckoutForm
              onSubmit={handleSubmit}
              total={total}
              isAuthenticated={isAuthenticated}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
