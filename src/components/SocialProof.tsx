import React from "react";
import SocialProofCard from "@/components/ui/SocialProofCard";
import { Star, Zap, Clock } from "lucide-react";

const SocialProof: React.FC = () => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <SocialProofCard
        icon={<Star className="h-6 w-6 text-yellow-500" />}
        title="4.8/5 Calificación Promedio"
        description="De más de 10,000 lectores"
      />
      <SocialProofCard
        icon={<Zap className="h-6 w-6 text-blue-500" />}
        title="Acceso Digital Instantáneo"
        description="Lee inmediatamente después de la compra"
      />
      <SocialProofCard
        icon={<Clock className="h-6 w-6 text-green-500" />}
        title="Garantía de Devolución de Dinero de 30 Días"
        description="100% de satisfacción garantizada"
      />
    </div>
  );
};

export default SocialProof;
