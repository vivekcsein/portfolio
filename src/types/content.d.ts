export type ContentCategoryKey = string;

export type ContentItem = {
  key: string;
  title: string;
  description?: string;
  slug: string;

  /**
   * Category/slug composite string.
   * Reference-only metadata, not a navigable route.
   *
   * The real in-site link is computed from `slug`.
   */
  docPath: string;

  file: string;
  createdAt: string;
  updatedAt: string;
  keywords?: string[];
};

export type ContentCategoryConfig<
  TCategory extends ContentCategoryKey = ContentCategoryKey,
> = {
  key: TCategory;
  title: string;
  description?: string;
  children: ContentItem[];
};

export type ContentConfig<
  TCategory extends ContentCategoryKey = ContentCategoryKey,
> = {
  key: string;
  title: string;
  description: string;
  slug: string;
  path: string;
  categories: ContentCategoryConfig<TCategory>[];
};
