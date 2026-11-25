import { useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  Bell,
  Crown,
  CircleHelp,
  Feather,
  Info,
  Menu,
  Search,
  Sparkles,
} from "lucide-react";

const SUGGESTIONS = ["Polish bio", "Explain tech stack", "Repo to case study"];

export default function FolioAssistant() {
  const [prompt, setPrompt] = useState("");

  const send = () => {
    const text = prompt.trim();
    if (!text) return;
    console.log("send:", text); // TODO: connect to your API
    setPrompt("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter sends, Shift+Enter inserts a new line
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#2b2548]">
      {/* Top bar */}
      <header className="flex h-[76px] items-center justify-between bg-[#2a2147] px-5 sm:px-8">
        <div className="flex items-center gap-4 sm:gap-28">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7a5cf0]">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="text-3xl font-semibold tracking-tight text-white">
              Folio<span className="text-[#7a5cf0]"> .</span>
            </span>
          </a>

          <button
            type="button"
            className="flex h-11 items-center gap-2 rounded-full bg-gradient-to-b from-white via-[#b9b9c4] to-[#6e6e7a] px-7 text-sm font-medium text-[#2a2147] shadow-md"
          >
            <Crown className="h-5 w-5 fill-amber-400 text-amber-500" />
            Upgrade
          </button>
        </div>

        <div className="flex items-center gap-5 sm:gap-7">
          <label className="hidden h-8 w-64 items-center gap-2.5 rounded-lg border border-white/70 px-3 text-white sm:flex lg:w-80">
            <Search className="h-3.5 w-3.5 shrink-0" />
            <input
              type="text"
              placeholder="Search Projects , Templets...."
              className="w-full bg-transparent text-xs outline-none placeholder:text-white"
            />
          </label>
          <button type="button" aria-label="Notifications" className="text-white/40 hover:text-white/70">
            <Bell className="h-6 w-6" />
          </button>
          <button type="button" aria-label="Help" className="text-white/40 hover:text-white/70">
            <CircleHelp className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#7a5cf0] bg-[#2a2147] text-sm font-semibold text-white"
          >
            HT
          </button>
        </div>
      </header>

      {/* Menu toggle */}
      <div className="px-6 pt-5 sm:px-8">
        <button type="button" aria-label="Open menu" className="text-[#4a4466]">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Hero + composer */}
      <main className="mx-auto flex w-full max-w-[600px] flex-1 flex-col items-center px-5 pb-10 pt-16 sm:pt-24">
        <span className="mb-5 flex h-5 w-5 items-center justify-center rounded-[5px] bg-[#6c4fe0]">
          <Sparkles className="h-3 w-3 text-white" />
        </span>

        <h1 className="text-center text-3xl font-bold tracking-tight">
          Folio AI Assistant
        </h1>
        <p className="mt-4 text-center text-[13px] text-[#4a4466]">
          Ask anything to craft, refine, or polish your portfolio content.
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {SUGGESTIONS.map((s) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => setPrompt(s)}
                className="flex items-center gap-1.5 rounded-md bg-[#ece8fb] px-2.5 py-1.5 text-xs text-[#8b73e0] transition-colors hover:bg-[#e0d9f8]"
              >
                <Sparkles className="h-2 w-2 text-[#b9a9f0]" />
                {s}
              </button>
            </li>
          ))}
        </ul>

        {/* Composer */}
        <div className="mt-14 w-full rounded-xl border border-[#8f78ee] bg-white p-5 shadow-[0_0_14px_rgba(124,92,240,0.15)] transition-shadow focus-within:shadow-[0_0_18px_rgba(124,92,240,0.3)]">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={onKeyDown}
            rows={3}
            placeholder="Ask anything to craft, refine, or polish your portfolio content."
            className="w-full resize-none bg-transparent text-xs text-[#2b2548] outline-none placeholder:text-[#a5a1b5]"
          />

          <div className="mt-2 flex items-end justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="rounded-md bg-[#2b2548] px-4 py-2 text-xs text-white transition-colors hover:bg-[#3a3260]"
              >
                Attach Repo
              </button>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-md bg-[#2b2548] px-3 py-2 text-xs text-white transition-colors hover:bg-[#3a3260]"
              >
                <Feather className="h-3 w-3" />
                Executive Summary
              </button>
            </div>

            <button
              type="button"
              onClick={send}
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6c4fe0] text-white shadow-md shadow-[#6c4fe0]/40 transition-colors hover:bg-[#5b3fd0] disabled:opacity-50"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <p className="mt-8 flex items-center gap-2 text-xs text-[#4a4466]">
          <Info className="h-3 w-3" />
          Shift + Enter for new line • Markdown supported
        </p>
      </main>
    </div>
  );
}
