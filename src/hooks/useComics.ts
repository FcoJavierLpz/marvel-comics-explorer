import { useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
import { marvelApi } from "@/services/axios";
import type { Comic } from "@/types/comic";

interface ComicsResponse {
  data: {
    results: Comic[];
    total: number;
    limit: number;
    offset: number;
  };
}

export const useComics = () => {
  return useInfiniteQuery<ComicsResponse>({
    queryKey: ["comics"],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await marvelApi.get<ComicsResponse>("/comics", {
        params: {
          limit: 12,
          offset: pageParam,
          orderBy: "-focDate",
        },
      });
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextOffset = allPages.length * lastPage.data.limit;
      return nextOffset < lastPage.data.total ? nextOffset : undefined;
    },
    initialPageParam: 0,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    gcTime: 1000 * 60 * 30,
  });
};
