import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/lib/constants";

type BrandProps = {
  light?: boolean;
};

export function Brand({ light = false }: BrandProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <Image
        src={light ? "/images/logo-white.svg" : "/images/logo.svg"}
        alt={siteConfig.logoAlt}
        width={36}
        height={36}
        className="h-9 w-9"
      />
      <div className="leading-tight">
        <p
          className={clsx(
            "font-poppins text-[1.15rem] font-medium tracking-[0.02em]",
            light ? "text-white" : "text-navy-900"
          )}
        >
          Mediforma Education
        </p>
      </div>
    </Link>
  );
}
