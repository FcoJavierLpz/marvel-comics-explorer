import React from "react";
import { CreditCard, Lock } from "lucide-react";

interface CheckoutFormProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (e: React.FormEvent) => void;
  total: number;
  isAuthenticated: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  onSubmit,
  total,
  isAuthenticated,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
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
            <label className="block text-sm font-medium mb-2">CVV</label>
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
        <Lock className="w-4 h-4" />
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
  );
};

export default CheckoutForm;
