import type { Education } from "./types";

interface Props {
  education: Education[];
  onAdd: () => void;
  onUpdate: (id: string, patch: Partial<Education>) => void;
  onRemove: (id: string) => void;
}

export default function EducationSection({
  education,
  onAdd,
  onUpdate,
  onRemove,
}: Props) {
  return (
    <section className="rounded-2xl border-2 border-[#A5A5F5] bg-white p-5 sm:p-7">
      {/* Section Header */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 10-10-5-10 5 10 5 10-5Z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
              <path d="M22 10v6" />
            </svg>
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">Education</h2>
            <p className="text-xs text-gray-500">
              Add your academic degrees, certifications, or bootcamp credentials.
            </p>
          </div>
        </div>

        <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500">
          SEC. 05
        </span>
      </div>
      <div className="space-y-5">
        {education.map((item, index) => (
          <div
            key={item.id}
            className="rounded-xl border-2 border-[#A5A5F5] p-4 sm:p-7"
          >
            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-5">
              <h3 className="text-sm font-semibold text-gray-800">
                Credential #{index + 1}
              </h3>

              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-gray-500">
                  Degree or Diploma
                </span>

                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Degree">
                <input
                  value={item.degree}
                  onChange={(e) =>
                    onUpdate(item.id, { degree: e.target.value })
                  }
                  placeholder="e.g. Bachelor of Science"
                  className={inputClass}
                />
              </Field>

              <Field label="University / Institution">
                <input
                  value={item.institution}
                  onChange={(e) =>
                    onUpdate(item.id, { institution: e.target.value })
                  }
                  placeholder="e.g. Stanford University / MIT"
                  className={inputClass}
                />
              </Field>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <Field label="Field of Study">
                <input
                  value={item.fieldOfStudy}
                  onChange={(e) =>
                    onUpdate(item.id, { fieldOfStudy: e.target.value })
                  }
                  placeholder="e.g. Computer Science"
                  className={inputClass}
                />
              </Field>

              <Field label="Start Year">
                <input
                  type="number"
                  value={item.startYear}
                  onChange={(e) =>
                    onUpdate(item.id, { startYear: e.target.value })
                  }
                  placeholder="e.g. 2018"
                  className={inputClass}
                />
              </Field>

              <Field label="Graduation Year">
                <input
                  type="number"
                  value={item.graduationYear}
                  onChange={(e) =>
                    onUpdate(item.id, { graduationYear: e.target.value })
                  }
                  placeholder="e.g. 2022"
                  className={inputClass}
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Description (Optional)">
                <textarea
                  rows={4}
                  value={item.description}
                  onChange={(e) =>
                    onUpdate(item.id, { description: e.target.value })
                  }
                  placeholder="Honors, coursework, thesis, or relevant activities..."
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
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-purple-300 py-5 text-sm font-medium text-purple-600 transition-colors hover:bg-purple-50"
      >
        <span className="text-lg">+</span>
        Add Another Education
      </button>
    </section>
  );
}

const inputClass =
  "w-full rounded-lg border border-[#D8D0F0] bg-white px-3 py-3 text-xs outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100";

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