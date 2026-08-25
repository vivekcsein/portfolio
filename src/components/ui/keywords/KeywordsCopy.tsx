"use client";

import useCopyToClipboard from "@/packages/hooks/useCopyToClipboard";

type KeywordsButtonsProps = {
  keywords: string[];
};

export default function KeywordsButtons({ keywords }: KeywordsButtonsProps) {
  const { copy, isCopied, lastCopied } = useCopyToClipboard(1600);

  return (
    <section
      aria-labelledby="topics"
      className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6"
    >
      <div className="flex flex-wrap gap-2.5">
        {keywords.map((keyword) => {
          const copied = isCopied && lastCopied === keyword;

          return (
            <button
              key={keywords.indexOf(keyword)}
              type="button"
              onClick={() => copy(keyword)}
              title={`Copy "${keyword}"`}
              aria-label={`Copy keyword ${keyword}`}
              style={{
                padding: "4px 8px",
              }}
              className={`
                  cursor-pointer
                  inline-flex
                  items-center
                  rounded-sm
                  border
                  px-3.5
                  py-1.5
                  text-sm
                  font-medium
                  transition-all
                  duration-150
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                  focus-visible:ring-offset-2
                  ${
                    copied
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent hover:text-accent-foreground hover:shadow-sm active:scale-[0.98]"
                  }
                `}
            >
              {keyword}
            </button>
          );
        })}
      </div>
    </section>
  );
}
