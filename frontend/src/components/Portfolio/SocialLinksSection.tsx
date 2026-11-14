import type { SocialLinks } from "./types";

interface Props {
  values: SocialLinks;
  onChange: (patch: Partial<SocialLinks>) => void;
}

type IconType = "github" | "linkedin" | "website" | "behance";

export default function SocialLinksSection({ values, onChange }: Props) {
  return (
    <section className="rounded-2xl border-2 border-[#A5A5F5] bg-white p-5 sm:p-7">
      <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
            </svg>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">
              Social Links & Contact
            </h2>
            <p className="text-xs text-gray-500">
              Connect your digital presence and professional networks.
            </p>
          </div>
        </div>

        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
          SEC. 06
        </span>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="GitHub Profile" icon="github">
          <input
            type="url"
            value={values.github}
            onChange={(e) => onChange({ github: e.target.value })}
            placeholder="https://github.com/username"
            className={inputClass}
          />
        </Field>

        <Field label="LinkedIn Profile" icon="linkedin">
          <input
            type="url"
            value={values.linkedin}
            onChange={(e) => onChange({ linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/username"
            className={inputClass}
          />
        </Field>

        <Field label="Personal Website / Blog" icon="website">
          <input
            type="url"
            value={values.website}
            onChange={(e) => onChange({ website: e.target.value })}
            placeholder="https://yourwebsite.com"
            className={inputClass}
          />
        </Field>

        <Field label="Behance / Design Portfolio (Optional)" icon="behance">
          <input
            type="url"
            value={values.behance}
            onChange={(e) => onChange({ behance: e.target.value })}
            placeholder="https://behance.net/username"
            className={inputClass}
          />
        </Field>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-[#D8D0F0] bg-white py-3 pl-10 pr-3 text-xs outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100";

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon: IconType;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <SocialIcon type={icon} />
        </div>
        {children}
      </div>
    </div>
  );
}

function SocialIcon({ type }: { type: IconType }) {
  const common = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case "website":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
        </svg>
      );

    case "behance":
      return (
        <svg {...common}>
          <path d="M3 6h7a3 3 0 0 1 0 6H3V6Zm0 6h8a3 3 0 0 1 0 6H3v-6Z" />
          <path d="M15 7h6M14 14h8a4 4 0 0 0-8 0Zm8 0a4 4 0 0 1-8 0" />
        </svg>
      );
  }
}
