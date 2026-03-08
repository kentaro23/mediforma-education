import { ctaLabels, siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutralGray-100 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <Button href="/contact" className="flex-1 text-xs">
          {ctaLabels.freeConsultation}
        </Button>
        <Button href={`tel:${siteConfig.phone}`} variant="secondary" className="flex-1 text-xs">
          {ctaLabels.call}
        </Button>
      </div>
    </div>
  );
}
