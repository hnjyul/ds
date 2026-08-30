"use client";

import Link from "next/link";
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
  return (
    <nav className="sidebar__navigation">
      {nav.map((category) => (
        <section className="navigation-group" key={category.id}>
          <Link href={buildHref(surface, category.id)} onClick={onNavigate}>
            <h2>{category.label}</h2>
          </Link>
          <ul>
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
        </section>
      ))}
    </nav>
  );
}
