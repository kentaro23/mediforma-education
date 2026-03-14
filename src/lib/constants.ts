import type { NavItem } from "@/lib/types";

export const siteConfig = {
  siteName: "Mediforma Education",
  siteTagline: "確かな道筋を、ここから。",
  logoAlt: "Mediforma Education ロゴ",
  phone: "080-9322-6024",
  email: "education@mediforma.jp",
  parentServiceName: "Mediforma",
  parentServiceUrl: "https://mediforma.jp",
  copyright: "© 2026 Mediforma Education. All rights reserved.",
  seoKeywords: [
    "北里大学医学部 指定校推薦",
    "医学部 予備校",
    "医学生 講師",
    "個別指導塾"
  ]
} as const;

export const navItems: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "指定校推薦対策", href: "/shiteiko" },
  { label: "個別指導塾", href: "/kobetsu" },
  { label: "ブログ", href: "/blog" },
  { label: "事業概要", href: "/about" },
  { label: "お問い合わせ", href: "/contact" }
];

export const ctaLabels = {
  freeConsultation: "無料相談を申し込む",
  details: "講座の詳細を見る",
  contactNow: "まずは、無料相談から。",
  call: "電話する",
  callLabel: "お電話",
  mailLabel: "メール"
} as const;

export const socialLinks = {
  privacy: "/privacy"
} as const;
