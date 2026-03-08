import type { AdmissionRow, TableColumn } from "@/lib/types";

export const admissionColumns: TableColumn<AdmissionRow>[] = [
  { key: "year", header: "年度" },
  { key: "capacity", header: "募集人数" },
  { key: "applicants", header: "志願者数" },
  { key: "accepted", header: "合格者数" },
  { key: "ratio", header: "倍率" }
];

export const shiteikoAdmissionTable: AdmissionRow[] = [
  { year: "2026", capacity: 38, applicants: 61, accepted: 39, ratio: "1.56" },
  { year: "2025", capacity: 35, applicants: 64, accepted: 35, ratio: "1.83" },
  { year: "2024", capacity: 35, applicants: 61, accepted: 35, ratio: "1.74" },
  { year: "2023", capacity: 35, applicants: 64, accepted: 35, ratio: "1.83" }
];

export const regionalAdmissionTable: AdmissionRow[] = [
  { year: "2026", capacity: 16, applicants: 36, accepted: 16, ratio: "2.25" },
  { year: "2025", capacity: 16, applicants: 41, accepted: 16, ratio: "2.56" },
  { year: "2024", capacity: 16, applicants: 31, accepted: 16, ratio: "1.94" },
  { year: "2023", capacity: 16, applicants: 40, accepted: 16, ratio: "2.50" }
];

export const shiteikoOverview = {
  sectionTitle: "北里大学医学部指定校推薦とは",
  admissionsTitle: "指定校推薦 入試データ",
  regionalTitle: "地域枠指定校 入試データ",
  examTitle: "試験内容",
  reasonTitle: "なぜ専門対策が必要か",
  intro:
    "北里大学医学部の指定校推薦は、過去問・評価基準が非公開である一方、学科試験・小論文・個人面接・集団面接を総合評価する入試方式です。",
  examPoints: [
    "学科試験（100分で4科目という特殊形式）",
    "小論文",
    "個人面接（教授・学部長が担当）",
    "集団面接（医療時事テーマの出題あり）",
    "評価基準は非公開",
    "過去問は非公開"
  ],
  whySpecialized:
    "過去問がない・評価基準が非公開・医療時事問題への対応が必要・面接官情報が少ないという構造上、一般的な予備校だけでは対策が難しい入試です。"
} as const;
