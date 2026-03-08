import { siteConfig } from "@/lib/constants";

export const educationalOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.siteName,
  description:
    "北里大学医学部指定校推薦対策と医学生講師による個別指導を提供する教育サービス。",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: "https://mediforma-education.vercel.app",
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.parentServiceName,
    url: siteConfig.parentServiceUrl
  },
  areaServed: "JP",
  sameAs: [siteConfig.parentServiceUrl]
};
