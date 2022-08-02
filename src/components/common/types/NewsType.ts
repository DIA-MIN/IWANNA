// export interface NewsTypes {
//   author: string | null;
//   content: string;
//   description: string;
//   publishedAt: string;
//   source: {
//     id: null;
//     name: string;
//   };
//   title: string;
//   url: string;
//   urlToImage: string;
// }

export interface NewsTypes {
  author: string;
  authors: string;
  clean_url: string;
  country: string;
  excerpt: string;
  is_option: boolean;
  language: string;
  link: string;
  media: string;
  published_date: string;
  published_date_precision: string;
  rank: number;
  rights: string;
  summary: string;
  title: string;
  topic: string;
  twitter_account: string | null;
  _id: string;
  _score: number | null;
}

export interface ScrapNewsTypes {
  _id: string;
  title: string;
  link: string;
}
