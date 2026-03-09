import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { FamilyBanner } from "@/components/family-banner/FamilyBanner";
import { siteConfig } from "@/lib/constants";
import { sharedMetadata, topMetadata } from "@/lib/metadata";
import { educationalOrganizationJsonLd } from "@/lib/structured-data";
import "@/styles/globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    default: String(topMetadata.title),
    template: "%s"
  },
  description: topMetadata.description,
  keywords: [...siteConfig.seoKeywords]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${poppins.variable}`}>
        <Script
          id="educational-organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(educationalOrganizationJsonLd)
          }}
        />
        <Header />
        <main>{children}</main>
        <FamilyBanner />
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
