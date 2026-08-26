import DocsTemplate from "@/components/features/docs-app/DocsTemplate";
import { docsConfig } from "@/packages/configs/docs.config";

export interface DocsPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return docsConfig.categories.flatMap((category) =>
    category.children.map((doc) => ({
      slug: [category.key, doc.slug],
    })),
  );
}

const DocsTemplatePage = async ({ params }: DocsPageProps) => {
  const { slug } = await params;

  console.log(slug);

  return <DocsTemplate slug={slug} />;
};

export default DocsTemplatePage;
