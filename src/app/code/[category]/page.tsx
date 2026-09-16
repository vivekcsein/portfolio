import { notFound } from "next/navigation";
import ContentCategoryPage from "@/components/features/docs-content-app/ContentCategoryPage";
import { codeConfig } from "@/packages/configs/code.config";

interface CodeCategoryRouteProps {
  params: Promise<{
    category: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return codeConfig.categories.map((category) => ({
    category: category.key,
  }));
}

const CodeCategoryRoute = async ({ params }: CodeCategoryRouteProps) => {
  const { category: categoryKey } = await params;

  const category = codeConfig.categories.find(
    (item) => item.key === categoryKey,
  );

  if (!category) {
    notFound();
  }

  return <ContentCategoryPage config={codeConfig} category={category} />;
};

export default CodeCategoryRoute;
