interface TestimonialData {
  quote: string;
  name: string;
  initials: string;
  role: string;
}

const testimonial: TestimonialData = {
  quote:
    "Folio made my side projects sound like the real product work they are. I stopped apologizing for being junior—and started getting interviews.",
  name: "Rashed Reda",
  initials: "RR",
  role: "Frontend Developer · Hired at Freealance",
};

export default function Testimonial() {
  return (
    <section className="bg-[#EAE6FB] px-6 pb-[90px] pt-20">
      <figure className="mx-auto flex max-w-[780px] flex-col items-center text-center">
        <span
          aria-hidden="true"
          className="font-sans text-[56px] font-bold leading-none text-[#6B5BDB]"
        >
          “
        </span>

        <blockquote className="mt-4 text-[28px] font-medium leading-[39px] tracking-[-0.01em] text-[#1C1633]">
          {testimonial.quote}
        </blockquote>

        <figcaption className="mt-12 flex items-center gap-3 text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C4BAEF] text-base font-medium text-[#6B5BDB]">
            {testimonial.initials}
          </div>
          <div>
            <p className="text-[15px] font-medium leading-5 text-[#1C1633]">
              {testimonial.name}
            </p>
            <p className="text-[13px] leading-5 text-[#9C98AD]">
              {testimonial.role}
            </p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
