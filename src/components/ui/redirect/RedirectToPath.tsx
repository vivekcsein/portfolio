"use client";

import Link from "next/link";

interface RedirectToPathProps {
  children: React.ReactNode;
  href: string;
}

const RedirectToPath = ({ children, href }: RedirectToPathProps) => {
  return (
    <Link href={href} className="text-center">
      {children}
    </Link>
  );
};

export default RedirectToPath;
