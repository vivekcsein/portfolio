import ContentTemplate from "@/components/features/docs-content-app/ContentTemplate";
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

const DocsTemplateRoute = async ({ params }: DocsPageProps) => {
  const { category, slug } = await params;

  return <ContentTemplate slug={[category, ...slug]} config={docsConfig} />;
};

export default DocsTemplateRoute;
