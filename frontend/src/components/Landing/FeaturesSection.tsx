import type { ReactElement } from "react";
import FeatureCard from "./FeatureCard";
import { GitHubIcon, LayersIcon, SparklesIcon } from "./icons";

interface Feature {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const features: Feature[] = [
  {
    id: "github",
    number: "01",
    title: "Your GitHub, understood.",
    description:
      "We scan your repositories and help surface the work that best represents your skills—not just your commit count.",
    icon: <GitHubIcon className="size-[22px]" />,
    href: "#github",
  },
  {
    id: "story",
    number: "02",
    title: "Your story, written better.",
    description:
      "Folio AI turns technical details into sharp project stories and an About section that still sounds authentically you.",
    icon: <SparklesIcon className="size-[22px]" />,
    href: "#story",
  },
  {
    id: "design",
    number: "03",
    title: "Designed to stand out.",
    description:
      "Choose a polished, accessible theme and see every edit live. No design degree or wrestling with CSS required.",
    icon: <LayersIcon className="size-[22px]" />,
    href: "#design",
  },
];

export default function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-title"
      className="w-full bg-folio-dark px-6 pt-16 pb-18 font-grotesk md:px-12 xl:px-20 xl:pt-24 xl:pb-28"
    >
      <div className="w-full">
        <p className="mb-5 pl-3 text-xs font-medium tracking-widest text-folio-soft xl:text-sm">
          WHAT MAKES US DIFFERENT
        </p>

        <div className="mb-10 xl:mb-14 flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2
            id="features-title"
            className="text-4xl leading-[1.15] font-bold text-white md:text-[2.75rem] xl:text-6xl"
          >
            Less blank page.
            <span className="block text-folio-purple">More brilliant work.</span>
          </h2>

          <p className="max-w-[520px] text-[0.8125rem] leading-[1.7] font-medium text-folio-muted md:mb-1.5 md:max-w-[340px] md:basis-[340px] xl:max-w-[480px] xl:basis-[480px] xl:text-base">
            Purpose-built for junior developers, Folio combines real GitHub
            context with thoughtful guidance—so you never have to guess what
            belongs in your portfolio.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8">
          {features.map((feature) => (
            <li key={feature.id}>
              <FeatureCard {...feature} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
