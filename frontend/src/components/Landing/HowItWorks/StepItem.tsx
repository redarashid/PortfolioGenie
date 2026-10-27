import type { Step } from "./steps";

interface StepItemProps {
  step: Step;
}

export default function StepItem({ step }: StepItemProps) {
  const Icon = step.icon;

  return (
    <li className="flex items-start justify-between gap-4 border-t border-slate-200 py-8 last:border-b">
      <div className="grid grid-cols-[5rem_1fr] gap-y-2">
        <div className="flex items-center gap-3 text-xs text-[#6B5BDB]">
          <span>{step.id}</span>
          <span className="h-px flex-1 bg-[#6B5BDB]/60" />
        </div>
        <span className="text-xs font-medium tracking-wide text-[#6B5BDB]">
          {step.label}
        </span>

        <h3 className="col-start-2 text-xl font-medium text-[#1C1633]">
          {step.title}
        </h3>
        <p className="col-start-2 text-xs text-slate-500">{step.description}</p>
      </div>

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDD6F7] text-[#6B5BDB]">
        <Icon size={20} />
      </div>
    </li>
  );
}
