import { notFound } from "next/navigation";
import ContentCategoryPage from "@/components/features/docs-content-app/ContentCategoryPage";
import { docsConfig } from "@/packages/configs/docs.config";

interface DocsCategoryRouteProps {
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

const DocsCategoryRoute = async ({ params }: DocsCategoryRouteProps) => {
  const { category: categoryKey } = await params;

  const category = docsConfig.categories.find(
    (item) => item.key === categoryKey,
  );

  if (!category) {
    notFound();
  }

  return <ContentCategoryPage config={docsConfig} category={category} />;
};

export default DocsCategoryRoute;
