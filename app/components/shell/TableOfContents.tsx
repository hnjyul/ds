"use client";

import type { TocHeading } from "./types";

type TableOfContentsProps = {
  headings: TocHeading[];
  activeId: string | null;
};

/** Desktop right-rail TOC — must render as a direct sibling of <main> inside .docs-layout. */
export function TableOfContentsRail({ headings, activeId }: TableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="table-of-contents" aria-label="이 페이지의 목차">
      <p>이 페이지에서</p>
      <nav>
        {headings.map((heading) => (
          <a
            href={`#${heading.id}`}
            key={heading.id}
            aria-current={activeId === heading.id ? "location" : undefined}
          >
            {heading.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

/** Mobile collapsible TOC — must render inside <article>, near the top of the page content. */
export function TableOfContentsDetails({ headings }: TableOfContentsProps) {
  if (headings.length === 0) {
    return null;
  }

  return (
    <details className="mobile-toc">
      <summary>이 페이지에서</summary>
      <nav aria-label="모바일 페이지 목차">
        {headings.map((heading) => (
          <a href={`#${heading.id}`} key={heading.id}>
            {heading.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
