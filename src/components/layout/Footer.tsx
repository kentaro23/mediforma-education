import Link from "next/link";
import { Brand } from "@/components/layout/Brand";
import { navItems, siteConfig, socialLinks } from "@/lib/constants";
import { uiText } from "@/lib/ui-text";

export function Footer() {
  return (
    <footer className="bg-navy-900 py-14 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-3 md:px-6">
        <div className="space-y-3">
          <Brand light />
          <p className="text-sm text-white/75">{siteConfig.siteTagline}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">{uiText.footer.sitemap}</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal-400">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={socialLinks.privacy} className="hover:text-teal-400">
                {uiText.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2 text-sm text-white/80">
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
          <p>
            <Link href={siteConfig.parentServiceUrl} target="_blank" className="hover:text-teal-400">
              {siteConfig.parentServiceName}
            </Link>
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-4 pt-6 text-xs text-white/60 md:px-6">
        {siteConfig.copyright}
      </div>
    </footer>
  );
}
