import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useComics } from "@/hooks/useComics";
import useFilteredComics from "@/hooks/useFilteredComics";
import useSortedComics from "@/hooks/useSortedComics";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { SearchBar } from "@/components/ui/SearchBar";
import UrgencyBanner from "@/components/ui/UrgencyBanner";
import NoResultsMessage from "@/components/NoResultsMessage";

import { useComicsStore } from "@/store/comics";
import FilterSection from "@/components/FilterSection";
import RecentlyViewed from "@/components/RecentlyViewed";
import SocialProof from "@/components/SocialProof";
import ComicCard from "@/components/ui/ComicCard";

const ComicList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useComics();
  const { ref, inView } = useInView();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<
    "trending" | "popular" | "recent"
  >("trending");
  const recentComics = useComicsStore((state) => state.recentComics);
  const [showUrgencyBanner, setShowUrgencyBanner] = useState(true);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const filteredComics = useFilteredComics({
    comics: data?.pages?.flatMap((page) => page.data.results) || [],
    searchTerm,
  });

  // Persuasive sorting based on filter
  const sortedComics = useSortedComics({
    comics: filteredComics,
    selectedFilter,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Urgency Banner (Cue) */}
      {showUrgencyBanner && (
        <UrgencyBanner
          message="¡Venta Flash! ¡20% de descuento en todos los cómics digitales durante las próximas 24 horas!"
          onClose={() => setShowUrgencyBanner(false)}
        />
      )}

      {/* Search and Filters (Reaction) */}
      <div className="mb-8 space-y-4">
        <div className="flex justify-center">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        <FilterSection
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>

      {/* Recently Viewed Section */}
      {recentComics.length > 0 && (
        <RecentlyViewed recentComics={recentComics} />
      )}

      {/* Social Proof Section */}
      <SocialProof />

      {filteredComics.length === 0 && searchTerm && (
        <NoResultsMessage searchTerm={searchTerm} />
      )}

      {/* Main Comic Grid (Action) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedComics.map((comic, index) => (
          <ComicCard key={comic.id} comic={comic} index={index} />
        ))}
      </div>

      {!searchTerm && (
        <div ref={ref} className="mt-8">
          {isFetchingNextPage && <LoadingSpinner />}
        </div>
      )}
    </div>
  );
};

export default ComicList;
