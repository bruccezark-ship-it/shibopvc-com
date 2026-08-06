import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";
import { projectsPage } from "@/data/projects";

export const metadata: Metadata = {
  title: projectsPage.seo.title,
  description: projectsPage.seo.description,
  keywords: projectsPage.seo.keywords,
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
