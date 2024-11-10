import { Link } from "react-router-dom";
import { ShieldQuestion } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in">
      <ShieldQuestion className="w-24 h-24 text-marvel-red mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold mb-4">¡Ups! Página No Encontrada</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        ¡Parece que esta página ha sido transportada a otra dimensión!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-marvel-red text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Regresar a la Tienda
      </Link>
    </div>
  );
};

export default NotFound;
