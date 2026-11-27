import { useState } from "react";

type LogoutProps = {
  onSignIn?: () => void | Promise<void>;
  onGithub?: () => void | Promise<void>;
  quote?: string;
  quoteNote?: string;
  termsHref?: string;
  privacyHref?: string;
};

type Action = "signin" | "github" | null;

const SparkleIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 4l1.6 4.4L15 10l-4.4 1.6L9 16l-1.6-4.4L3 10l4.4-1.6L9 4z" />
    <path d="M17 12l1 2.6L20.6 16 18 17l-1 2.6L16 17l-2.6-1L16 14.6 17 12z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const Spinner = () => (
  <span
    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
    aria-label="Loading"
  />
);

const btnBase =
  "flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7c5cf0] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

export default function Logout({
  onSignIn = () => window.location.assign("/login"),
  onGithub = () => window.location.assign("/auth/github"),
  quote = "Recharge. Your code and drafts will be waiting.",
  quoteNote = "All changes auto-saved to cloud • GitHub sync ready for your next session",
  termsHref = "/terms",
  privacyHref = "/privacy",
}: LogoutProps) {
  const [loading, setLoading] = useState<Action>(null);

  const run = async (action: Exclude<Action, null>, handler: () => void | Promise<void>) => {
    if (loading) return;
    setLoading(action);
    try {
      await handler();
    } finally {
      setLoading(null);
    }
  };

  return (
    <main className="grid min-h-screen w-full grid-cols-1 bg-white font-sans lg:grid-cols-[5.5fr_4.5fr]">
      {/* Left side */}
      <section className="relative flex flex-col bg-white px-8 py-8 sm:px-12">
        <a href="/" className="flex items-center gap-2 text-lg font-semibold text-[#17132e]" aria-label="Folio home">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#7c5cf0] text-white">
            <SparkleIcon className="h-3.5 w-3.5" />
          </span>
          <span>
            Folio<span className="text-[#7c5cf0]">.</span>
          </span>
        </a>

        <div className="mx-auto flex w-full max-w-[380px] flex-1 flex-col items-center justify-center text-center">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7c5cf0] text-white shadow-lg shadow-purple-300/50">
            <SparkleIcon />
          </div>

          <h1 className="text-[26px] font-semibold tracking-tight text-[#17132e]">
            You&apos;ve been signed out
          </h1>

          <p className="mt-3 max-w-[330px] text-[13px] leading-relaxed text-gray-500">
            Thanks for building with Folio. Your portfolio drafts, preview deployments, and custom
            case studies are safely synced in the cloud.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3">
            <button
              type="button"
              className={`${btnBase} bg-[#6d4fe0] hover:bg-[#5b3fc9]`}
              onClick={() => run("signin", onSignIn)}
              disabled={loading !== null}
              aria-busy={loading === "signin"}
            >
              {loading === "signin" ? (
                <Spinner />
              ) : (
                <>
                  Sign back in <ArrowIcon />
                </>
              )}
            </button>

            <button
              type="button"
              className={`${btnBase} bg-[#17132e] hover:bg-black`}
              onClick={() => run("github", onGithub)}
              disabled={loading !== null}
              aria-busy={loading === "github"}
            >
              {loading === "github" ? (
                <Spinner />
              ) : (
                <>
                  <GithubIcon /> Continue with GitHub
                </>
              )}
            </button>
          </div>

          <p className="mt-8 text-[11px] leading-relaxed text-gray-400">
            For security, please close all browser windows if you&apos;re on a public or shared
            computer.
          </p>
        </div>

        <footer className="pb-2 text-center text-[11px] text-gray-400">
          By using Folio, you agree to Folio&apos;s{" "}
          <a href={termsHref} className="underline underline-offset-2 hover:text-[#6d4fe0]">
            Terms
          </a>{" "}
          and{" "}
          <a href={privacyHref} className="underline underline-offset-2 hover:text-[#6d4fe0]">
            Privacy Policy
          </a>
          .
        </footer>
      </section>

      {/* Right side */}
      <aside className="relative hidden items-center overflow-hidden bg-[#261c4e] lg:flex" aria-hidden="true">
        <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border-[32px] border-[#2f2560]" />
        <div className="relative z-10 max-w-[340px] px-12 text-white">
          <span className="mb-3 block text-5xl font-bold leading-none text-[#7c5cf0]">“</span>
          <p className="text-[26px] font-medium leading-snug">{quote}</p>
          <p className="mt-10 text-[11px] text-white/50">{quoteNote}</p>
        </div>
      </aside>
    </main>
  );
}
