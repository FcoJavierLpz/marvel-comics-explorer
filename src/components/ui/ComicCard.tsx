import React from "react";
import { Link } from "react-router-dom";
import { Comic } from "@/types/comic";

interface ComicCardProps {
  comic: Partial<Comic>;
  index: number;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
    <Link
      to={`/comic/${comic.id}`}
      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105 animate-fade-in"
    >
      <div className="aspect-[2/3] w-full">
        <img
          src={`${comic.thumbnail?.path}.${comic.thumbnail?.extension}`}
          alt={comic.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 p-4 text-white">
          <h3 className="text-lg font-bold line-clamp-2">{comic.title}</h3>
          <p className="text-sm opacity-80">
            {comic.prices && comic.prices[0]?.price
              ? `${comic.prices[0].price}`
              : "Precio no disponible"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ComicCard;
