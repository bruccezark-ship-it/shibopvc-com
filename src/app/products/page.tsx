import type { Metadata } from "next";
import ProductsContent from "./ProductsContent";
import { productPage } from "@/data/products";

export const metadata: Metadata = {
  title: productPage.seo.title,
  description: productPage.seo.description,
  keywords: productPage.seo.keywords,
};

export default function ProductsPage() {
  return <ProductsContent />;
}
