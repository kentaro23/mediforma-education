export const shiteikoPageContent = {
  heroTitle: "北里大学医学部 指定校推薦 完全対策講座",
  heroSubtitle: "過去問非公開の指定校推薦を、独自分析と現役北里生の指導で攻略する。",
  courseSectionTitle: "講座体系",
  pricingSectionTitle: "料金表",
  benefitsSectionTitle: "全講座に含まれる特典",
  timelineSectionTitle: "年間スケジュール",
  ctaMessage: "定員15名。お早めにご相談ください。",
  ctaSubmessage: "まずは現状の学習状況をお聞かせください。"
} as const;

export const kobetsuPageContent = {
  heroTitle: "医学生講師による、本気の個別指導。",
  heroSubtitle: "対面とオンラインのハイブリッドで、再現性のある学力向上を実現。",
  reasonSectionTitle: "Mediformaの個別指導が違う理由",
  pricingSectionTitle: "コース一覧と料金",
  flowSectionTitle: "授業の流れ（1ヶ月のサイクル）",
  faqSectionTitle: "よくある質問",
  ctaTitle: "無料相談で、最適な学習プランをご提案します。",
  ctaSubtitle: "志望校と現状の課題をもとに、受講プランを設計します。"
} as const;

export const aboutPageContent = {
  heroTitle: "会社概要",
  profileHeading: "基本情報",
  serviceNameLabel: "サービス名",
  representativeLabel: "代表",
  affiliationLabel: "所属",
  locationLabel: "所在地",
  emailLabel: "メール",
  phoneLabel: "電話",
  missionLabel: "Mission",
  visionLabel: "Vision",
  parentLabel: "親事業",
  relatedLabel: "関連事業",
  serviceName: "Mediforma Education（Mediforma内事業）",
  representative: "大原 健太郎（Kentaro Ohara）",
  affiliation: "北里大学医学部",
  location: "相模大野・町田エリア（詳細はお問い合わせ時にご案内）",
  mission: "技術と思いやりを備え、社会に貢献する医師を育む",
  vision: "医学部入学〜医療DXまでを人材と仕組みで支える",
  relatedServices: ["Mediforma Society", "Mediforma DX", "Mediforma Consulting"],
  messageTitle: "代表メッセージ",
  messageBody:
    "Mediforma Educationは、受験テクニックの提供だけでなく、医療人としての土台づくりまで見据えた教育を重視しています。受験生と保護者の不安に正面から向き合い、進路選択を伴走することをお約束します。",
  photoPlaceholder: "代表写真プレースホルダー"
} as const;

export const contactPageContent = {
  heroTitle: "お問い合わせ",
  heroDescription:
    "指定校推薦対策・個別指導塾に関するご相談を受け付けています。2営業日以内にご連絡いたします。",
  submitLabel: "送信する",
  sendingLabel: "送信中...",
  successMessage: "お問い合わせを受け付けました。担当者よりご連絡いたします。",
  errorMessage: "送信に失敗しました。時間を置いて再度お試しください。",
  privacyText: "プライバシーポリシーに同意する",
  requiredSuffix: "（必須）",
  optionalSuffix: "（任意）",
  formLabels: {
    name: "お名前",
    furigana: "フリガナ",
    relation: "生徒との関係",
    email: "メールアドレス",
    phone: "電話番号",
    school: "在籍高校名",
    grade: "学年",
    interests: "興味のある講座",
    message: "ご質問・ご相談内容"
  }
} as const;

export const contactFormOptions = {
  relation: ["本人", "保護者", "その他"],
  grade: ["高1", "高2", "高3", "既卒", "中学生", "その他"],
  interests: [
    "指定校推薦 全講座セット",
    "指定校推薦 単科講座",
    "個別指導塾 難関校対策",
    "個別指導塾 中堅校対策",
    "個別指導塾 定期テスト対策",
    "その他"
  ]
} as const;

export const privacyPolicyContent = {
  title: "プライバシーポリシー",
  updatedAt: "最終更新日: 2026年3月8日",
  sections: [
    {
      heading: "1. 取得する情報",
      body: "お問い合わせフォームを通じて、氏名、連絡先、在籍校、相談内容等の情報を取得します。"
    },
    {
      heading: "2. 利用目的",
      body: "取得した情報は、お問い合わせ対応、サービス案内、運営改善のために利用します。"
    },
    {
      heading: "3. 第三者提供",
      body: "法令に基づく場合を除き、本人同意なく第三者に提供しません。"
    },
    {
      heading: "4. 安全管理",
      body: "個人情報への不正アクセス、漏えい、改ざん等を防ぐため合理的な安全管理措置を講じます。"
    },
    {
      heading: "5. お問い合わせ",
      body: "個人情報の開示・訂正・削除等のご要望は、記載の連絡先までお問い合わせください。"
    }
  ]
} as const;
