import { useInView } from "react-intersection-observer";
import { useState, useMemo } from "react";
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
import ComicGrid from "@/components/comics/ComicGrid";

const ComicsList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useComics();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<
    "trending" | "popular" | "recent"
  >("trending");
  const recentComics = useComicsStore((state) => state.recentComics);
  const [showUrgencyBanner, setShowUrgencyBanner] = useState(true);

  const { ref: loadMoreRef } = useInView({
    threshold: 0,
    rootMargin: "300px",
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  const allComics = useMemo(() => {
    return data?.pages.flatMap((page) => page.data.results) || [];
  }, [data?.pages]);

  const filteredComics = useFilteredComics({
    comics: allComics,
    searchTerm,
  });

  const sortedComics = useSortedComics({
    comics: filteredComics,
    selectedFilter,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

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

      <ComicGrid comics={sortedComics} />

      {!searchTerm && hasNextPage && (
        <div ref={loadMoreRef} className="h-10 w-full">
          {isFetchingNextPage && <LoadingSpinner />}
        </div>
      )}
    </div>
  );
};

export default ComicsList;
