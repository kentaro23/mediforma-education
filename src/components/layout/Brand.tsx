import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/lib/constants";

type BrandProps = {
  light?: boolean;
};

export function Brand({ light = false }: BrandProps) {
  return (
    <Link href="/" className="inline-flex h-full items-center gap-3">
      <Image
        src={light ? "/images/logo-white.svg" : "/images/logo.svg"}
        alt={siteConfig.logoAlt}
        width={96}
        height={40}
        className="block h-9 w-auto shrink-0 md:h-10"
      />
      <div className="flex items-center leading-tight">
        <p
          className={clsx(
            "font-poppins text-2xl font-medium tracking-[0.02em]",
            light ? "text-white" : "text-navy-900"
          )}
        >
          Mediforma Education
        </p>
      </div>
    </Link>
  );
}
