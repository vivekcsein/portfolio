import Link from "next/link";
import { notFound } from "next/navigation";

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

      <section className="docs-document-grid">
        {category.children.map((doc) => (
          <Link
            key={doc.key}
            href={`/${docsConfig.path}/${category.key}/${doc.slug}`}
            className="docs-document-card"
          >
            <h2>{doc.title}</h2>

            {doc.description && <p>{doc.description}</p>}
          </Link>
        ))}
      </section>
    </main>
  );
};

export default DocsCategoryPage;
