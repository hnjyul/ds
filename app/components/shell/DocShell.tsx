"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { SurfaceNav, Surface, TocHeading } from "./types";
import { buildHref, flattenSearchItems, resolveLocation } from "./navigation-utils";
import { SiteHeader } from "./SiteHeader";
import { Sidebar } from "./Sidebar";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { SearchOverlay } from "./SearchOverlay";
import { TableOfContentsDetails, TableOfContentsRail } from "./TableOfContents";

type Theme = "light" | "dark";
type Density = "comfortable" | "compact";
type ActiveOverlay = "navigation" | "search" | null;

const CATEGORY_LABELS: Record<string, string> = {
  foundation: "파운데이션",
  components: "컴포넌트",
  utilities: "유틸리티",
};

export function DocShell({
  surface,
  nav,
  children,
}: {
  surface: Surface;
  nav: SurfaceNav;
  children: ReactNode;
}) {
  const pathname = usePathname() ?? `/${surface}`;
  const location = resolveLocation(pathname, surface, nav);
  const searchItems = useMemo(() => flattenSearchItems(surface, nav), [surface, nav]);

  const [theme, setTheme] = useState<Theme>("light");
  const [density, setDensity] = useState<Density>("comfortable");
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const siteHeaderRef = useRef<HTMLElement>(null);
  const docsLayoutRef = useRef<HTMLDivElement>(null);
  const searchDialogRef = useRef<HTMLElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const activeOverlay: ActiveOverlay = isSearchOpen ? "search" : isMobileNavigationOpen ? "navigation" : null;

  const filteredSearchItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("ko");
    if (!normalizedQuery) {
      return searchItems;
    }
    return searchItems.filter((item) =>
      [item.label, item.description, item.categoryLabel]
        .join(" ")
        .toLocaleLowerCase("ko")
        .includes(normalizedQuery),
    );
  }, [searchItems, searchQuery]);

  // Restore theme/density from localStorage before paint-visible state settles (root layout's
  // inline script already set the DOM attributes synchronously; this just syncs React state).
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("common-ui-theme");
    const storedDensity = window.localStorage.getItem("common-ui-density");
    const initialTheme: Theme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    const initialDensity: Density = storedDensity === "compact" ? "compact" : "comfortable";

    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.dataset.density = initialDensity;
    const frame = window.requestAnimationFrame(() => {
      setTheme(initialTheme);
      setDensity(initialDensity);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  // Discover this page's own section headings for the "on this page" TOC + scroll-spy.
  // Re-runs whenever the route changes, since each route now owns its own content.
  useEffect(() => {
    const container = articleRef.current;
    if (!container) {
      return undefined;
    }

    const headingElements = Array.from(container.querySelectorAll<HTMLElement>("h2[id], h3[id]"));
    setHeadings(headingElements.map((element) => ({ id: element.id, label: element.textContent ?? "" })));

    if (headingElements.length === 0) {
      setActiveHeadingId(null);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (visibleEntry) {
          setActiveHeadingId(visibleEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -68%", threshold: [0, 0.2, 0.6] },
    );

    headingElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      const isEditable =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable);

      if (
        ((!isEditable && event.key === "/") ||
          ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k")) &&
        !isSearchOpen
      ) {
        event.preventDefault();
        returnFocusRef.current =
          document.activeElement instanceof HTMLElement ? document.activeElement : null;
        setIsSearchOpen(true);
      }

      if (event.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileNavigationOpen(false);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isSearchOpen]);

  useEffect(() => {
    const pageRegions = [siteHeaderRef.current, docsLayoutRef.current].filter(
      (region): region is HTMLElement => region !== null,
    );
    const activeLayer =
      activeOverlay === "search"
        ? searchDialogRef.current
        : activeOverlay === "navigation"
          ? mobileNavigationRef.current
          : null;
    const previousOverflow = document.body.style.overflow;

    if (!activeOverlay || !activeLayer) {
      pageRegions.forEach((region) => {
        region.inert = false;
        region.removeAttribute("aria-hidden");
      });
      document.body.style.overflow = previousOverflow;

      const returnTarget = returnFocusRef.current;
      if (returnTarget?.isConnected) {
        window.requestAnimationFrame(() => returnTarget.focus());
      }
      returnFocusRef.current = null;
      return undefined;
    }

    const initialFocus = activeOverlay === "search" ? searchInputRef.current : mobileCloseRef.current;
    (initialFocus ?? activeLayer).focus();

    pageRegions.forEach((region) => {
      region.inert = true;
      region.setAttribute("aria-hidden", "true");
    });
    document.body.style.overflow = "hidden";

    const focusableSelector = [
      "a[href]",
      "button:not([disabled]):not([tabindex='-1'])",
      "input:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
    ].join(",");

    const handleOverlayKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        activeLayer.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => element.getClientRects().length > 0);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        event.preventDefault();
        activeLayer.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    activeLayer.addEventListener("keydown", handleOverlayKeyDown);

    return () => {
      activeLayer.removeEventListener("keydown", handleOverlayKeyDown);
      pageRegions.forEach((region) => {
        region.inert = false;
        region.removeAttribute("aria-hidden");
      });
      document.body.style.overflow = previousOverflow;
    };
  }, [activeOverlay]);

  const rememberReturnFocus = (trigger?: HTMLElement) => {
    if (!returnFocusRef.current) {
      returnFocusRef.current =
        trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    }
  };

  const openSearch = (trigger?: HTMLElement) => {
    rememberReturnFocus(trigger);
    setIsSearchOpen(true);
  };

  const openMobileNavigation = (trigger: HTMLElement) => {
    rememberReturnFocus(trigger);
    setIsMobileNavigationOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const updateTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("common-ui-theme", nextTheme);
  };

  const updateDensity = () => {
    const nextDensity: Density = density === "comfortable" ? "compact" : "comfortable";
    setDensity(nextDensity);
    document.documentElement.dataset.density = nextDensity;
    window.localStorage.setItem("common-ui-density", nextDensity);
  };

  const homeHref = `/${surface}`;
  const otherSurfaceHref = surface === "mobile" ? "/pc" : "/mobile";
  const topLinks = nav.map((category) => ({
    href: buildHref(surface, category.id),
    label: category.label,
  }));

  const breadcrumbTrail: { label: string; href: string | null }[] = [{ label: "홈", href: homeHref }];
  if (location.categoryId) {
    breadcrumbTrail.push({
      label: location.categoryLabel ?? CATEGORY_LABELS[location.categoryId] ?? location.categoryId,
      href: location.itemSlug ? buildHref(surface, location.categoryId) : null,
    });
  }
  if (location.itemSlug) {
    breadcrumbTrail.push({ label: location.itemLabel ?? location.itemSlug, href: null });
  }

  const currentIndex = location.itemSlug
    ? searchItems.findIndex(
        (item) => item.categoryId === location.categoryId && item.slug === location.itemSlug,
      )
    : -1;
  const previousItem = currentIndex > 0 ? searchItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex >= 0 && currentIndex < searchItems.length - 1 ? searchItems[currentIndex + 1] : null;

  return (
    <div className="style-guide" data-surface={surface}>
      <a className="skip-link" href="#main-content">
        본문 바로가기
      </a>

      <SiteHeader
        surface={surface}
        homeHref={homeHref}
        otherSurfaceHref={otherSurfaceHref}
        topLinks={topLinks}
        headerRef={siteHeaderRef}
        isMobileNavigationOpen={isMobileNavigationOpen}
        onOpenMobileNavigation={openMobileNavigation}
        onOpenSearch={openSearch}
        density={density}
        onToggleDensity={updateDensity}
        theme={theme}
        onToggleTheme={updateTheme}
      />

      <div className="docs-layout" ref={docsLayoutRef}>
        <aside className="sidebar" aria-label="문서 탐색">
          <Sidebar
            surface={surface}
            nav={nav}
            activeCategoryId={location.categoryId}
            activeItemSlug={location.itemSlug}
          />
          <div className="sidebar__meta">
            <span className="status-dot" aria-hidden="true" />
            <span>문서 상태: 초안</span>
          </div>
        </aside>

        <main className="docs-main" id="main-content">
          <article className="docs-article" ref={articleRef}>
            <nav className="breadcrumb" aria-label="현재 위치">
              <ol>
                {breadcrumbTrail.map((crumb) => (
                  <li key={crumb.label} aria-current={crumb.href ? undefined : "page"}>
                    {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
                  </li>
                ))}
              </ol>
            </nav>

            <TableOfContentsDetails headings={headings} activeId={activeHeadingId} />

            {children}

            {(previousItem || nextItem) && (
              <footer className="article-footer">
                <p>이 문서는 계속 업데이트됩니다.</p>
                <nav aria-label="이전 및 다음 문서">
                  {previousItem ? (
                    <Link href={previousItem.href}>
                      <span>이전</span>
                      <strong>{previousItem.label}</strong>
                    </Link>
                  ) : (
                    <span />
                  )}
                  {nextItem ? (
                    <Link href={nextItem.href}>
                      <span>다음</span>
                      <strong>{nextItem.label}</strong>
                    </Link>
                  ) : (
                    <span />
                  )}
                </nav>
              </footer>
            )}
          </article>
        </main>

        <TableOfContentsRail headings={headings} activeId={activeHeadingId} />
      </div>

      {isMobileNavigationOpen && (
        <MobileNavDrawer
          surface={surface}
          nav={nav}
          homeHref={homeHref}
          activeCategoryId={location.categoryId}
          activeItemSlug={location.itemSlug}
          drawerRef={mobileNavigationRef}
          closeButtonRef={mobileCloseRef}
          onClose={() => setIsMobileNavigationOpen(false)}
          onOpenSearch={() => openSearch()}
        />
      )}

      {isSearchOpen && (
        <SearchOverlay
          dialogRef={searchDialogRef}
          inputRef={searchInputRef}
          query={searchQuery}
          onQueryChange={setSearchQuery}
          results={filteredSearchItems}
          onClose={closeSearch}
          onResultClick={closeSearch}
        />
      )}
    </div>
  );
}
