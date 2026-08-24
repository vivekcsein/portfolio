import Link from "next/link";

import { docsConfig } from "@/packages/configs/docs.config";

const DocsPage = () => {
  return (
    <main className="docs-page">
      <header className="docs-page-header">
        <h1>{docsConfig.title}</h1>

        <p className="docs-page-description">{docsConfig.description}</p>
      </header>

      <section
        className="docs-category-grid"
        aria-label="Documentation categories"
      >
        {docsConfig.categories.map((category) => (
          <Link
            key={category.key}
            href={`/${docsConfig.path}/${category.key}`}
            className="docs-category-card"
          >
            <div className="docs-category-card-content">
              <h2>{category.title}</h2>

              {category.description && <p>{category.description}</p>}

              <span>
                {category.children.length}{" "}
                {category.children.length === 1 ? "document" : "documents"}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default DocsPage;
