import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { contactPage } from "@/data/contact";

export const metadata: Metadata = {
  title: contactPage.seo.title,
  description: contactPage.seo.description,
  keywords: contactPage.seo.keywords,
};

export default function ContactPage() {
  return <ContactContent />;
}
