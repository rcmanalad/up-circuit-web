"use client";

import type { MouseEvent, ReactNode } from "react";
import type { InquiryCategory } from "@/lib/site";

type InquiryLinkProps = {
  category: InquiryCategory;
  children: ReactNode;
  className?: string;
};

/**
 * CTA link that smooth-scrolls to the contact section and pre-selects the
 * matching inquiry category in the form.
 */
export default function InquiryLink({ category, children, className = "" }: InquiryLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent<InquiryCategory>("upckt:inquiry", { detail: category }));
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href="#contact" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
