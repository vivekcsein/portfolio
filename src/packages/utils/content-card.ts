/**
 * Shared shape for anything rendered by <ContentTimeline> — a doc/code
 * article or a project. Named `ContentCardItem` (not `ContentItem`) to
 * avoid colliding with the unrelated `ContentItem` type in
 * `types/content.d.ts`, which describes raw config data, not this
 * rendered-card view model.
 *
 * `external` tells the card whether `href` is an in-site route (docs,
 * code) or a link that should leave the site (a project's GitHub repo)
 * — see ContentTimeline.tsx for how it's used.
 */
export type ContentCardItem = {
  key: string;
  href: string;
  title: string;
  description?: string;
  updatedAt: string;
  keywords?: string[];
  /** false (default) = internal Next.js route, navigates in the same tab.
   *  true = leaves the site, opens in a new tab with rel="noreferrer". */
  external?: boolean;
};

const DEFAULT_CONTENT_CARD_ITEM: ContentCardItem = {
  key: "",
  href: "#",
  title: "Untitled",
  description: "",
  updatedAt: "",
  keywords: [],
  external: false,
};

export const normalizeContentList = <T extends Partial<ContentCardItem>>(
  items: T[] | null | undefined,
  defaults: Partial<ContentCardItem> = {},
): ContentCardItem[] => {
  return (items ?? []).map((item) => ({
    ...DEFAULT_CONTENT_CARD_ITEM,
    ...defaults,
    ...item,
  }));
};

/**
 * Shared adapter for any category-based content section (docs, code) —
 * their raw items (`ContentItem` in types/content.d.ts) have no `href`
 * field, only `slug`, so the in-site route is computed here.
 *
 * @param basePath e.g. "docs" or "code" — matches the route segment
 * (docsConfig.path / codeConfig.path).
 */
export const normalizeCategoryContentList = (
  basePath: string,
  categoryKey: string,
  items:
    | {
        key: string;
        slug: string;
        title: string;
        description?: string;
        updatedAt: string;
        keywords?: string[];
      }[]
    | null
    | undefined,
): ContentCardItem[] => {
  return (items ?? []).map((item) => ({
    key: item.key,
    href: `/${basePath}/${categoryKey}/${item.slug}`,
    title: item.title,
    description: item.description ?? "",
    updatedAt: item.updatedAt,
    keywords: item.keywords ?? [],
    external: false,
  }));
};

/**
 * Projects-specific adapter: every `Project.href` today is an external
 * GitHub URL (see types/projects.d.ts) — this marks that explicitly so
 * <ContentTimeline> renders it as an outbound link (new tab, "View
 * repository" label) instead of the docs-style in-site link.
 */
export const normalizeProjectsList = (
  items: readonly {
    key: string;
    href: string;
    title: string;
    description?: string;
    updatedAt: string;
    keywords?: string[];
  }[],
): ContentCardItem[] => {
  return items.map((item) => ({
    key: item.key,
    href: item.href,
    title: item.title,
    description: item.description ?? "",
    updatedAt: item.updatedAt,
    keywords: item.keywords ?? [],
    external: true,
  }));
};
