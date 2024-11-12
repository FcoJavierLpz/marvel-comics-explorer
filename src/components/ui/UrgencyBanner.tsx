import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Clock } from "lucide-react";

interface UrgencyBannerProps {
  message: string;
  onClose: () => void;
}

const UrgencyBanner: React.FC<UrgencyBannerProps> = ({ message, onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((current) => {
        const totalSeconds =
          current.hours * 3600 + current.minutes * 60 + current.seconds - 1;
        if (totalSeconds < 0) return { hours: 23, minutes: 59, seconds: 59 };

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      className="mb-6 rounded-lg bg-gradient-to-r from-marvel-red to-red-600 p-4 text-white shadow-lg"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Zap className="h-6 w-6 animate-pulse" />
          <p className="font-semibold">{message}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <div className="flex gap-1 font-mono text-lg font-bold">
              <div className="flex items-center">
                <motion.span
                  key={timeLeft.hours}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-black/20 px-2 py-1 rounded"
                >
                  {String(timeLeft.hours).padStart(2, "0")}
                </motion.span>
                <span className="px-0.5">:</span>
              </div>
              <div className="flex items-center">
                <motion.span
                  key={timeLeft.minutes}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-black/20 px-2 py-1 rounded"
                >
                  {String(timeLeft.minutes).padStart(2, "0")}
                </motion.span>
                <span className="px-0.5">:</span>
              </div>
              <motion.span
                key={timeLeft.seconds}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-black/20 px-2 py-1 rounded"
              >
                {String(timeLeft.seconds).padStart(2, "0")}
              </motion.span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UrgencyBanner;
