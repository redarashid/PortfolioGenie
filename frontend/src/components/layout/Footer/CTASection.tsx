import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import Footer from "./Footer";

export default function CTASection() {
  return (
    <>
    
    <section className="relative overflow-hidden bg-gradient-to-b from-[#2A2344] to-[#241E3D] px-6 pb-24 pt-[66px] text-center">
      {/* decorative corners */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 hidden h-[190px] w-[200px] rounded-bl-[170px] border-b border-l border-white/5 bg-[#231D3A] md:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 hidden h-[192px] w-[195px] rounded-tr-[170px] border-r border-t border-white/5 bg-[#231D3A] md:block"
      />

      <div className="relative mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-wide text-[#7C6AE8]">
          Your work is worth showing
        </p>

        <h2 className="mt-6 text-4xl font-medium leading-[1.4] text-white sm:text-5xl sm:leading-[66px]">
          Ready to make your
          <span className="block text-[#6B5BDB]">
            code impossible to ignore?
          </span>
        </h2>

        <p className="mt-6 text-[15px] text-[#A9A5BC]">
          Build a portfolio that feels like you—and works as hard as you do.
        </p>

        <Button className="mt-10 rounded-xl bg-[#6B55E0] px-6 py-4 hover:bg-[#7A66EA]">
          Build my portfolio for free <ArrowRight size={16} />
        </Button>

        <p className="mt-8 text-xs text-[#5B5675]">
          No credit card. No design skills. No excuses.
        </p>
      </div>
    </section>
      <Footer />
    </>
  );
}
