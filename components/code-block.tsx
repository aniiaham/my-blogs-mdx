"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
}

export function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    const text = preRef.current?.textContent || "";
    
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative group">
      <pre ref={preRef}>{children}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 text-gray-400 hover:text-gray-200 transition-all opacity-0 group-hover:opacity-100"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
