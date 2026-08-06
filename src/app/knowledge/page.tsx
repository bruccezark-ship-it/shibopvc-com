import type { Metadata } from "next";
import KnowledgeContent from "./KnowledgeContent";
import { knowledgePage } from "@/data/knowledge";

export const metadata: Metadata = {
  title: knowledgePage.seo.title,
  description: knowledgePage.seo.description,
  keywords: knowledgePage.seo.keywords,
};

export default function KnowledgePage() {
  return <KnowledgeContent />;
}
