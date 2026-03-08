import type { PricingRow } from "@/lib/types";

export const shiteikoSingleCourses: PricingRow[] = [
  { title: "小論文対策", price: "88,000円", notes: "90分×6コマ" },
  { title: "面接対策", price: "118,000円", notes: "90分×14コマ" },
  { title: "医療時事対策", price: "74,000円", notes: "90分×6コマ" },
  { title: "学科試験対策", price: "108,000円", notes: "90分×10コマ" }
];

export const shiteikoSetPlans: PricingRow[] = [
  {
    title: "全講座セット",
    price: "328,000円",
    notes: "90分×36コマ ／ 単科合計388,000円から60,000円おトク"
  },
  {
    title: "面接＋医療時事",
    price: "168,000円",
    notes: "90分×20コマ ／ 単科合計192,000円から24,000円おトク"
  },
  {
    title: "学科＋小論文",
    price: "178,000円",
    notes: "90分×16コマ ／ 単科合計196,000円から18,000円おトク"
  }
];

export const shiteikoFees = {
  admissionFee: "入塾金: 12,000円 → 期間限定無料",
  materialFee: "教材費: 20,000円（デジタル資料なら無料）",
  comparisonNote:
    "参考: 単科で全科目を受講した場合の合計は388,000円。全講座セットは328,000円で、60,000円分のセット優待が適用されます。"
} as const;
