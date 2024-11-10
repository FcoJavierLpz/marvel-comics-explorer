import { useInfiniteQuery } from "@tanstack/react-query";
import { marvelApi } from "@/services/axios";
import type { Comic } from "@/types/comic";

interface ComicsResponse {
  data: {
    results: Comic[];
    total: number;
  };
}

export const useComics = () => {
  return useInfiniteQuery<ComicsResponse, Error>({
    queryKey: ["comics"],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await marvelApi.get<ComicsResponse>("/comics", {
        params: {
          limit: 20,
          offset: pageParam,
          orderBy: "-focDate",
        },
      });
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || !lastPage.data) {
        return undefined;
      }
      const offset = allPages.length * 20;
      return offset < lastPage.data.total ? offset : undefined;
    },

    initialPageParam: 0,
  });
};
