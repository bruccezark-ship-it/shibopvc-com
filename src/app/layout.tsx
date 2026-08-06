import type { Metadata } from "next";
import { Inter, Noto_Serif_SC } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "河北石博新材料科技有限公司",
  description:
    "河北石博是专业弹性地板系统服务商，提供PVC地板、LVT地板、SPC地板、橡胶地板、亚麻地板、运动地板全系产品，覆盖医疗、教育、商业、工业、运动等全场景地面系统解决方案。",
  keywords:
    "河北石博,河北石博新材料科技有限公司,弹性地板,PVC地板,LVT地板,SPC地板,橡胶地板,亚麻地板,运动地板,地面系统,地板铺装",
  icons: {
    icon: "/favicon.png",
  },
  verification: {
    google: "Rn8YgXQH2W6ntr2AoYuRYw9GJcey0VMS86DlbBAS2q4",
    other: {
      "baidu-site-verification": "codeva-6t4tCYCGkt",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSerifSC.variable} h-full antialiased`}
    >
      <head>
        {/* 补充中文衬线字形，与原站 Google Fonts 一致 */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans font-light text-stone-900 bg-white antialiased">
        <ScrollToTop />
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />      <script src="/__opencode_preview_select__.js?v=25" data-opencode-preview-select defer></script>
      </body>
    </html>
  );
}