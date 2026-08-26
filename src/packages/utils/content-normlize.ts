/**
 * Shared shape for anything rendered by <ContentTimeline> — a doc article
 * or a project. `external` tells the card whether `href` is an in-site
 * route (docs) or a link that should leave the site (a project's GitHub
 * repo) — see ContentTimeline.tsx for how it's used.
 */
export type ContentItem = {
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

const DEFAULT_CONTENT_ITEM: ContentItem = {
  key: "",
  href: "#",
  title: "Untitled",
  description: "",
  updatedAt: "",
  keywords: [],
  external: false,
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

/**
 * Docs-specific adapter: `DocsItem` (docs.config.ts) has no `href` field
 * — only `slug`/`path` — so its in-site route is computed here rather
 * than falling through normalizeContentList's "#" default.
 */
export const normalizeDocsList = (
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
): ContentItem[] => {
  return (items ?? []).map((item) => ({
    key: item.key,
    href: `/docs/${categoryKey}/${item.slug}`,
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
): ContentItem[] => {
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
