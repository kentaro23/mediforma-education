import type { Metadata } from "next";

const baseUrl = "https://www.mediformaedu.com";

export const sharedMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Mediforma Education",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mediforma Education"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"]
  }
};

export const topMetadata: Metadata = {
  title: "Mediforma Education | 北里大学医学部 指定校推薦対策の専門予備校",
  description:
    "北里大学医学部の指定校推薦対策に特化した予備校。現役北里医学部生による面接指導、独自の再現問題分析、医療時事対策まで全36コマで完全対応。個別指導塾も併設。"
};

export const shiteikoMetadata: Metadata = {
  title: "北里大学医学部 指定校推薦 完全対策講座 | Mediforma Education",
  description:
    "過去問非公開の北里大学医学部指定校推薦を攻略。小論文・面接・学科・医療時事の4講座、全36コマで328,000円。現役北里医学部生が直接指導。"
};

export const kobetsuMetadata: Metadata = {
  title: "医学生講師の個別指導塾 | Mediforma Education",
  description:
    "現役医学部生による質の高い個別指導。独自カリキュラムと対面×オンラインのハイブリッド形式で、再現性のある学力向上を実現。月額15,000円〜。"
};

export const aboutMetadata: Metadata = {
  title: "事業概要 | Mediforma Education",
  description: "Mediforma Educationの事業概要、事業責任者情報、教育理念をご案内します。"
};

export const contactMetadata: Metadata = {
  title: "お問い合わせ | Mediforma Education",
  description: "指定校推薦対策講座・個別指導塾に関するお問い合わせはこちら。"
};

export const contactThanksMetadata: Metadata = {
  title: "お問い合わせ完了 | Mediforma Education",
  description:
    "お問い合わせありがとうございます。Mediforma Educationから確認メールをお送りします。"
};

export const privacyMetadata: Metadata = {
  title: "プライバシーポリシー | Mediforma Education",
  description: "Mediforma Educationの個人情報保護方針について。"
};
