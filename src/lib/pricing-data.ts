import type { PricingRow } from "@/lib/types";

export const shiteikoSingleCourses: PricingRow[] = [
  { title: "小論文対策", price: "68,000円", notes: "90分×6コマ" },
  { title: "面接対策", price: "92,000円", notes: "90分×14コマ" },
  { title: "医療時事対策", price: "55,000円", notes: "90分×6コマ" },
  { title: "学科試験対策", price: "85,000円", notes: "90分×10コマ" }
];

export const shiteikoSetPlans: PricingRow[] = [
  {
    title: "全講座セット",
    price: "250,000円",
    notes: "90分×36コマ / 単科合計300,000円から50,000円おトク"
  },
  {
    title: "面接＋医療時事",
    price: "130,000円",
    notes: "90分×20コマ / 単科合計147,000円から17,000円おトク"
  },
  {
    title: "学科＋小論文",
    price: "145,000円",
    notes: "90分×16コマ / 単科合計153,000円から8,000円おトク"
  }
];

export const shiteikoFees = {
  admissionFee: "入塾金: 12,000円 → 期間限定無料",
  materialFee: "教材費: 20,000円（デジタル資料なら無料）",
  comparisonNote:
    "比較注記: 大手予備校Y社の同等講座は約212,000円（7コマ）。Mediformaは36コマで250,000円、コマ単価ベースで高い費用対効果を実現。"
} as const;
