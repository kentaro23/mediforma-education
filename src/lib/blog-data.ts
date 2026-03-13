export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  updatedAt: string;
  publishedAt: string;
  author: string;
  keywords: string[];
  lead: string;
  blocks: BlogBlock[];
};

export const blogPageContent = {
  title: "ブログ",
  subtitle:
    "北里大学医学部の指定校推薦対策を中心に、面接・小論文・医療時事の実践ノウハウを発信します。"
} as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "kitasato-shiteiko-mensetsu-taisaku",
    title: "北里大学医学部 指定校推薦 面接対策完全ガイド",
    seoTitle:
      "【現役北里医学部生が教える】北里大学医学部 指定校推薦 面接対策完全ガイド | Mediforma Education",
    description:
      "北里大学医学部の指定校推薦面接対策を現役北里医学部生が徹底解説。集団面接・個人面接のコツ、出題テーマ傾向、対策スケジュールまで。",
    updatedAt: "2026-03-13",
    publishedAt: "2026-03-13",
    author: "Mediforma Education 編集部（北里大学医学部 在籍講師監修）",
    keywords: [
      "北里大学 医学部 指定校推薦 面接",
      "北里 指定校 集団面接",
      "北里大学 推薦 対策",
      "医学部 推薦入試 面接"
    ],
    lead:
      "集団面接・個人面接で合格を勝ち取るために、本当に必要な準備を、実際の合格者知見に基づいてまとめました。",
    blocks: [
      {
        type: "paragraph",
        text:
          "「指定校推薦なら全員受かる」と思われがちですが、北里大学医学部の指定校推薦では毎年不合格者が出ています。準備の質が結果を分ける入試です。"
      },
      { type: "heading", text: "1. 北里大学医学部 指定校推薦の面接概要" },
      {
        type: "table",
        headers: ["項目", "集団面接", "個人面接"],
        rows: [
          ["形式", "受験生3名・面接官3名", "受験生1名・面接官2名"],
          ["時間", "約20〜30分", "約10〜15分"],
          ["内容", "医療時事テーマの議論", "志望理由・調査書・面接票の確認"],
          ["評価ポイント", "医療知識・論理性・協調性", "人柄・動機の深さ・誠実さ"],
          ["難易度", "★★★☆（対策必須）", "★★☆☆（準備で差がつく）"]
        ]
      },
      {
        type: "quote",
        text:
          "集団面接が最も差がつくポイントです。テーマとメンバーが毎回異なるため、医療時事の準備量が勝負を分けます。"
      },
      { type: "heading", text: "2. 集団面接（グループディスカッション）対策" },
      {
        type: "paragraph",
        text:
          "北里の集団面接は、正解を当てる試験ではなく、医療課題に対する思考力と協働姿勢を評価する試験です。"
      },
      {
        type: "heading",
        text: "2-1. 典型的な進行"
      },
      {
        type: "list",
        items: [
          "医療時事テーマの提示（資料・グラフが配られる場合あり）",
          "数分間の思考時間",
          "受験生が順番に意見を述べる",
          "グループで議論",
          "追加テーマで再度議論"
        ]
      },
      { type: "heading", text: "2-2. 出題テーマの傾向" },
      {
        type: "list",
        items: [
          "勤務医の働き方・労働時間問題",
          "がん患者の就労支援",
          "女性医師のメリット・課題",
          "地域医療・医師不足問題",
          "小児医療や患者対応のシナリオ型課題"
        ]
      },
      {
        type: "paragraph",
        text:
          "面接官が見ているのは、結論の正しさよりも、根拠を持って考え、他者と議論を進められるかです。"
      },
      { type: "heading", text: "2-3. 合格者に共通する5つの特徴" },
      {
        type: "list",
        items: [
          "結論→理由→具体例（PREP）で話せる",
          "他者の意見を受けて議論を前進させられる",
          "医療知識を過不足なく織り込める",
          "発言と傾聴のバランスが取れている",
          "知らないテーマでも誠実に考えを示せる"
        ]
      },
      {
        type: "note",
        text:
          "NG行動は「他者の意見の強い否定」「独演」「論点逸脱」です。北里が重視するチーム医療適性と逆方向になります。"
      },
      { type: "heading", text: "3. 個人面接対策" },
      {
        type: "paragraph",
        text:
          "個人面接はオーソドックスですが、回答の深さで差がつきます。志望理由は北里の具体情報と自身の原体験を接続してください。"
      },
      {
        type: "list",
        items: [
          "医師を志す理由",
          "北里大学を志望する理由",
          "高校生活で印象に残った経験",
          "気になる医療ニュース",
          "地域枠受験者は地域医療への具体的な関心"
        ]
      },
      { type: "heading", text: "4. 面接対策スケジュール（推奨）" },
      {
        type: "table",
        headers: ["時期", "取り組み"],
        rows: [
          ["6〜7月", "医療時事インプット開始、北里情報の収集"],
          ["8月", "オープンキャンパス参加、志望理由の下書き"],
          ["9月", "志望理由書の完成、個人面接想定問答の整理"],
          ["10月前半", "集団面接の実践練習"],
          ["10月後半", "個人面接の模擬面接と改善"],
          ["11月初旬", "直前総仕上げ、最新時事の最終確認"]
        ]
      },
      { type: "heading", text: "5. Mediforma Educationの面接対策の特徴" },
      {
        type: "list",
        items: [
          "現役北里医学部生が直接指導",
          "対面中心の実践練習（14コマ）",
          "面接官情報の分析資料を提供",
          "医療時事対策講座と連動した設計"
        ]
      },
      { type: "heading", text: "まとめ" },
      {
        type: "paragraph",
        text:
          "北里大学医学部の指定校推薦は、準備した受験生が確実に有利になる入試です。特に集団面接は、医療時事の知識と議論経験がそのまま結果に反映されます。"
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
