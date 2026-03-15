import type {
  HeroBadge,
  ProblemItem,
  ReasonItem,
  ServiceCard,
  StatItem,
  TestimonialItem
} from "@/lib/types";

export const homePageData = {
  hero: {
    eyecatch: "北里大学医学部 指定校推薦対策",
    title: "合格率No.1を目指す、専門予備校。",
    subtitle:
      "現役北里大学医学部生による直接指導。過去問分析・医療時事対策・面接対策まで、指定校推薦に必要なすべてを網羅。"
  },
  problemsHeading: "こんなお悩みありませんか？",
  servicesHeading: "Mediforma Educationの3つの事業",
  statsHeading: "数字で見るMediforma Education",
  reasonsHeading: "Mediformaが選ばれる理由",
  testimonialsHeading: "合格者の声",
  testimonialsNote: "",
  faqHeading: "よくある質問",
  ctaHeading: "まずは、無料相談から。",
  ctaSubheading: "お子様の進路について、一緒に考えさせてください。"
} as const;

export const heroBadges: HeroBadge[] = [
  { label: "全36コマの体系的カリキュラム" },
  { label: "現役北里医学部生が直接指導" },
  { label: "面接・小論・学科・時事 完全対応" }
];

export const problemItems: ProblemItem[] = [
  {
    question: "指定校推薦の過去問が手に入らない…",
    answer:
      "実際の受験生の体験をもとに再現問題を作成。独自の問題分析で傾向を把握します。"
  },
  {
    question: "医療時事問題の対策方法がわからない…",
    answer:
      "現役医学部生が最新の医療トピックを噛み砕いて解説。ノーベル賞からCRISPR-Cas9まで対応します。"
  },
  {
    question: "集団面接が怖い。何を話せばいいの？",
    answer:
      "10月から集団面接・個人面接の実践講座を対面で開講。立ち回りから作法まで完全指導します。"
  },
  {
    question: "北里大学の魅力をうまく語れない…",
    answer:
      "現役北里生が各科の特色、大学病院の情報、研究の強みを直接レクチャーします。"
  },
  {
    question: "面接官の先生がどんな人か知りたい…",
    answer:
      "面接官になりうる教員の情報を徹底分析した資料を提供。他では手に入らない情報です。"
  },
  {
    question: "地域枠の指定校推薦にも対応してほしい…",
    answer:
      "地域枠指定校で入学した北里生も在籍。通常枠・地域枠どちらにも完全対応します。"
  }
];

export const serviceCards: ServiceCard[] = [
  {
    title: "北里大学医学部 指定校推薦対策",
    description:
      "指定校推薦に必要なすべてを網羅した専門講座。小論文・面接・学科・医療時事の4本柱で、合格まで伴走します。",
    cta: "詳しく見る",
    href: "/shiteiko"
  },
  {
    title: "医学生講師の個別指導塾",
    description:
      "現役医学部生による質の高い個別指導。独自カリキュラムとハイブリッド形式で、再現性のある学力向上を実現します。",
    cta: "詳しく見る",
    href: "/kobetsu"
  },
  {
    title: "医学教育コンテンツ",
    description: "医学教育ツールの開発、教育コンテンツの制作。医学の学びをより効率的に、より深く。",
    cta: "準備中",
    comingSoon: true
  }
];

export const statsItems: StatItem[] = [
  {
    value: 36,
    labelJa: "指定校推薦対策 総講座コマ数",
    labelEn: "Total Lessons"
  },
  {
    value: 100,
    suffix: "%",
    // 公開実績が確定するまで目標値として表示。
    labelJa: "目標合格率",
    labelEn: "Target Pass Rate"
  },
  {
    value: 15,
    suffix: "+",
    labelJa: "在籍北里医学部生メンター数",
    labelEn: "Medical Student Mentors"
  },
  {
    value: 4,
    labelJa: "学科試験 完全対策",
    labelEn: "Subjects Covered"
  }
];

export const reasonItems: ReasonItem[] = [
  {
    id: "01",
    title: "北里大学医学部生が直接指導する専門体制",
    description:
      "指定校推薦で実際に合格した北里大学医学部生が、面接対策からメンタリングまでを担当。他の予備校では得られないリアルな経験と情報に基づいた指導を提供します。"
  },
  {
    id: "02",
    title: "過去問がなくても戦える、独自の問題分析",
    description:
      "過去問が非公開の指定校推薦。Mediformaでは、実際に受験した学生の体験をもとに再現問題を作成し、出題傾向を徹底分析します。"
  },
  {
    id: "03",
    title: "面接官の情報まで徹底的に分析",
    description:
      "個人面接では教授や学部長が面接官を務めます。面接官になりうる教員の研究分野や関心領域を調査し、資料として提供します。"
  },
  {
    id: "04",
    title: "医療時事問題にも正確に対応",
    description:
      "CRISPR-Cas9、ノーベル賞、医療倫理など、集団面接で問われる高度な医学知識に対して、現役医学部生が正しい知識と観点で指導します。"
  },
  {
    id: "05",
    title: "明確な料金体系 + 先着5名の全額返金キャンペーン",
    description:
      "全36コマの体系的カリキュラムを、明瞭な料金で提供。現在は先着5名限定で、不合格時の全額返金キャンペーンを実施中です（残り3名）。"
  },
  {
    id: "06",
    title: "地域枠指定校にも完全対応",
    description:
      "通常枠だけでなく、地域枠指定校で入学した北里生も在籍。地域枠特有の面接対策や出願戦略にも対応できます。"
  }
];

export const testimonialItems: TestimonialItem[] = [
  {
    name: "S.K.",
    year: "2023年度合格",
    course: "全講座セット",
    comment: "面接練習の回数が多く、本番の緊張感に近い練習ができました。"
  },
  {
    name: "A.T.",
    year: "2025年度合格",
    course: "面接+医療時事",
    comment: "医療時事の背景まで理解でき、集団面接の受け答えに自信がつきました。"
  },
  {
    name: "H.N.",
    year: "2022年度合格",
    course: "学科+小論文",
    comment: "100分4科目の時間配分戦略が明確になり、模試の得点が安定しました。"
  },
  {
    name: "M.Y.",
    year: "2024年度合格",
    course: "個別指導併用",
    comment: "定期面談で学習計画を調整でき、継続的に勉強ペースを維持できました。"
  }
];
