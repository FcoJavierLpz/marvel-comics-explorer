export interface Comic {
  id: number;
  title: string;
  description: string;
  modified?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  prices: Array<{
    type: string;
    price: number;
  }>;
  pageCount: number;
  urls: Array<{
    type: string;
    url: string;
  }>;
  creators: {
    items: Array<{
      name: string;
      role: string;
    }>;
  };
  series: {
    name: string;
  };
}
