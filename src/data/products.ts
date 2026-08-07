export type Product = {
  id: string;
  name: string;
  nameEn: string;
  tagline: string;
  desc: string;
  img: string;
  thickness: string;
  wear: string;
  flameRetardant: string;
  install: string;
  features: string[];
  scenes: string[];
  highlight: string;
};

export const productPage = {
  "seo": {
    "title": "产品中心 - PVC地板|LVT地板|SPC地板|橡胶地板|亚麻地板|运动地板",
    "description": "河北石博产品中心：同质透心PVC地板、复合多层PVC地板、LVT豪华乙烯基地板、SPC石塑复合地板、橡胶地板、亚麻地板、防静电PVC地板、运动PVC地胶，全系弹性地板产品覆盖医疗、教育、商业、工业、运动全场景。",
    "keywords": "PVC地板,LVT地板,SPC地板,橡胶地板,亚麻地板,运动地板,同质透心PVC地板,复合PVC地板,防静电地板,弹性地板,河北石博"
  },
  "hero": {
    "label": "产品中心",
    "title": "全系弹性地板产品",
    "subtitle": "PVC · LVT · SPC · 橡胶 · 亚麻 五大品类，覆盖医疗、教育、商业、工业、运动全场景",
    "bgImageKey": "hero",
    "alt": "河北石博 | 弹性地板产品展示"
  },
  "library": {
    "label": "产品库",
    "title": "按场景筛选产品",
    "desc": "点击产品卡片查看详细参数，或通过场景标签快速筛选",
    "filters": [
      "全部",
      "医疗",
      "教育",
      "商业",
      "工业",
      "运动"
    ],
    "hoverCta": "查看详情"
  },
  "compare": {
    "label": "快速对比",
    "title": "各类产品参数速查",
    "columns": [
      "产品类型",
      "厚度范围",
      "耐磨等级",
      "阻燃",
      "适用场景"
    ]
  },
  "cta": {
    "label": "专业选型",
    "title": "不确定哪种产品适合您？",
    "desc": "告诉我们您的项目场景和面积，石博工程师将结合预算和使用需求，为您提供精准的产品选型建议。",
    "buttons": [
      {
        "label": "获取选型建议",
        "href": "/contact",
        "className": "btn-primary"
      },
      {
        "label": "查看行业方案",
        "href": "/solutions",
        "className": "btn-outline-light"
      }
    ]
  },
  "detailModal": {
    "specsLabels": [
      {
        "icon": "thickness",
        "label": "厚度范围",
        "field": "thickness"
      },
      {
        "icon": "wear",
        "label": "耐磨等级",
        "field": "wear"
      },
      {
        "icon": "flame",
        "label": "阻燃等级",
        "field": "flameRetardant"
      },
      {
        "icon": "install",
        "label": "安装方式",
        "field": "install"
      }
    ],
    "featuresTitle": "核心特性",
    "specsTitle": "规格参数",
    "ctas": [
      {
        "label": "获取该产品报价",
        "href": "/contact",
        "className": "btn-primary"
      },
      {
        "label": "查看适用场景方案",
        "href": "/solutions",
        "className": "btn-outline-dark"
      }
    ]
  }
} as const;

export const productFilters = productPage.library.filters;

export const products: Product[] = [
  {
    "id": "homogeneous",
    "name": "同质透心PVC地板",
    "nameEn": "Homogeneous PVC Flooring",
    "tagline": "通体同质 · 耐磨耐用",
    "desc": "耐磨层与基材通体同质透心，磨损后颜色一致不露底。T级耐磨，抗菌率≥99.9%，无缝热焊彻底消除接缝，是医疗、商业、交通等高人流量场所的标准选择。",
    "img": "/images/product-homogeneous-BoPLUhpM.webp",
    "thickness": "2.0 – 3.0 mm",
    "wear": "T 级",
    "flameRetardant": "B1 级",
    "install": "胶粘铺装 + 热焊",
    "features": [
      "通体同色不露底",
      "抗菌率 ≥ 99.9%",
      "无缝热焊",
      "耐化学腐蚀",
      "易清洁消毒"
    ],
    "scenes": [
      "医疗",
      "商业",
      "工业"
    ],
    "highlight": "磨损10年，颜色如一"
  },
  {
    "id": "multilayer",
    "name": "多层复合PVC地板",
    "nameEn": "Multi-layer Composite PVC",
    "tagline": "柔软舒适 · 静音降噪",
    "desc": "玻纤稳定层+弹性发泡层的多层复合结构，脚感柔软舒适，降噪约10dB，尺寸稳定不易变形。耐磨层可印制丰富花色，兼顾功能性与装饰性，适合商业办公和教育场所。",
    "img": "/images/product-multilayer-D6ylQXrn.webp",
    "thickness": "2.5 – 3.5 mm",
    "wear": "P级 / T级",
    "flameRetardant": "B1 级",
    "install": "胶粘铺装",
    "features": [
      "弹性发泡层缓冲",
      "降噪约 10 dB",
      "花色丰富",
      "玻纤稳定层",
      "抗变形"
    ],
    "scenes": [
      "商业",
      "教育"
    ],
    "highlight": "踩上去软，听起来静"
  },
  {
    "id": "lvt",
    "name": "LVT 地板",
    "nameEn": "Luxury Vinyl Tile",
    "tagline": "豪华纹理 · 设计感强",
    "desc": "高清仿木/仿石印刷层配合透明耐磨层，纹理逼真度媲美实木和天然石材。锁扣式安装无需胶水，拆装方便，局部损坏单片更换。是酒店、品牌旗舰店、办公展厅的设计首选。",
    "img": "/images/case_shijiazhuang_benz-FteZJoKA.webp",
    "thickness": "2.0 – 5.0 mm",
    "wear": "P 级",
    "flameRetardant": "B1 级",
    "install": "锁扣浮铺 / 胶粘",
    "features": [
      "仿木 / 仿石纹理",
      "锁扣安装便捷",
      "单片可更换",
      "100+ 花色",
      "E0 级环保"
    ],
    "scenes": [
      "商业"
    ],
    "highlight": "以假乱真的高端质感"
  },
  {
    "id": "spc",
    "name": "SPC 地板",
    "nameEn": "Stone Plastic Composite",
    "tagline": "硬朗稳定 · 防水耐压",
    "desc": "石粉（碳酸钙）+PVC复合基材，密度高、硬度接近瓷砖，防水防潮效果优异。热膨胀系数极低，尺寸稳定不起翘。锁扣安装无需自流平，快速翻新改造成本低，性价比突出。",
    "img": "/images/product-spc-new-C0nw1ZRU.webp",
    "thickness": "4.0 – 6.0 mm",
    "wear": "P 级",
    "flameRetardant": "B1 级",
    "install": "锁扣浮铺",
    "features": [
      "防水防潮",
      "高密度耐压",
      "不起翘变形",
      "无需自流平",
      "快速安装"
    ],
    "scenes": [
      "商业",
      "教育"
    ],
    "highlight": "快速改造、防水稳定"
  },
  {
    "id": "esd",
    "name": "导静电地板",
    "nameEn": "ESD / Anti-static Flooring",
    "tagline": "精准导电 · 保障安全",
    "desc": "在同质透心PVC配方中加入导电碳纤维，表面电阻精确控制在10⁶–10⁹Ω。配合铜箔接地网络，形成完整的静电消散系统，满足手术室、ICU、电子车间、制药洁净室等场所的防静电规范要求。",
    "img": "/images/product-esd-hhalpgAG.webp",
    "thickness": "2.0 – 2.5 mm",
    "wear": "T 级",
    "flameRetardant": "B1 级",
    "install": "导电胶粘 + 铜箔接地",
    "features": [
      "电阻 10⁶–10⁹Ω",
      "导电碳纤维配方",
      "配套铜箔接地网",
      "通过 GB/T 11006",
      "抗菌率 ≥ 99%"
    ],
    "scenes": [
      "医疗",
      "工业"
    ],
    "highlight": "静电归零，安全可量化"
  },
  {
    "id": "sports",
    "name": "运动地板",
    "nameEn": "Sports PVC Flooring",
    "tagline": "专业减震 · 保护关节",
    "desc": "弹性缓冲层+运动专用面层的双层结构，减震值30–70%，垂直变形量＜5mm，符合DIN ISO 18387国际运动地板标准。支持篮球、羽毛球、排球、健身有氧等多场景专业线条划定。",
    "img": "/images/product-sports-Bnwnkcvh.webp",
    "thickness": "4.5 – 8.0 mm",
    "wear": "运动专用",
    "flameRetardant": "B1 级",
    "install": "胶粘铺装",
    "features": [
      "减震值 30–70%",
      "符合 DIN 标准",
      "防滑系数 ≥ 0.6",
      "支持专业划线",
      "耐频繁冲击"
    ],
    "scenes": [
      "运动"
    ],
    "highlight": "关节保护，赛场标准"
  },
  {
    "id": "rubber",
    "name": "橡胶地板",
    "nameEn": "Rubber Flooring",
    "tagline": "弹性最优 · 静音防滑",
    "desc": "天然/合成橡胶制成，弹性在五类弹性地板中最佳，防滑性能优异（湿态防滑系数≥0.5），吸音降噪可达15–20dB。通过色母粒调色，颜色丰富持久，适合机场、医院、地铁等高人流量及有静音防滑需求的公共场所。",
    "img": "/images/baogaoting-7Ki5KTST.webp",
    "thickness": "3.0 – 8.0 mm",
    "wear": "T 级",
    "flameRetardant": "B1 级",
    "install": "胶粘铺装 / 颗粒砖拼铺",
    "features": [
      "湿态防滑 ≥ 0.5",
      "降噪 15–20 dB",
      "通体耐磨不褪色",
      "耐油耐化学品",
      "色彩永久不褪"
    ],
    "scenes": [
      "医疗",
      "教育",
      "工业",
      "运动"
    ],
    "highlight": "弹性最佳，静音最强"
  },
  {
    "id": "linoleum",
    "name": "亚麻地板",
    "nameEn": "Linoleum Flooring",
    "tagline": "天然环保 · 抗菌通体",
    "desc": "亚麻籽油+软木粉+石灰石粉等100%天然原料制成，不含PVC和增塑剂，甲醛释放量趋近于零，可完全生物降解。天然亚麻籽油具有自抗菌特性，色彩为通体色磨损后不露白，是医院、幼儿园、博物馆等环保极高要求场所的首选。",
    "img": "/images/product-linoleum-hRpjsQeQ.webp",
    "thickness": "2.0 – 4.0 mm",
    "wear": "P级 / T级",
    "flameRetardant": "B1 级",
    "install": "亚麻专用胶粘",
    "features": [
      "100% 天然原料",
      "甲醛趋近于零",
      "可生物降解",
      "天然自抗菌",
      "通体色不露底"
    ],
    "scenes": [
      "医疗",
      "教育",
      "商业"
    ],
    "highlight": "地球友好，呵护健康"
  }
];
