"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-muted transition-colors hover:border-accent/40 hover:text-white"
      >
        {copied ? (
          <Check className="size-3.5 text-accent-soft" />
        ) : (
          <Copy className="size-3.5" />
        )}
        {copied ? "Copied" : "Copy email"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
