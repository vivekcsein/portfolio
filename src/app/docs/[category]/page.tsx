import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui";
import { docsConfig } from "@/packages/configs/docs.config";

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

  if (!category) {
    notFound();
  }

  return (
    <main className="docs-page">
      <header className="docs-page-header">
        <Link href={`/${docsConfig.path}`} className="docs-back-link">
          ← Back to Docs
        </Link>

        <h1>{category.title}</h1>

        {category.description && (
          <p className="docs-page-description">{category.description}</p>
        )}
      </header>

      <section
        className="docs-document-grid"
        aria-label={`${category.title} documentation`}
      >
        {category.children.map((child) => (
          <Link
            key={child.key}
            href={`/${docsConfig.path}/${category.key}/${child.slug}`}
            className="docs-document-card"
          >
            <Card className="docs-category-card-content">
              <h2>{child.title}</h2>

              {child.description && <p>{child.description}</p>}
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default DocsCategoryPage;
