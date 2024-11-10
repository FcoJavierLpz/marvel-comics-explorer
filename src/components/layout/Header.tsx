import { FC, useEffect } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { CartIcon } from "@/components/cart/CartIcon";
import { UserMenu } from "@/components/user/UserMenu";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { useState } from "react";
import { AuthModal } from "@/components/auth/AuthModal";

export const Header: FC = () => {
  const { isAuthenticated } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

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
          <div className="flex items-center space-x-2">
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
        </div>
      </header>
    </>
  );
};
