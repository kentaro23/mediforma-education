import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title:
    "【無料配布中】北里大学医学部 指定校推薦 面接対策資料の中身を一部公開！ | Mediforma Education",
  description:
    "現役北里医学部生が作成した面接対策資料の中身を一部公開。入室作法、想定質問30問+、医療倫理の回答戦略など。無料相談で全文を配布中。",
  alternates: {
    canonical: "https://www.mediformaedu.com/blog/kitasato-shiteiko-mensetsu-shiryo"
  },
  openGraph: {
    title: "【無料配布中】北里大学医学部 指定校推薦 面接対策資料の中身を一部公開！",
    description:
      "入室作法から医療倫理の回答戦略まで。現役北里医学部生作成の実践ガイド。無料相談で全文配布中。",
    type: "article",
    url: "https://www.mediformaedu.com/blog/kitasato-shiteiko-mensetsu-shiryo",
    images: [
      {
        url: "https://www.mediformaedu.com/images/blog/mensetsu-shiryo-ogp.png",
        width: 1200,
        height: 630,
        alt: "北里大学医学部 指定校推薦 面接対策資料の中身を一部公開"
      }
    ],
    siteName: "Mediforma Education"
  }
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "【無料配布中】北里大学医学部 指定校推薦 面接対策資料の中身を一部公開！",
  author: { "@type": "Organization", name: "Mediforma Education" },
  publisher: {
    "@type": "Organization",
    name: "Mediforma Education",
    url: "https://www.mediformaedu.com"
  },
  datePublished: "2026-03-14",
  dateModified: "2026-03-14",
  description: "現役北里医学部生が作成した面接対策資料の中身を一部公開",
  mainEntityOfPage: "https://www.mediformaedu.com/blog/kitasato-shiteiko-mensetsu-shiryo"
};

function GiftBanner() {
  return (
    <div className="rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-100/50 to-blueAccent-100/40 p-5">
      <p className="text-sm font-semibold text-teal-500">🎁 無料相談特典</p>
      <h3 className="mt-1 text-xl font-bold text-navy-900">無料相談で「面接対策資料」をプレゼント！</h3>
      <p className="mt-3 text-sm leading-relaxed text-neutralGray-600">
        この記事で紹介している面接対策資料（全編）を、無料相談にお越しいただいた方全員に無料でお渡ししています。
      </p>
      <div className="mt-4">
        <Button href="/contact">▶ 無料相談はこちら</Button>
      </div>
      <p className="mt-3 text-sm text-neutralGray-600">mediformaedu.com/contact</p>
    </div>
  );
}

function TipBox({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <aside className="rounded-xl border border-neutralGray-100 bg-white p-5 shadow-soft">
      <div className="border-l-4 border-teal-500 pl-4">
        <p className="text-sm font-semibold text-teal-500">
          {icon} {title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutralGray-600">{body}</p>
      </div>
    </aside>
  );
}

export default function KitasatoMensetsuShiryoPage() {
  return (
    <>
      <Script
        id="blog-kitasato-mensetsu-shiryo-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="bg-gradient-to-br from-navy-900 to-navy-800 pb-14 pt-36 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <span className="inline-flex rounded-full border border-teal-400/50 bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-100">
            面接対策
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            【無料配布中】北里大学医学部 指定校推薦 面接対策資料の中身を一部公開！
          </h1>
          <p className="mt-4 max-w-4xl text-white/85 md:text-lg">
            入室作法、想定質問30問+、医療倫理の回答戦略など。現役北里医学部生作成の実践ガイドを一部公開します。
          </p>
          <p className="mt-4 text-sm text-white/75">更新日: 2026年3月14日 | 執筆: Mediforma Education 編集部</p>
        </div>
      </section>

      <section className="bg-neutralGray-50 py-8">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <GiftBanner />
        </div>
      </section>

      <article className="bg-white pb-20 pt-10">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-[17px] leading-8 text-neutralGray-600 md:px-6">
          <section className="space-y-4">
            <h2 className="border-b-2 border-teal-500 pb-2 text-2xl font-bold text-navy-900">はじめに：この資料は何が違うのか</h2>
            <p>
              北里大学医学部の指定校推薦では、個人面接と集団面接の両方が課されます。過去問は非公開、評価基準も非公開——だからこそ、「実際に合格した人の知見」が最も価値のある情報になります。
            </p>
            <p>
              Mediforma Educationでは、現役北里大学医学部生が作成した「個人・集団面接対策資料」を、無料相談にお越しいただいた方全員に無料で配布しています。
            </p>
            <p>この記事では、その資料の中身を一部公開します。</p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b-2 border-teal-500 pb-2 text-2xl font-bold text-navy-900">1. 入室・第一印象の作り方</h2>
            <p>資料の第1章では、入室から着席までの一連の流れを、チェックリスト形式で解説しています。</p>
            <p>たとえば、以下のようなポイントが含まれています：</p>
            <ul className="space-y-1 pl-6">
              {[
                "ノックは3回（ 2回はトイレのノックと同じ——必ず3回）",
                "「失礼します」の発声と礼は別々に行う（喚びながら礼をしない）",
                "姿勢良く椅子の前まで移動し、指示があるまで立って待つ",
                "手はグーにして膝の上に置く"
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-teal-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              これらは「知っていればできる」ことばかり。でも、練習していないと本番で緊張して抑がデタラメになります。資料では、身体に染みつくまで繰り返すための練習方法も解説しています。
            </p>
            <TipBox
              icon="📋"
              title="資料にはさらに…"
              body="入室から退室までの全ステップをチェックリスト化。印刷してそのまま練習に使える形式です。全文は無料相談時にお渡ししています。"
            />
          </section>

          <section className="space-y-4">
            <h2 className="border-b-2 border-teal-500 pb-2 text-2xl font-bold text-navy-900">
              2. 個人面接の想定質問リスト（30問以上）
            </h2>
            <p>
              資料のメインコンテンツがここです。個人面接で聞かれる質問を、3カテゴリー・30問以上に分類しています。
            </p>

            <h3 className="text-xl font-bold text-navy-900">カテゴリー①：志望動機類</h3>
            <p>「医師志望理由」「本学志望理由」はもちろん、意外と聞かれるのが以下のような質問です：</p>
            <ul className="space-y-1 pl-6">
              {[
                "「看護師ではなく医師を志望する理由は？」",
                "「臨床と研究、どちらに興味がありますか？」",
                "「将来その地に残って就職する気はありますか？」"
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-teal-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>→ これらの回答の方針も資料に含まれています。</p>

            <h3 className="text-xl font-bold text-navy-900">カテゴリー②：医師適性類</h3>
            <p>
              「理想の医師像」「医師に求められる資質を3つ」など、抽象的な質問への答え方を解説しています。
            </p>

            <h3 className="text-xl font-bold text-navy-900">カテゴリー③：人間性・学校生活類</h3>
            <p>
              「高校時代を形容詞3つで表すと？」「嫌いな人とグループを組むときどうする？」など、一見医療と関係なさそうな質問も含まれています。これらは「協調性」や「ストレス耐性」を見るための質問です。
            </p>

            <TipBox
              icon="💡"
              title="資料の独自ポイント"
              body="「友人と親友の違いは？」「友人は何人いるか？」など、他の予備校の資料には載っていないような質問まで網羅しています。実際に受験した学生の体験があるからこその情報です。"
            />
          </section>

          <section className="space-y-4">
            <h2 className="border-b-2 border-teal-500 pb-2 text-2xl font-bold text-navy-900">
              3. 医療倫理・時事問題の回答戦略（一部公開）
            </h2>
            <p>
              資料の後半では、集団面接や小論文で出題されやすい医療倫理・時事問題について、「どう答えればいいのか」を具体的に解説しています。
            </p>
            <p>ここではその一部を公開します。</p>
            <h3 className="text-xl font-bold text-navy-900">医療倫理の4原則（これは必ず覚えよう）</h3>
            <p>
              医学部の面接では、医療倫理への理解が問われます。ビーチャムとチルドレスが提唱した「医療倫理の4原則」は必須知識です：
            </p>
            <div className="overflow-x-auto rounded-2xl border border-neutralGray-100 bg-white shadow-soft">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-teal-100 text-navy-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">原則</th>
                    <th className="px-4 py-3 font-semibold">意味</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["自律性の尊重", "患者さんの意思を尊重する"],
                    ["無危害", "患者さんに害を与えない"],
                    ["善行", "患者さんに善い行いをする"],
                    ["正義", "限りある医療資源を公正に分配する"]
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-neutralGray-100">
                      <td className="px-4 py-3 text-neutralGray-600">{row[0]}</td>
                      <td className="px-4 py-3 text-neutralGray-600">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              この4原則を知ったうえで、各テーマにどう答えるか。そこまで資料では踏み込んでいます。
            </p>
            <h3 className="text-xl font-bold text-navy-900">取り上げているテーマ一覧（全テーマに回答戦略付き）:</h3>
            <ul className="space-y-1 pl-6">
              {[
                "安楽死・尊厳死：なぜ「認めてはいけない」のか、その理由と添えるべき言葉まで",
                "チーム医療：「中心は医師」は間違い。正しい答えと具体的な職種の挙げ方",
                "日本の医療保険制度と医療費問題：「予防医学の促進」が最適解である理由",
                "臓器移植・新臓器移植法：改正のポイントと議論すべき問題点",
                "ゲノム編集・CRISPR-Cas9：デザイナーベビーへの見解と、iPS細胞との結びつけ方",
                "出生前診断：優生思想と多様性の観点からの論じ方"
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-teal-500">•</span>
                  <span>
                    <strong>{item.split("：")[0]}</strong>：{item.split("：")[1]}
                  </span>
                </li>
              ))}
            </ul>
            <TipBox
              icon="⚠️"
              title="この記事では「テーマ一覧」までの公開です"
              body="各テーマの具体的な回答戦略（「こう言えば高評価」「これは絶対NG」など）は資料本編に記載しています。無料相談にお越しいただければ、全文をお渡しします。"
            />
          </section>

          <section className="space-y-4">
            <h2 className="border-b-2 border-teal-500 pb-2 text-2xl font-bold text-navy-900">
              4. 「チーム医療」の回答例（特別公開）
            </h2>
            <p>一つだけ、資料の中身を特別に公開します。</p>
            <p>
              「チーム医療の中心は誰ですか？」と聞かれたとき、<strong>「医師です」と答える人が非常に多い</strong>
              のですが、これは間違いです。
            </p>
            <p>
              正解は <strong>「患者さん」</strong> です。
            </p>
            <p>
              チーム医療とは、患者さんを中心に、様々な医療従事者が関わることでより良い医療を提供すること。医師はその中で全体の意見をまとめ、チームの舵をとる役割を担います。
            </p>
            <p>
              また、チームのメンバーを具体的に挙げられると好印象です：看護師、PT（理学療法士）、ST（言語聴覚士）、OT（作業療法士）、管理栄養士、カウンセラー、ケアマネージャーなど。
            </p>
            <p>
              <strong>特に北里大学はチーム医療を重視しているので、このテーマは出題可能性が非常に高い</strong>
              です。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="border-b-2 border-teal-500 pb-2 text-2xl font-bold text-navy-900">5. 資料に含まれる全コンテンツ</h2>
            <p>改めて、無料配布資料の全体像をまとめます：</p>
            <div className="overflow-x-auto rounded-2xl border border-neutralGray-100 bg-white shadow-soft">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-teal-100 text-navy-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">#</th>
                    <th className="px-4 py-3 font-semibold">コンテンツ</th>
                    <th className="px-4 py-3 font-semibold">この記事での公開</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["§1", "入室・第一印象の作り方", "一部公開 ✔", "open"],
                    ["§2", "質疑応答の基本姿勢 + 医療倫理の4原則", "一部公開 ✔", "open"],
                    ["§3", "想定質問リスト30問+（3カテゴリー）", "カテゴリー名のみ公開", "open"],
                    ["§4", "安楽死・尊厳死の回答戦略", "非公開 🔒", "closed"],
                    ["§5", "チーム医療の回答戦略", "特別公開 ✔", "open"],
                    ["§6", "医療保険制度・医療費の回答戦略", "非公開 🔒", "closed"],
                    ["§7", "臓器移植・新臓器移植法の回答戦略", "非公開 🔒", "closed"],
                    ["§8", "ゲノム編集・CRISPR-Cas9の回答戦略", "非公開 🔒", "closed"],
                    ["§9", "出生前診断の回答戦略", "非公開 🔒", "closed"]
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-neutralGray-100">
                      <td className="whitespace-nowrap px-4 py-3 text-neutralGray-600">{row[0]}</td>
                      <td className="px-4 py-3 text-neutralGray-600">{row[1]}</td>
                      <td
                        className={`px-4 py-3 font-medium ${
                          row[3] === "open" ? "text-teal-500" : "text-red-600"
                        }`}
                      >
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="border-b-2 border-teal-500 pb-2 text-2xl font-bold text-navy-900">まとめ：無料相談で資料を受け取ろう</h2>
            <p>
              北里大学医学部の指定校推薦は、過去問非公開・評価基準非公開という特殊な入試です。だからこそ、「実際に合格した先輩の知見」が最も強力な武器になります。
            </p>
            <p>
              この資料は、現役北里医学部生が自身の経験をもとに作成した実践的なガイドです。無料相談にお越しいただければ、全文をお渡しします。
            </p>
          </section>

          <section>
            <GiftBanner />
          </section>

          <section className="rounded-2xl border border-neutralGray-100 bg-neutralGray-50 p-5">
            <p className="text-sm font-semibold text-navy-900">
              ▶ 関連記事: 北里大学医学部 指定校推薦 面接対策完全ガイド
            </p>
            <Link
              href="/blog/kitasato-shiteiko-mensetsu-taisaku"
              className="mt-2 inline-flex text-sm font-semibold text-teal-500 hover:text-teal-400"
            >
              → /blog/kitasato-shiteiko-mensetsu-taisaku
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}
