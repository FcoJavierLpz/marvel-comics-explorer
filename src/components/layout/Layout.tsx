import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import CartAlert from "@/components/ui/CartAlert";
import { WelcomeModal } from "../ui/WelcomeModal";

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <WelcomeModal />
      <Header />
      <CartAlert />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
