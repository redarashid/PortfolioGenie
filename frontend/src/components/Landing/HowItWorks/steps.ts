import {
  GitBranch,
  Rocket,
  Sparkles,
  Share2,
  type LucideIcon,
} from "lucide-react";

export interface Step {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const steps: Step[] = [
  {
    id: "01",
    label: "CONNECT",
    title: "Link your GitHub",
    description: "You choose what we can see. Your code stays yours.",
    icon: GitBranch,
  },
  {
    id: "02",
    label: "CURATE",
    title: "Pick your best work",
    description: "Smart suggestions help you show range, craft, and impact.",
    icon: Rocket,
  },
  {
    id: "03",
    label: "POLISH",
    title: "Create with AI",
    description: "Generate strong first drafts, then make every word your own.",
    icon: Sparkles,
  },
  {
    id: "04",
    label: "LAUNCH",
    title: "Share your Folio",
    description: "Publish a fast, responsive portfolio in one click.",
    icon: Share2,
  },
];
