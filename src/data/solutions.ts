export type Solution = {
  id: string;
  scene: string;
  subs: string;
  img: string;
  needs: string[];
  recommend: string;
  layers: string[];
  products: string[];
  process: string;
  caseTitle: string;
  caseArea: string;
  caseLocation: string;
  caseDuration: string;
  caseChallenge: string;
  caseResult: string;
};

export const solutionsPage = {
  "seo": {
    "title": "行业解决方案 - 医疗|教育|商业|工业|运动地面系统",
    "description": "河北石博基于丰富工程经验，为医疗、教育、商业、工业、运动五大场景提供从需求分析到铺装交付的完整弹性地板系统方案，包含PVC地板、LVT地板、SPC地板、橡胶地板、亚麻地板等产品选型与铺装工艺。",
    "keywords": "医疗地板,学校地板,商业地板,工业地板,运动地板,弹性地板方案,地面系统,河北石博"
  },
  "hero": {
    "label": "行业解决方案",
    "title": "场景驱动的地面系统方案",
    "subtitle": "不同行业有不同的地面需求。石博基于丰富工程经验，为每个场景提供从需求分析到铺装交付的完整系统方案",
    "bgImageKey": "hero",
    "alt": "河北石博 | 行业弹性地板解决方案"
  },
  "selector": {
    "label": "选择您的行业场景",
    "title": "找到适合您的解决方案"
  },
  "detailLabels": {
    "needs": "项目需求",
    "recommend": "推荐系统",
    "layers": "系统结构",
    "products": "推荐产品",
    "process": "铺装工艺",
    "viewCases": "查看相关案例",
    "viewCaseHover": "查看案例"
  },
  "bottomCta": {
    "text": "您的项目也有类似的地面需求？让石博为您量身定制系统方案",
    "button": {
      "label": "预约现场勘察",
      "href": "/contact"
    }
  },
  "decisionPath": {
    "label": "决策路径",
    "title": "从场景到方案，一站式闭环",
    "steps": [
      "场景分析",
      "系统方案",
      "产品选型",
      "铺装工艺",
      "案例验证",
      "获取报价"
    ]
  }
} as const;

export const solutions: Solution[] = [
  {
    "id": "medical",
    "scene": "医疗空间",
    "subs": "医院 · 诊所 · 实验室",
    "img": "/images/medical-O7NrtNju.webp",
    "needs": [
      "抗菌防霉",
      "防滑安全",
      "易清洁",
      "耐化学腐蚀",
      "防静电"
    ],
    "recommend": "同质透心PVC地板 / 亚麻地板 + 导电铜箔系统 + 自流平基层 + 专业焊线铺装",
    "layers": [
      "同质透心PVC/亚麻面层",
      "导静电胶水层",
      "3mm自流平层",
      "基层处理"
    ],
    "products": [
      "医用抗菌PVC卷材",
      "天然亚麻地板"
    ],
    "process": "基层检测 → 自流平铺装 → PVC/亚麻铺装 → 无缝焊接 → 导电接地 → 验收",
    "caseTitle": "某三甲医院地面翻新",
    "caseArea": "15,000㎡",
    "caseLocation": "河北石家庄",
    "caseDuration": "25天",
    "caseChallenge": "24小时不间断运营，需分区铺装",
    "caseResult": "采用分区轮替铺装方案，材料夜间配送，白天铺装，全程不影响医院正常运营"
  },
  {
    "id": "education",
    "scene": "教育空间",
    "subs": "学校 · 幼儿园",
    "img": "/images/education-Coow0odh.webp",
    "needs": [
      "环保安全",
      "色彩丰富",
      "耐磨耐刮",
      "柔软防滑",
      "易清洁"
    ],
    "recommend": "复合PVC地板 / SPC地板 / 亚麻地板 + 弹性发泡底层 + 水性环保胶 + 彩色分区铺装",
    "layers": [
      "复合PVC/SPC/亚麻面层",
      "弹性发泡层",
      "水性环保胶",
      "自流平层",
      "基层处理"
    ],
    "products": [
      "教育专用PVC卷材",
      "SPC地板",
      "天然亚麻地板",
      "橡胶地板"
    ],
    "process": "基层检测 → 自流平铺装 → 环保胶水涂布 → PVC/亚麻铺装 → 收边处理 → 验收",
    "caseTitle": "某实验小学教学楼翻新",
    "caseArea": "6,800㎡",
    "caseLocation": "深圳南山",
    "caseDuration": "18天",
    "caseChallenge": "学生安全与铺装进度平衡",
    "caseResult": "利用暑假窗口期铺装，选用E0级环保材料和天然亚麻地板，完工即通过空气质量检测"
  },
  {
    "id": "commercial",
    "scene": "商业空间",
    "subs": "商场 · 写字楼",
    "img": "/images/commercial-BO9Hry6s.webp",
    "needs": [
      "高耐磨",
      "美观设计",
      "易清洁",
      "阻燃安全",
      "静音"
    ],
    "recommend": "同质透心PVC地板 / LVT地板 / SPC地板 / 橡胶地板 + B1阻燃 + 精密铺装",
    "layers": [
      "同透PVC/LVT/SPC/橡胶面层",
      "高强胶水层",
      "2mm自流平层",
      "基层处理"
    ],
    "products": [
      "商用同透PVC卷材",
      "LVT地板",
      "SPC地板",
      "静音橡胶地板"
    ],
    "process": "基层检测 → 打磨修补 → 自流平铺装 → PVC/LVT/SPC/橡胶铺装 → 焊缝/收边处理 → 清洁验收",
    "caseTitle": "某金融中心办公楼",
    "caseArea": "12,000㎡",
    "caseLocation": "河北石家庄",
    "caseDuration": "30天",
    "caseChallenge": "高人流量，需快速交付",
    "caseResult": "采用T级耐磨商用PVC地板，分区铺装，夜间加班，提前5天完成交付"
  },
  {
    "id": "industrial",
    "scene": "工业空间",
    "subs": "工厂 · 仓库",
    "img": "/images/industrial-BiN1KofN.webp",
    "needs": [
      "耐压耐磨",
      "耐油污",
      "防静电",
      "耐化学腐蚀",
      "易维护"
    ],
    "recommend": "工业级PVC地板 / 橡胶地板 + 防静电系统 + 耐压自流平 + 重载铺装",
    "layers": [
      "工业PVC/橡胶面层",
      "防静电胶水层",
      "耐压自流平层",
      "基层加固"
    ],
    "products": [
      "工业防静电PVC地板",
      "重载耐磨PVC地板",
      "耐油防滑橡胶地板"
    ],
    "process": "基层检测 → 基层加固 → 耐压自流平 → PVC/橡胶铺装 → 防静电接地 → 验收",
    "caseTitle": "某电子工厂车间地面",
    "caseArea": "8,000㎡",
    "caseLocation": "苏州",
    "caseDuration": "22天",
    "caseChallenge": "防静电要求严格，需接地电阻达标",
    "caseResult": "导静电PVC地板+铜箔网格接地系统，接地电阻实测<10⁶Ω，完全达标"
  },
  {
    "id": "sports",
    "scene": "体育空间",
    "subs": "健身房 · 体育馆",
    "img": "/images/sports-C8yZpVhE.webp",
    "needs": [
      "减震回弹",
      "防滑耐磨",
      "抗冲击",
      "专业划线",
      "耐汗水"
    ],
    "recommend": "专业运动PVC地胶 / 橡胶地板 + 弹性缓冲层 + 运动标准划线 + DIN铺装",
    "layers": [
      "运动PVC/橡胶面层",
      "弹性缓冲层",
      "运动地板胶",
      "自流平层",
      "基层处理"
    ],
    "products": [
      "专业运动PVC地胶",
      "健身房专用PVC地板",
      "弹性橡胶地板"
    ],
    "process": "基层检测 → 弹性层铺设 → 运动地胶/橡胶铺装 → 专业划线 → 弹性测试 → 验收",
    "caseTitle": "某综合体育馆",
    "caseArea": "8,500㎡",
    "caseLocation": "北京",
    "caseDuration": "20天",
    "caseChallenge": "需同时满足篮球和羽毛球场地标准",
    "caseResult": "采用多功能运动地胶，DIN标准减震，双场地专业划线，一次性通过验收"
  }
];
