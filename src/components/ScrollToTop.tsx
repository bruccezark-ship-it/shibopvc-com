"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** 路由切换时瞬间回到页面顶部，不做平滑滚动/入场动画 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 带 hash 的锚点跳转：瞬时定位到目标，不平滑滚动
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
