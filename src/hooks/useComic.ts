import { useQuery } from "@tanstack/react-query";
import { marvelApi } from "@/services/axios";
import type { Comic } from "@/types/comic";

interface ComicResponse {
  data: {
    results: Comic[];
  };
}

export const useComic = (id: string) => {
  return useQuery({
    queryKey: ["comic", id],
    queryFn: async () => {
      const { data } = await marvelApi.get<ComicResponse>(`/comics/${id}`);
      return data.data.results[0];
    },
  });
};
