import type { WorkExperience } from "./types";

interface Props {
  experiences: WorkExperience[];
  onAdd: () => void;
  onUpdate: (id: string, patch: Partial<WorkExperience>) => void;
  onRemove: (id: string) => void;
}

const employmentTypes = [
  "Full-time",
  "Part-time",
  "Internship",
  "Freelance",
  "Contract",
  "Temporary",
] as const;

export default function WorkExperienceSection({
  experiences,
  onAdd,
  onUpdate,
  onRemove,
}: Props) {
  return (
    <section className="rounded-2xl border-2 border-[#A5A5F5] bg-white p-5 sm:p-7">
      <div className="mb-6 flex items-center justify-between">
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
              <rect width="16" height="20" x="4" y="2" rx="2" />
              <path d="M8 6h8M8 10h8M8 14h4" />
            </svg>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">Work Experience</h2>
            <p className="text-xs text-gray-500">
              Showcase your career trajectory, roles, and key contributions.
            </p>
          </div>
        </div>

        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
          SEC. 04
        </span>
      </div>

      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="rounded-xl border border-gray-200 p-4 sm:p-5"
          >
            <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-sm font-semibold text-gray-800">
                Position #{index + 1}
              </h3>

              <button
                type="button"
                onClick={() => onRemove(experience.id)}
                className="text-xs text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Job Title">
                <input
                  value={experience.jobTitle}
                  onChange={(e) =>
                    onUpdate(experience.id, { jobTitle: e.target.value })
                  }
                  placeholder="e.g. Staff Software Engineer"
                  className={inputClass}
                />
              </Field>

              <Field label="Company Name">
                <input
                  value={experience.companyName}
                  onChange={(e) =>
                    onUpdate(experience.id, { companyName: e.target.value })
                  }
                  placeholder="e.g. Acme Corp / Stripe"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Employment Type">
                <select
                  value={experience.employmentType}
                  onChange={(e) =>
                    onUpdate(experience.id, {
                      employmentType: e.target
                        .value as WorkExperience["employmentType"],
                    })
                  }
                  className={inputClass}
                >
                    <option value="" disabled>
                      Select Type
                    </option>
                  {employmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Start Date">
                <input
                  type="month"
                  value={experience.startDate}
                  onChange={(e) =>
                    onUpdate(experience.id, { startDate: e.target.value })
                  }
                  className={inputClass}
                />
              </Field>

              <Field label="End Date">
                <input
                  type="month"
                  value={experience.endDate}
                  disabled={experience.currentlyWorking}
                  onChange={(e) =>
                    onUpdate(experience.id, { endDate: e.target.value })
                  }
                  className={inputClass}
                />
              </Field>
            </div>

            <label className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <input
                type="checkbox"
                checked={experience.currentlyWorking}
                onChange={(e) =>
                  onUpdate(experience.id, {
                    currentlyWorking: e.target.checked,
                    endDate: e.target.checked ? "" : experience.endDate,
                  })
                }
                className="accent-purple-600"
              />
              Currently Working Here
            </label>
            <div className="mt-4">
              <Field label="Role Description & Achievements">
                <textarea
                  rows={4}
                  value={experience.description}
                  onChange={(e) =>
                    onUpdate(experience.id, { description: e.target.value })
                  }
                  placeholder="Describe your key projects, architectural decisions, and impact metrics..."
                  className={`${inputClass} resize-y`}
                />
              </Field>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onAdd}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-purple-300 py-4 text-sm text-purple-600 hover:bg-purple-50"
      >
        + Add Another Experience
      </button>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}
