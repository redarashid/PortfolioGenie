import { SparklesIcon } from "../Landing/icons";

export default function FolioLogo() {
  return (
    <a
      href="/"
      aria-label="Folio home"
      className="inline-flex items-center gap-4 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-folio-purple"
    >
      <span className="grid size-9 -rotate-6 place-items-center rounded-lg bg-folio-purple text-white">
        <SparklesIcon className="size-5" />
      </span>
      <span className="flex items-end gap-1.5 text-[2rem] leading-none font-bold text-folio-ink">
        Folio
        <span className="mb-1 size-2 bg-folio-purple" aria-hidden="true" />
      </span>
    </a>
  );
}
