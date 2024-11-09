import { Link } from "react-router-dom";
import { ShieldQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center animate-fade-in">
      <ShieldQuestion className="w-24 h-24 text-marvel-red mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Looks like this page has been transported to another dimension!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-marvel-red text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        Return to Comics
      </Link>
    </div>
  );
}
