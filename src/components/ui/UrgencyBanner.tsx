import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface UrgencyBannerProps {
  message: string;
  onClose: () => void;
}

const UrgencyBanner: React.FC<UrgencyBannerProps> = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      className="mb-6 rounded-lg bg-gradient-to-r from-marvel-red to-red-600 p-4 text-white shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="h-6 w-6 animate-pulse" />
          <p className="font-semibold">{message}</p>
        </div>
        <button onClick={onClose} className="text-white/80 hover:text-white">
          ×
        </button>
      </div>
    </motion.div>
  );
};

export default UrgencyBanner;
