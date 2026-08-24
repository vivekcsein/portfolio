import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

import "highlight.js/styles/github-dark.css";
import "@/styles/ui/markdown.css";

interface MarkdownProps {
  content: string;
  className?: string;
}

const Markdown = ({ content, className }: MarkdownProps) => {
  return (
    <article className={`markdown-body ${className ?? ""}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default Markdown;
