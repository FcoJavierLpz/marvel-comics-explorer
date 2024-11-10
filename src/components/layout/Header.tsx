import { FC, useEffect } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { CartIcon } from "@/components/cart/CartIcon";

export const Header: FC = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-marvel-blue/80">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-marvel-red">Marvel Comics</h1>
        <div className="flex items-center space-x-2">
          <CartIcon />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
