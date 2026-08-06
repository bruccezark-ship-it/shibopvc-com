import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";
import { solutionsPage } from "@/data/solutions";

export const metadata: Metadata = {
  title: solutionsPage.seo.title,
  description: solutionsPage.seo.description,
  keywords: solutionsPage.seo.keywords,
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
