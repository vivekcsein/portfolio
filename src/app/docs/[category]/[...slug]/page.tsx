import DocsTemplate from "@/components/features/docs-app/DocsTemplate";
import { docsConfig } from "@/packages/configs/docs.config";

export interface DocsPageProps {
  params: Promise<{
    category: string;
    slug: string[];
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return docsConfig.categories.flatMap((category) =>
    category.children.map((doc) => ({
      category: category.key,
      slug: [doc.slug],
    })),
  );
}

const DocsTemplatePage = async ({ params }: DocsPageProps) => {
  const { category, slug } = await params;

  return <DocsTemplate slug={[category, ...slug]} />;
};

export default DocsTemplatePage;
