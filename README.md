# 河北石博官网（Next.js 复刻）

一比一复刻 [www.shibopvc.com](http://www.shibopvc.com) 的 Next.js + React + TypeScript + Tailwind CSS 项目。

## 技术栈

- Next.js 16（App Router）
- React 19 + TypeScript
- Tailwind CSS v4

## 本地运行

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm start
```

## 页面路由

| 路径 | 说明 |
|------|------|
| `/` | 首页 |
| `/products` | 产品中心（筛选 / 详情弹窗 / 参数对比） |
| `/solutions` | 行业解决方案（5 大场景） |
| `/projects` | 项目案例 |
| `/knowledge` | 技术支持 / 知识库 |
| `/about` | 关于我们（含锚点） |
| `/contact` | 联系我们 |

## 目录结构

```
src/
  app/           # 路由页面
  components/    # Header / Footer / PageHero
  data/          # 从原站提取的结构化文案与产品数据
  lib/           # 工具函数
public/images/   # 原站图片资源
_reference/      # 原站 HTML/JS/CSS 抓取备份（开发参考）
```

## 联系信息（与原站一致）

- 电话：+86 18631113727
- 邮箱：18631113727@163.com
- 地址：石家庄长安区百川大厦西塔 1307 室
- 备案：冀ICP备2026027014号 / 冀公网安备13010202004673号
