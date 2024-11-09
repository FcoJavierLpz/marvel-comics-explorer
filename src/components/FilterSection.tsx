import React from "react";
import FilterButton from "@/components/ui/FilterButton";
import { TrendingUp, Star, Clock } from "lucide-react";

interface FilterSectionProps {
  selectedFilter: "trending" | "popular" | "recent";
  // eslint-disable-next-line no-unused-vars
  setSelectedFilter: (filter: "trending" | "popular" | "recent") => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedFilter,
  setSelectedFilter,
}) => (
  <div className="flex flex-wrap justify-center gap-2">
    <FilterButton
      active={selectedFilter === "trending"}
      onClick={() => setSelectedFilter("trending")}
      icon={<TrendingUp className="h-4 w-4" />}
      label="Tendencias Ahora"
    />
    <FilterButton
      active={selectedFilter === "popular"}
      onClick={() => setSelectedFilter("popular")}
      icon={<Star className="h-4 w-4" />}
      label="Más Popular"
    />
    <FilterButton
      active={selectedFilter === "recent"}
      onClick={() => setSelectedFilter("recent")}
      icon={<Clock className="h-4 w-4" />}
      label="Añadido Recientemente"
    />
  </div>
);

export default FilterSection;
