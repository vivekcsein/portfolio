import ContentTemplate from "@/components/features/docs-app/ContentTemplate";
import { codeConfig } from "@/packages/configs/code.config";

export interface CodePageProps {
  params: Promise<{
    category: string;
    slug: string[];
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return codeConfig.categories.flatMap((category) =>
    category.children.map((doc) => ({
      category: category.key,
      slug: [doc.slug],
    })),
  );
}

const CodeTemplatePage = async ({ params }: CodePageProps) => {
  const { category, slug } = await params;

  return <ContentTemplate slug={[category, ...slug]} config={codeConfig} />;
};

export default CodeTemplatePage;
