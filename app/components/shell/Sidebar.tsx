"use client";

import Link from "next/link";
import { useState } from "react";
import type { CategoryId, SurfaceNav } from "./types";
import { buildHref } from "./navigation-utils";
import type { Surface } from "./types";

type SidebarProps = {
  surface: Surface;
  nav: SurfaceNav;
  activeCategoryId: CategoryId | null;
  activeItemSlug: string | null;
  onNavigate?: () => void;
};

export function Sidebar({ surface, nav, activeCategoryId, activeItemSlug, onNavigate }: SidebarProps) {
  // No active category yet (surface home) shows every group open; once inside a
  // category, only that one starts open so a long component list doesn't bury it.
  const [openCategoryIds, setOpenCategoryIds] = useState<Set<CategoryId>>(
    () => new Set(activeCategoryId ? [activeCategoryId] : nav.map((category) => category.id)),
  );

  // Keep the sidebar in sync with the top nav / breadcrumb / any other link that
  // jumps straight to a category: whatever becomes active always opens, without
  // discarding groups the user opened by hand. Adjusted during render (not an
  // effect) per React's "adjusting state when a prop changes" pattern.
  const [syncedCategoryId, setSyncedCategoryId] = useState(activeCategoryId);
  if (activeCategoryId !== syncedCategoryId) {
    setSyncedCategoryId(activeCategoryId);
    if (activeCategoryId && !openCategoryIds.has(activeCategoryId)) {
      setOpenCategoryIds(new Set(openCategoryIds).add(activeCategoryId));
    }
  }

  const toggleCategory = (categoryId: CategoryId) => {
    setOpenCategoryIds((current) => {
      const next = new Set(current);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  return (
    <nav className="sidebar__navigation">
      {nav.map((category) => {
        const isOpen = openCategoryIds.has(category.id);
        const groupId = `sidebar-group-${category.id}`;
        return (
          <section className="navigation-group" key={category.id}>
            <div className="navigation-group__header">
              <Link
                className="navigation-group__label"
                href={buildHref(surface, category.id)}
                onClick={onNavigate}
              >
                <h2>{category.label}</h2>
              </Link>
              <button
                type="button"
                className="navigation-group__toggle"
                aria-expanded={isOpen}
                aria-controls={groupId}
                aria-label={`${category.label} 목록 ${isOpen ? "접기" : "펼치기"}`}
                onClick={() => toggleCategory(category.id)}
              >
                <span className="chevron-icon" aria-hidden="true" />
              </button>
            </div>
            {isOpen && (
              <ul id={groupId}>
                {category.items.map((item) => {
                  const isActive = activeCategoryId === category.id && activeItemSlug === item.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        className="navigation-link"
                        href={buildHref(surface, category.id, item.slug)}
                        aria-current={isActive ? "location" : undefined}
                        onClick={onNavigate}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        );
      })}
    </nav>
  );
}
