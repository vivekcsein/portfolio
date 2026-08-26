export type ContentItem = {
  key: string;
  href: string;
  title: string;
  description?: string;
  updatedAt: string;
  keywords?: string[];
};

const DEFAULT_CONTENT_ITEM: ContentItem = {
  key: "",
  href: "#",
  title: "Untitled",
  description: "",
  updatedAt: "",
  keywords: [],
};

export const normalizeContentList = <T extends Partial<ContentItem>>(
  items: T[] | null | undefined,
  defaults: Partial<ContentItem> = {},
): ContentItem[] => {
  return (items ?? []).map((item) => ({
    ...DEFAULT_CONTENT_ITEM,
    ...defaults,
    ...item,
  }));
};
