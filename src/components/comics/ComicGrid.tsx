import React from "react";
import { Comic } from "@/types/comic";
import ComicCard from "@/components/ui/ComicCard";

interface ComicGridProps {
  comics: Comic[];
}

const ComicGrid = React.memo(({ comics }: ComicGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {comics.map((comic, index) => (
        <ComicCard key={`${comic.id}-${index}`} comic={comic} index={index} />
      ))}
    </div>
  );
});

ComicGrid.displayName = "ComicGrid";

export default ComicGrid;
