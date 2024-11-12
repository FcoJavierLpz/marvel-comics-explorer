import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Brain,
  Heart,
  Code2,
  Palette,
  Sparkles,
  Moon,
  Zap,
} from "lucide-react";

export const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setIsOpen(true);
      localStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Persuasión y Conversión",
      description:
        "Oportunidad limitada, prueba social y nudges para mejor conversión",
    },
    {
      icon: Heart,
      title: "Diseño Intuitivo",
      description: "UX optimizada con animaciones y transiciones fluidas",
    },
    {
      icon: Moon,
      title: "Experiencia Adaptativa",
      description:
        "Tema claro/oscuro y carga optimizada con lazy loading y Scroll Infinito",
    },
  ];

  const techStack = [
    "React + TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Zustand",
    "React Query",
    "Lucide Icons",
  ];

  const futureFeatures = [
    "Sistema de Suscripción",
    "Gamificación",
    "Características Sociales",
    "App Móvil",
    "ML para Recomendaciones",
  ];

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800 mt-16 sm:mt-0"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 text-center">
              <Sparkles className="mx-auto mb-4 h-12 w-12 text-marvel-red" />
              <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                ¡Bienvenido a tu tienda de cómics de Marvel!
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Una experiencia única para explorar y comprar cómics de Marvel
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                <Zap className="mr-2 h-5 w-5 text-marvel-red" />
                Características Principales
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700"
                  >
                    <feature.icon className="mb-2 h-6 w-6 text-marvel-red" />
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                <Code2 className="mr-2 h-5 w-5 text-marvel-red" />
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
                <Palette className="mr-2 h-5 w-5 text-marvel-red" />
                Futuras Mejoras
              </h3>
              <div className="flex flex-wrap gap-2">
                {futureFeatures.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-marvel-red/10 px-3 py-1 text-sm text-marvel-red dark:bg-marvel-red/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              <p>
                Nota: Esta es una aplicación de demostración. La autenticación y
                datos son simulados localmente.
              </p>
              <p className="mt-2">
                Creado con{" "}
                <Heart className="inline-block h-4 w-4 text-marvel-red animate-pulse" />{" "}
                por Francisco J. Lopez
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
