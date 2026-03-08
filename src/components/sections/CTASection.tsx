import { Button } from "@/components/ui/Button";
import { ctaLabels, siteConfig } from "@/lib/constants";

type CTASectionProps = {
  heading: string;
  subheading: string;
};

export function CTASection({ heading, subheading }: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl space-y-5 px-4 text-center md:px-6">
        <h2 className="text-2xl font-bold md:text-3xl">{heading}</h2>
        <p className="text-white/80">{subheading}</p>
        <div>
          <Button href="/contact">{ctaLabels.freeConsultation}</Button>
        </div>
        <p className="text-sm text-white/80">
          {ctaLabels.callLabel}: {siteConfig.phone} / {ctaLabels.mailLabel}: {siteConfig.email}
        </p>
      </div>
    </section>
  );
}
