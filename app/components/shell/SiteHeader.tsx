"use client";

import Link from "next/link";
import type { RefObject } from "react";
import type { Surface } from "./types";

type Density = "comfortable" | "compact";
type Theme = "light" | "dark";

type TopLink = { href: string; label: string; isActive: boolean };

type SiteHeaderProps = {
  surface: Surface;
  homeHref: string;
  otherSurfaceHref: string;
  topLinks: TopLink[];
  headerRef: RefObject<HTMLElement | null>;
  isMobileNavigationOpen: boolean;
  onOpenMobileNavigation: (trigger: HTMLElement) => void;
  onOpenSearch: (trigger?: HTMLElement) => void;
  density: Density;
  onToggleDensity: () => void;
  theme: Theme;
  onToggleTheme: () => void;
};

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__cell" />
      <span className="brand-mark__cell" />
      <span className="brand-mark__cell" />
    </span>
  );
}

export function SiteHeader({
  surface,
  homeHref,
  otherSurfaceHref,
  topLinks,
  headerRef,
  isMobileNavigationOpen,
  onOpenMobileNavigation,
  onOpenSearch,
  density,
  onToggleDensity,
  theme,
  onToggleTheme,
}: SiteHeaderProps) {
  const surfaceLabel = surface === "mobile" ? "Mobile" : "PC";
  const otherSurfaceLabel = surface === "mobile" ? "PC 화면" : "모바일 화면";

  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <button
          className="icon-button site-header__menu"
          type="button"
          aria-label="전체 메뉴 열기"
          aria-expanded={isMobileNavigationOpen}
          aria-controls="mobile-navigation"
          onClick={(event) => onOpenMobileNavigation(event.currentTarget)}
        >
          <span className="menu-icon" aria-hidden="true" />
        </button>

        <Link className="site-brand" href={homeHref} aria-label="Common UI 홈">
          <BrandMark />
          <span className="site-brand__name">Common UI</span>
        </Link>
        <span className="version-badge">{surfaceLabel}</span>

        <nav className="site-header__links" aria-label="주요 메뉴">
          {topLinks.map((link) => (
            <Link href={link.href} key={link.href} aria-current={link.isActive ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="surface-switch" href={otherSurfaceHref}>
            {otherSurfaceLabel}
          </Link>
          <button
            className="search-trigger"
            type="button"
            aria-haspopup="dialog"
            onClick={(event) => onOpenSearch(event.currentTarget)}
          >
            <span className="search-icon" aria-hidden="true" />
            <span className="search-trigger__label">문서 검색</span>
            <kbd>⌘ K</kbd>
          </button>
          <button
            className="icon-button density-toggle"
            type="button"
            aria-label={`문서 밀도를 ${density === "comfortable" ? "좁게" : "넓게"} 변경`}
            onClick={onToggleDensity}
          >
            <span className="density-icon" aria-hidden="true" />
          </button>
          <button
            className="icon-button"
            type="button"
            aria-label={`${theme === "light" ? "어두운" : "밝은"} 테마로 변경`}
            onClick={onToggleTheme}
          >
            <span className="theme-icon" aria-hidden="true">
              {theme === "light" ? "◐" : "☀"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export { BrandMark };
