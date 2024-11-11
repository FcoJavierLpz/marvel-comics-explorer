import { FC, useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { CartIcon } from "@/components/cart/CartIcon";
import { UserMenu } from "@/components/user/UserMenu";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { AuthModal } from "@/components/auth/AuthModal";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: FC = () => {
  const { isAuthenticated } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />

      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-marvel-blue/80">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center">
            <div className="bg-marvel-red px-3 py-1.5 rounded">
              <h1 className="text-2xl font-bold text-white tracking-wider whitespace-nowrap xs:text-lg">
                MARVEL COMICS
              </h1>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            <CartIcon />
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="rounded-full p-2 hover:bg-white/10 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Iniciar Sesión
              </button>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <CartIcon />
            <button
              onClick={toggleMenu}
              className="rounded-full p-2 hover:bg-white/10 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-black dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-black dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-x-0 top-[73px] z-50 bg-white dark:bg-gray-900 md:hidden"
              style={{ height: "calc(100vh - 73px)" }}
            >
              <div className="flex flex-col p-4 space-y-4">
                {isAuthenticated ? (
                  <div className="flex flex-col space-y-4">
                    <Link
                      to="/profile"
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      onClick={toggleMenu}
                    >
                      Mi Perfil
                    </Link>
                    <Link
                      to="/library"
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      onClick={toggleMenu}
                    >
                      Biblioteca
                    </Link>
                    <Link
                      to="/orders"
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                      onClick={toggleMenu}
                    >
                      Mis Pedidos
                    </Link>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      toggleMenu();
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Iniciar Sesión
                  </button>
                )}
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm">Tema</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
