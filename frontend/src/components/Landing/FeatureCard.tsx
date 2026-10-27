import type { ReactElement } from "react";
import { ArrowRightIcon } from "./icons";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactElement;
  href: string;
}

export default function FeatureCard({
  number,
  title,
  description,
  icon,
  href,
}: FeatureCardProps) {
  return (
    <article className="h-full rounded-3xl border border-white/10 bg-folio-card p-6 pb-7 xl:p-8 xl:pb-10">
      <div className="mb-11 xl:mb-16 flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-folio-purple text-white">
          {icon}
        </span>
        <span className="text-xs text-folio-muted">{number}</span>
      </div>

      <h3 className="mb-3.5 text-xl leading-snug font-semibold text-white xl:text-2xl">
        {title}
      </h3>
      <p className="mb-6 text-[0.8125rem] leading-[1.65] font-medium text-folio-muted xl:text-base">
        {description}
      </p>

      <a
        href={href}
        className="inline-flex items-center gap-1.5 rounded-sm text-xs font-medium text-folio-soft hover:underline xl:text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-folio-soft"
      >
        Explore feature
        <ArrowRightIcon className="size-3" />
      </a>
    </article>
  );
}
