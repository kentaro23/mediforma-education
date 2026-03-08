import clsx from "clsx";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionHeading({ title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={clsx("space-y-3", center && "text-center")}>
      <h2 className="text-2xl font-bold text-navy-900 md:text-3xl">{title}</h2>
      {subtitle ? <p className="text-neutralGray-600">{subtitle}</p> : null}
    </div>
  );
}
