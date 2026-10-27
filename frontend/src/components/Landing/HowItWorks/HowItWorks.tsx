import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import StepItem from "./StepItem";
import { steps } from "../HowItWorks/steps";

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24 lg:px-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="mb-8 text-xs font-medium uppercase tracking-wide text-[#6B5BDB]">
            How it works
          </p>

          <h2 className="text-5xl font-medium leading-tight text-[#1C1633]">
            From repo to
            <span className="block text-[#6B5BDB]">remarkable.</span>
          </h2>

          <p className="mt-6 max-w-sm text-sm text-slate-500">
            A calm, guided process that gets you from “I should make a
            portfolio” to “Here’s my portfolio” before your coffee gets cold.
          </p>

          <Button className="mt-8">
            Start building for free <ArrowRight size={16} />
          </Button>
        </div>

        <ol>
          {steps.map((step) => (
            <StepItem key={step.id} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
