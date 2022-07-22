export interface NewsTypes {
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface ScrapNewsTypes {
  title: string;
  url: string;
  isScrap: boolean;
}
