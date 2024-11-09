import { Zap } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <Zap
        className="w-12 h-12 text-marvel-red animate-power-pulse"
        aria-label="Loading..."
      />
    </div>
  );
};
