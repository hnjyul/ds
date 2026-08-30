"use client";

import Link from "next/link";
import type { RefObject } from "react";
import type { SurfaceNav, Surface, CategoryId } from "./types";
import { buildHref } from "./navigation-utils";
import { BrandMark } from "./SiteHeader";

type MobileNavDrawerProps = {
  surface: Surface;
  nav: SurfaceNav;
  homeHref: string;
  activeCategoryId: CategoryId | null;
  activeItemSlug: string | null;
  drawerRef: RefObject<HTMLElement | null>;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onOpenSearch: () => void;
};

export function MobileNavDrawer({
  surface,
  nav,
  homeHref,
  activeCategoryId,
  activeItemSlug,
  drawerRef,
  closeButtonRef,
  onClose,
  onOpenSearch,
}: MobileNavDrawerProps) {
  return (
    <div className="mobile-navigation-layer">
      <button
        className="layer-backdrop"
        type="button"
        aria-label="전체 메뉴 닫기"
        tabIndex={-1}
        onClick={onClose}
      />
      <aside
        className="mobile-navigation"
        id="mobile-navigation"
        ref={drawerRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="모바일 문서 탐색"
      >
        <header className="mobile-navigation__header">
          <Link className="site-brand" href={homeHref} onClick={onClose}>
            <BrandMark />
            <span className="site-brand__name">Common UI</span>
          </Link>
          <button
            className="icon-button close-button"
            ref={closeButtonRef}
            type="button"
            aria-label="전체 메뉴 닫기"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <button
          className="search-trigger search-trigger--mobile"
          type="button"
          onClick={() => {
            onClose();
            onOpenSearch();
          }}
        >
          <span className="search-icon" aria-hidden="true" />
          문서 검색
        </button>
        <nav className="mobile-navigation__body">
          {nav.map((category) => (
            <section className="navigation-group" key={category.id}>
              <h2>{category.label}</h2>
              <ul>
                {category.items.map((item) => {
                  const isActive = activeCategoryId === category.id && activeItemSlug === item.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        className="navigation-link"
                        href={buildHref(surface, category.id, item.slug)}
                        aria-current={isActive ? "location" : undefined}
                        onClick={onClose}
                      >
                        <span>{item.label}</span>
                        <small>{item.description}</small>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
      </aside>
    </div>
  );
}
