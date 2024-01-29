export type Site = {
  website: string;
  author: string;
  description: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
  itemsPerPage: number;
};

export const SITE: Site = {
  website: "https://faqs.vyke.dev",
  author: "Jose Albizures",
  description: "",
  title: "Faqs by Vyke",

  // ogImage: 'main.jpg',
  lightAndDarkMode: true,
  itemsPerPage: 6,
};
