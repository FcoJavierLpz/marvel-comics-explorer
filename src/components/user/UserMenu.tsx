import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  User,
  Settings,
  BookOpen,
  Heart,
  History,
  Library,
  LogOut,
  Gift,
  Shield,
} from "lucide-react";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: User, label: "Mi Perfil", path: "/profile" },
    { icon: Library, label: "Biblioteca Digital", path: "/library" },
    { icon: BookOpen, label: "Comics en Progreso", path: "/reading" },
    { icon: Heart, label: "Lista de Deseos", path: "/wishlist" },
    { icon: History, label: "Historial de Compras", path: "/orders" },
    { icon: Gift, label: "Recompensas", path: "/rewards" },
    { icon: Shield, label: "Suscripción Marvel", path: "/subscription" },
    { icon: Settings, label: "Configuración", path: "/settings" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-full p-2 hover:bg-white/10 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="User menu"
      >
        <User className="h-5 w-5 text-black dark:text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-full mt-2 w-64 rounded-lg bg-white py-2 shadow-xl dark:bg-gray-800"
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Peter Parker
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                peter@dailybugle.com
              </p>
            </div>

            <div className="py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
              >
                <LogOut className="mr-3 h-4 w-4" />
                Cerrar Sesión
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
