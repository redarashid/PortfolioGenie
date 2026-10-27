import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg bg-[#241B45] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#32275F] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
