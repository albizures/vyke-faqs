import { slug as slugger } from "github-slugger";
import { SITE } from "../config";

type WithDraft = Partial<Record<"draft", boolean | undefined>>;
type WithTags = Record<"tags", Array<string>>;
type WithSlug = Partial<Record<"slug", string>>;
type WithTitle = Record<"title", string>;

type Data<TProperties> = Record<"data", TProperties>;

export function sortCollection<T extends Data<WithTitle & WithDraft>>(
  item: Array<T>
) {
  return item
    .filter(({ data }) => !data.draft)
    .sort((a, b) => {
      if (a.data.title < b.data.title) {
        return -1;
      }
      if (a.data.title > b.data.title) {
        return 1;
      }
      return 0;
    });
}

export function filderByTag<TItem extends Data<WithTags>>(
  items: Array<TItem>,
  tag: string
) {
  return items.filter((item) => slugifyAll(item.data.tags).includes(tag));
}

export function getUniqueTags<TItem extends Data<WithTags & WithDraft>>(
  item: Array<TItem>
) {
  const filteredPosts = item.filter(({ data }) => !data.draft);
  const tags: Array<string> = filteredPosts
    .flatMap((post) => post.data.tags)
    .map((tag) => slugifyStr(tag))
    .filter(
      (value: string, index: number, self: Array<string>) =>
        self.indexOf(value) === index
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
}

export function slugifyStr(str: string) {
  return slugger(str);
}

export function slugify(post: WithSlug & WithTitle) {
  return slugger(post.title);
}

export function slugifyAll(arr: Array<string>) {
  return arr.map((str) => slugifyStr(str));
}

export const getPageNumbers = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / Number(SITE.itemsPerPage);

  let pageNumbers: Array<number> = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
};
