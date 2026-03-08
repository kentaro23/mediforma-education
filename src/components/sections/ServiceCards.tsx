import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { homePageData, serviceCards } from "@/lib/home-data";

export function ServiceCards() {
  return (
    <section className="bg-neutralGray-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading title={homePageData.servicesHeading} center />
        <div className="grid gap-5 md:grid-cols-3">
          {serviceCards.map((service) => (
            <Card key={service.title} className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-navy-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutralGray-600">{service.description}</p>
              </div>
              <div className="mt-5">
                {service.comingSoon ? (
                  <p className="text-sm font-semibold text-amber-500">{service.cta}</p>
                ) : (
                  <Button href={service.href} variant="ghost">
                    {service.cta}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
