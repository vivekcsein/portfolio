import { notFound } from "next/navigation";
import { Link } from "@/components/ui";
import ContentTimeline from "@/components/ui/timeline/ContentTimeline";
import { docsConfig } from "@/packages/configs/docs.config";
import { normalizeDocsList } from "@/packages/utils/content-normlize";

interface DocsCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return docsConfig.categories.map((category) => ({
    category: category.key,
  }));
}

const DocsCategoryPage = async ({ params }: DocsCategoryPageProps) => {
  const { category: categoryKey } = await params;

  const category = docsConfig.categories.find(
    (item) => item.key === categoryKey,
  );

  const contentList = normalizeDocsList(categoryKey, category?.children);

  if (!category) {
    notFound();
  }

  return (
    <main className="content-page">
      {/* Background decoration */}
      <div className="content-background" aria-hidden="true">
        <div className="content-glow content-glow-primary" />
        <div className="content-glow content-glow-secondary" />
        <div className="content-grid-pattern" />
      </div>

      <div className="content-container">
        {/* Back navigation */}
        <nav className="content-navigation">
          <Link
            href={`/${docsConfig.path}`}
            variant={"primary"}
            className="text-md"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Docs</span>
          </Link>
        </nav>

        {/* Hero */}
        <header className="content-hero">
          <div className="content-badge">
            <span className="content-badge-dot" />
            <span>Documentation</span>
          </div>

          <h1 className="content-title">{category.title}</h1>

          {category.description && (
            <p className="content-description">{category.description}</p>
          )}

          <div className="content-meta">
            <span>
              {category.children.length}{" "}
              {category.children.length === 1 ? "document" : "documents"}
            </span>

            <span className="content-meta-separator">•</span>

            <span>Everything you need to get started</span>
          </div>
        </header>

        {/* Documents */}
        <ContentTimeline
          heading={`Explore our best ${category.title} docs`}
          contentList={contentList}
        />
      </div>
    </main>
  );
};

export default DocsCategoryPage;
