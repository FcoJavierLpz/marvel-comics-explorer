import { memo } from "react";
import { Comic } from "@/types/comic";
import ComicCard from "@/components/ui/ComicCard";

interface ComicGridProps {
  comics: Comic[];
}

const ComicGrid = memo(({ comics }: ComicGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {comics.map((comic, index) => (
        <div
          key={`${comic.id}-${index}`}
          className="transform transition-all duration-300 ease-in-out"
        >
          <ComicCard comic={comic} index={index} />
        </div>
      ))}
    </div>
  );
});

ComicGrid.displayName = "ComicGrid";

export default ComicGrid;
