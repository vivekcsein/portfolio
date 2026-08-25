"use client";
import { useCallback, useRef, useState } from "react";

export interface UseCopyResult {
  /** copy a single string to clipboard */
  copy: (text: string) => Promise<boolean>;
  /** copy an array of strings joined by separator */
  copyList: (items: string[], separator?: string) => Promise<boolean>;
  /** last copied text or null */
  lastCopied: string | null;
  /** whether something was recently copied */
  isCopied: boolean;
  /** clear copied state immediately */
  clear: () => void;
}

/**
 * Lightweight clipboard hook with fallback and auto-clear.
 * Default clear timeout is 1600ms.
 */
const useCopyToClipboard = (timeout = 1600): UseCopyResult => {
  const [lastCopied, setLastCopied] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const clear = useCallback(() => {
    setIsCopied(false);
    setLastCopied(null);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const writeFallback = useCallback(async (text: string) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textarea);
      return successful;
    } catch {
      return false;
    }
  }, []);

  const doCopy = useCallback(
    async (text: string) => {
      if (!text) return false;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const ok = await writeFallback(text);
          if (!ok) throw new Error("fallback failed");
        }

        setLastCopied(text);
        setIsCopied(true);

        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
          setIsCopied(false);
          timerRef.current = null;
        }, timeout);

        return true;
      } catch {
        return false;
      }
    },
    [timeout, writeFallback],
  );

  const copyList = useCallback(
    async (items: string[], separator = ", ") => {
      const text = items.join(separator);
      return doCopy(text);
    },
    [doCopy],
  );

  return {
    copy: doCopy,
    copyList,
    lastCopied,
    isCopied,
    clear,
  };
};

export default useCopyToClipboard;
