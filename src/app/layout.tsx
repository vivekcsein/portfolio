import type { Metadata } from "next";
import "@/styles/globals.css";
import AppClientLayout from "@/components/layouts/AppClientLayout";
import fonts from "@/packages/configs/font.config";
import { seo } from "@/packages/seo/index.seo";

export const metadata: Metadata = seo;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fonts.sans} ${fonts.serif} ${fonts.mono} antialiased`}
    >
      <body>
        <AppClientLayout>{children}</AppClientLayout>
      </body>
    </html>
  );
}
