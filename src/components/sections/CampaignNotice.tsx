import Link from "next/link";
import { siteConfig } from "@/lib/constants";

type CampaignNoticeProps = {
  className?: string;
};

export function CampaignNotice({ className = "" }: CampaignNoticeProps) {
  return (
    <article className={`rounded-2xl border border-amber-500/35 bg-white/10 p-4 backdrop-blur-sm ${className}`.trim()}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
          先着{siteConfig.campaign.capacity}名限定
        </span>
        <span className="rounded-full border border-teal-400/60 bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-100">
          残り{siteConfig.campaign.remaining}名
        </span>
      </div>
      <p className="mt-3 text-lg font-bold text-white md:text-xl">{siteConfig.campaign.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/90">{siteConfig.campaign.description}</p>
      <p className="mt-2 text-xs text-white/75">{siteConfig.campaign.note}</p>
      <Link
        href="/contact"
        className="mt-3 inline-flex text-sm font-semibold text-teal-100 underline decoration-teal-300 underline-offset-4 hover:text-white"
      >
        キャンペーン適用条件を確認する
      </Link>
    </article>
  );
}
